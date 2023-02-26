import { getTextContent, getDateValue } from "notion-utils"
import { NotionAPI } from "notion-client"
import { BlockMap, CollectionPropertySchemaMap } from "notion-types"
import { customMapImageUrl } from "./customMapImageUrl"

async function getPageProperties(
  id: string,
  block: BlockMap,
  schema: CollectionPropertySchemaMap
) {
  const rawProperties = Object.entries(block?.[id]?.value?.properties || [])

  const parsedProperties = await Promise.all(
    rawProperties.map(([key, val]) =>
      PropertyHandler.handle(schema[key]?.type, val, id, block)
    )
  )

  const propertyKeys = rawProperties.map((property) => schema[property[0]].name)

  return parsedProperties
    .filter((property) => property !== null)
    .reduce(
      (acc, property, idx) => {
        return {
          ...acc,
          [propertyKeys[idx]]: property,
        }
      },
      { id }
    )
}

abstract class PropertyHandler {
  static handle(type: string, val: any, id: string, block: BlockMap) {
    switch (type) {
      case "file":
        return filePropertyHandler.parse(val, id, block)
      case "date":
        return datePropertyHandler.parse(val)
      case "select":
      case "multi_select":
        return selectPropertyHandler.parse(val)
      case "person":
        return personPropertyHandler.parse(val)
      default:
        return getTextContent(val)
    }
  }

  abstract parse(...args: any): any
}

class FilePropertyHandler extends PropertyHandler {
  parse(val: any, id: string, block: BlockMap) {
    try {
      const Block = block?.[id].value
      const url: string = val[0][1][0][1]
      const newurl = customMapImageUrl(url, Block)
      return newurl
    } catch (error) {
      return null
    }
  }
}

class DatePropertyHandler extends PropertyHandler {
  parse(val: any[]) {
    const dateProperty: any = getDateValue(val)
    delete dateProperty.type
    return dateProperty
  }
}

class SelectPropertyHandler extends PropertyHandler {
  parse(val: any) {
    const selects = getTextContent(val)
    if (selects[0]?.length) {
      return selects.split(",")
    }
    return null
  }
}

class PersonPropertyHandler extends PropertyHandler {
  api = new NotionAPI()

  async parse(val: any) {
    const rawUsers: any[] = val.flat()
    const users = []

    for (const element of rawUsers) {
      if (element[0][1]) {
        const userId = element[0]
        const res: any = await this.api.getUsers(userId)

        const resValue =
          res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value

        const user = {
          id: resValue?.id,
          name:
            resValue?.name ||
            `${resValue?.family_name}${resValue?.given_name}` ||
            undefined,
          profile_photo: resValue?.profile_photo || null,
        }

        users.push(user)
      }
    }

    return users
  }
}

const filePropertyHandler = new FilePropertyHandler()
const datePropertyHandler = new DatePropertyHandler()
const selectPropertyHandler = new SelectPropertyHandler()
const personPropertyHandler = new PersonPropertyHandler()

export { getPageProperties as default }

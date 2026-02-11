import { getTextContent, getDateValue } from "notion-utils"
import { NotionAPI } from "notion-client"
import { BlockMap, CollectionPropertySchemaMap } from "notion-types"
import { customMapImageUrl } from "./customMapImageUrl"

async function getPageProperties(
  id: string,
  block: BlockMap,
  schema: CollectionPropertySchemaMap
) {
  const api = new NotionAPI()
  
  // Handle nested block structure: block[id].value.value or block[id].value
  const blockData = block?.[id] as any
  const blockValue = blockData?.value?.value || blockData?.value
  const rawProperties = Object.entries(blockValue?.properties || [])
  
  const excludeProperties = ["date", "select", "multi_select", "person", "file"]
  const properties: any = {}
  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val]: any = rawProperties[i]
    properties.id = id
    
    const schemaInfo = schema[key]
    if (!schemaInfo) {
      continue
    }
    
    if (schemaInfo.type && !excludeProperties.includes(schemaInfo.type)) {
      properties[schemaInfo.name] = getTextContent(val)
    } else {
      switch (schemaInfo.type) {
        case "file": {
          try {
            const url: string = val[0][1][0][1]
            const newurl = customMapImageUrl(url, blockValue)
            properties[schemaInfo.name] = newurl
          } catch (error) {
            properties[schemaInfo.name] = undefined
          }
          break
        }
        case "date": {
          const dateProperty: any = getDateValue(val)
          delete dateProperty.type
          properties[schemaInfo.name] = dateProperty
          break
        }
        case "select": {
          const selects = getTextContent(val)
          if (selects[0]?.length) {
            properties[schemaInfo.name] = selects.split(",")
          }
          break
        }
        case "multi_select": {
          const selects = getTextContent(val)
          if (selects[0]?.length) {
            properties[schemaInfo.name] = selects.split(",")
          }
          break
        }
        case "person": {
          const rawUsers = val.flat()

          const users = []
          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i][0][1]) {
              const userId = rawUsers[i][0]
              const res: any = await api.getUsers(userId)
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
          properties[schemaInfo.name] = users
          break
        }
        default:
          break
      }
    }
  }
  return properties
}

export { getPageProperties as default }

import { BlockMap, CollectionPropertySchemaMap } from "notion-types"
import PropertyHandler from "./PropertyHandler"

async function getPageProperties(
  id: string,
  block: BlockMap,
  schema: CollectionPropertySchemaMap
) {
  const rawProperties = Object.entries(block?.[id]?.value?.properties || [])
  const propertyKeys = rawProperties.map((property) => schema[property[0]].name)

  const parsedProperties = await Promise.all(
    rawProperties.map(([key, val]) =>
      PropertyHandler.handle(schema[key]?.type, val, id, block)
    )
  )

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

export { getPageProperties as default }

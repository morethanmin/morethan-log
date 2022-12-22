import { idToUuid } from 'notion-utils'
export default function getAllPageIds(collectionQuery: any, viewId?: any) {
  const views = Object.values(collectionQuery)[0] as any
  let pageIds = []
  if (viewId) {
    const vId = idToUuid(viewId)
    pageIds = views[vId]?.blockIds
  } else {
    const pageSet = new Set()
    Object.values(views).forEach((view: any) => {
      view?.collection_group_results?.blockIds?.forEach((id: any) =>
        pageSet.add(id)
      )
    })
    pageIds = [...pageSet]
  }
  return pageIds
}

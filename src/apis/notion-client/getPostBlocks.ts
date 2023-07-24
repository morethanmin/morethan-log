import { NotionAPI } from "notion-client"

export async function getRecordMap(pageId: string) {
  const api = new NotionAPI()
  const recordMap = await api.getPage(pageId)
  return recordMap
}

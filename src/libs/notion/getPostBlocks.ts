import { NotionAPI } from 'notion-client'

export async function getPostBlocks(id: string) {
  const api = new NotionAPI()
  const pageBlock = await api.getPage(id)
  return pageBlock
}

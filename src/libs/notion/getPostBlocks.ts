import CONFIG from 'c4cydonia.config'
import { NotionAPI } from 'notion-client'

export async function getPostBlocks(id: string) {
  const authToken = CONFIG.notionConfig.accessToken || undefined
  const api = new NotionAPI({ authToken })
  const pageBlock = await api.getPage(id)
  return pageBlock
}

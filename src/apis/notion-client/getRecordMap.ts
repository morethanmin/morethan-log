import fs from "fs"
import { NotionAPI } from "notion-client"
import path from "path"

const CACHE_DIR = path.resolve(".cache")

export const getRecordMap = async (pageId: string) => {
  const cacheFile = path.join(CACHE_DIR, `${pageId}.json`)

  // 캐시 폴더 없으면 생성
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR)
  }

  // 캐시 파일이 있다면 바로 반환
  if (fs.existsSync(cacheFile)) {
    console.log(`[CACHE HIT] ${cacheFile}`)
    return JSON.parse(fs.readFileSync(cacheFile, "utf-8"))
  }

  // 캐시 없으면 Notion에서 가져오고 파일로 저장
  const api = new NotionAPI()
  const recordMap = await api.getPage(pageId)

  fs.writeFileSync(cacheFile, JSON.stringify(recordMap))
  console.log(`[CACHE MISS] Fetched and cached: ${cacheFile}`)

  return recordMap
}

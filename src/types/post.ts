export type TPost = {
  id: string
  date: { start_date: string }
  type: string[]
  slug: string
  tags?: string[]
  summary?: string
  title: string
  status: string[]
  createdTime: string
  fullWidth: boolean
}

export type TPosts = TPost[]

export type TTags = {
  [tagName: string]: number
}

export type TPost = {
  id: string
  date: { start_date: string }
  type: string[]
  slug: string
  tags?: string[]
  summary?: string
  author?: {
    id: string
    first_name: string
    last_name: string
    profile_photo: string
  }[]
  title: string
  status: string[]
  createdTime: string
  fullWidth: boolean
  thumbnail?: string
}

export type TPosts = TPost[]

export type TTags = {
  [tagName: string]: number
}

export type ThemeType = 'dark' | 'light'

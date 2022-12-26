import { ImageLoader } from 'next/image'

const imageLoader: ImageLoader = ({ src, width }) => {
  return `${src}?w=${width}`
}

export default imageLoader

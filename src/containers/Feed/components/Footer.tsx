import CONFIG from '@/morethan-log.config'
import React from 'react'

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <div className="text-gray-500 text-sm mt-3">
      © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
    </div>
  )
}

export default Footer

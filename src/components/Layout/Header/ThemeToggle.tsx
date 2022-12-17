import CONFIG from '@/morethan-log.config'
import { getTheme, ThemeType } from '@/src/hooks/useThemeEffect'
import React, { useEffect, useState } from 'react'

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [theme, setTheme] = useState<ThemeType>()

  useEffect(() => {
    if (typeof window === 'object') {
      setTheme(getTheme())
    }
  }, [])

  const handleClick = () => {
    const changedTheme = getTheme() !== 'dark' ? 'dark' : 'light'
    localStorage.setItem('theme', changedTheme)
    setTheme(changedTheme)
    changedTheme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }

  if (CONFIG.blog.theme !== 'auto') return null
  return (
    <div className={`cursor-pointer dark:text-gray-50`} onClick={handleClick}>
      {theme}
    </div>
  )
}

export default ThemeToggle

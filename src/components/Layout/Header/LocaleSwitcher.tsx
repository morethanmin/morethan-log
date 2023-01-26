import React from "react"
import Link from "next/link"
import {language} from "@/src/locales"
import { useRouter } from "next/router"
import { useIntl } from "react-intl"
type Props = {}

const LocaleSwitcher: React.FC<Props> = () => {
  const defaultLocale = useIntl().defaultLocale
  //select from dropdown function
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // get the current pathname
    const pathname = window.location.pathname
    // get the current locale
    const currentLocale = window.location.pathname.split("/")[1]
    // get the selected locale
    const selectedLocale = e.target.value
    // if the current locale is the same as the selected locale, do nothing
    if (currentLocale === selectedLocale) {
      return
    }
    if(selectedLocale === defaultLocale) {
      window.location.pathname = pathname.replace(`/${currentLocale}`, '')
      return
    }
    window.location.pathname = pathname.split("/").length > 2 ? pathname.replace(`/${currentLocale}`, `/${selectedLocale}`) : `/${selectedLocale}${pathname}`
  }

  const currentLocale = useRouter().locale
  if (language.length === 1 || language.length === 0) return null
  return (
    <select
      className="bg-transparent border-none"
      onChange={handleSelect}
      defaultValue={currentLocale}
    >
      {language.map((lang: any) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  )
}

export default LocaleSwitcher

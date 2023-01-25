import React from "react"
import Link from "next/link"
import langs from "../../../locales"
import { useRouter } from "next/router"
type Props = {}

const LocaleSwitcher: React.FC<Props> = () => {
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
    // if the current locale is not the same as the selected locale, redirect to the new locale
    window.location.pathname = pathname.replace(
      `/${currentLocale}`,
      `/${selectedLocale}`
    )
  }

  const currentLocale = useRouter().locale
  return (
    <select
      className="bg-transparent border-none"
      onChange={handleSelect}
      defaultValue={currentLocale}
    >
      {langs.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  )
}

export default LocaleSwitcher

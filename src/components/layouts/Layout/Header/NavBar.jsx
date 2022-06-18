import Link from 'next/link'
import { useLocale } from '@/lib/locale'
import CONFIG from '@/blog.config'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.ABOUT, to: '/about' },
    // feed는 하단에 배치할 예정
    // { id: 1, name: locale.NAV.RSS, to: '/feed', show: true },
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block ml-4 text-black dark:text-gray-50 nav"
          >
            <Link href={link.to}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar

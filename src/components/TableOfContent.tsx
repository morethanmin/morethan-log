import { FC, useState, useEffect } from "react"
import cs from "classnames"
import { throttle } from "lodash"
import type { TableOfContentsEntry } from "notion-utils"
import { RiListCheck } from "react-icons/ri"

const throttleMs = 100

const TableOfContent: FC<{
  tableOfContent: Array<TableOfContentsEntry>
  className?: string
  mobile?: boolean
}> = ({ className, tableOfContent }) => {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const actionSectionScrollSpy = throttle(() => {
      const sections = document.getElementsByClassName("notion-h")

      let prevBBox: DOMRect | null = null
      let currentSectionId = activeSection

      for (let i = 0; i < sections.length; ++i) {
        const section = sections[i]
        if (!section || !(section instanceof Element)) continue

        if (!currentSectionId) {
          currentSectionId = section.getAttribute("data-id") as any
        }

        const bbox = section.getBoundingClientRect()
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0
        const offset = Math.max(150, prevHeight / 4)

        // GetBoundingClientRect returns values relative to the viewport
        if (bbox.top - offset < 0) {
          currentSectionId = section.getAttribute("data-id") as any

          prevBBox = bbox
          continue
        }

        break
      }

      setActiveSection(currentSectionId)
    }, throttleMs)
    window.addEventListener("scroll", actionSectionScrollSpy)

    actionSectionScrollSpy()

    return () => {
      window.removeEventListener("scroll", actionSectionScrollSpy)
    }
  }, [activeSection])

  return (
    <div
      className={cs(
        "fixed hidden lg:block lg:sticky z-20 flex-0 flex flex-col-reverse self-start gap-4",
        "right-10 bottom-24 lg:bottom-0 lg:top-5 lg:right-0",
        className
      )}
    >
      <div
        className={cs(
          "text-gray-900 dark:text-gray-100 space-y-2",
          "right-10",
          "overflow-hidden",
          "acrylic"
        )}
        style={{
          maxWidth: "calc(100vw - 4rem)",
        }}
        id="tableOfContent"
      >
        <h3 className="uppercase text-black dark:text-white text-lg whitespace-nowrap my-1 font-light flex items-center gap-1">
          <RiListCheck />
          Table of Content
        </h3>
        <nav className="max-h-[500px] overflow-y-auto scrollbar-thin">
          {tableOfContent.map(({ id, indentLevel, text }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cs(
                "notion-table-of-contents-item",
                `notion-table-of-contents-item-indent-level-${indentLevel}`,
                activeSection === id && "notion-table-of-contents-active-item",
                "dark:text-gray-100"
              )}
            >
              <span
                className="notion-table-of-contents-item-body"
                style={{
                  display: "inline-block",
                  marginLeft: indentLevel * 16,
                }}
              >
                {text}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default TableOfContent

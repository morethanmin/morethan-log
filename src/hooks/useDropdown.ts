import React, { useRef } from "react"
import useBooleanState from "./useBooleanState"

type useDropdownType = () => [
  React.RefObject<HTMLDivElement>,
  boolean,
  () => void
]

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`)
  }
}

const useDropdown: useDropdownType = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  const {
    value: isDropdownOpened,
    setTrue: openDropdown,
    setFalse: closeDropdown,
  } = useBooleanState()

  const handleClick: (this: Window, e: MouseEvent) => void = (e) => {
    if (!menuRef.current) return
    assertIsNode(e.target)
    if (menuRef.current.contains(e.target) === false) {
      openDropdown()
    }
  }

  const onOpenBtn = () => {
    closeDropdown()
    window.addEventListener("click", handleClick)
  }

  return [menuRef, isDropdownOpened, onOpenBtn]
}

export default useDropdown

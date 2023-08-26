import { useCallback, useState } from "react"

const useBooleanState = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue)

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue((prev) => !prev), [])

  return { value, setTrue, setFalse, toggle }
}

export default useBooleanState

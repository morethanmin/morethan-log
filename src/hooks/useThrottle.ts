import { useRef } from "react"

function useThrottle<T extends any[]>(
  callback: (...params: T) => void,
  time: number
) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (...params: T) => {
    if (!timer.current) {
      callback(...params)
      timer.current = setTimeout(() => {
        timer.current = null
      }, time)
    }
  }
}

export default useThrottle 
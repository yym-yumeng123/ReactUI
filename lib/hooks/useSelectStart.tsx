import { RefObject, useEffect } from "react"

// 防止选中
const useSelectStart = (ref: RefObject<HTMLElement> | null) => {
  const onSelectStart = (e: Event) => e.preventDefault()
  useEffect(() => {
    ref?.current!.addEventListener("selectstart", onSelectStart)
    return () => {
      if (ref?.current === null) return
      ref?.current!.removeEventListener("selectstart", onSelectStart)
    }
  }, [ref])
}


export default useSelectStart

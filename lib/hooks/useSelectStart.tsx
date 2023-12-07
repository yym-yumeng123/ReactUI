import { RefObject, useEffect } from "react"

// 防止选中
const useSelectStart = (ref: RefObject<HTMLElement>) => {
  const onSelectStart = (e: Event) => e.preventDefault()
  useEffect(() => {
    ref.current!.addEventListener("selectstart", onSelectStart)
    return () => {
      ref.current!.removeEventListener("selectstart", onSelectStart)
    }
  }, [ref])
}


export default useSelectStart

import { useEffect } from "react"

export const Error = () => {
  useEffect(()=>{
    console.error()
  },[])
  return (
    <div>Error</div>
  )
}

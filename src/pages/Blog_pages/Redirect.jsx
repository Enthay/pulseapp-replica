import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const Redirect = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location.pathname === '/blog/page/1'){
            navigate('/blog/')
        }
    }, [])
  return (
    <div>
        <h1>redirecting...</h1>
    </div>
  )
}

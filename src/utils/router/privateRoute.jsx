import { Navigate, Outlet } from 'react-router-dom'

export default function privateRoute() {
    const auth = true
    return (
      auth ? <Outlet /> : <Navigate to="login" />
    )
}

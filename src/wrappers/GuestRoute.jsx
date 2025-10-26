import { Navigate, Outlet } from "react-router-dom"

const GuestRoute = () => {
    const isAuth = !!localStorage.getItem('auth_token')
    return !isAuth ? <Outlet /> : <Navigate to='/'/>
};

export default GuestRoute
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    const logout = () => {
        const token = localStorage.getItem('auth_token')
        axios.post(import.meta.env.VITE_BASE_API_URL+'/logout',{},{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
        .then(res => {
            let data = res.data
            if(data.status != 200)return console.error('Logout failed')

            localStorage.removeItem('auth_token')
            navigate('/login')
        })
    }

    return (
        <div className="bg-zinc-100 shadow p-3 flex justify-end">
            <button onClick={logout} className="tracking-wide text-zinc-500 cursor-pointer">LOGOUT</button>
        </div>
    )
};
export default Header
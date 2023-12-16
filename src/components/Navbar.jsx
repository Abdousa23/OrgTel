import {Link} from 'react-router-dom'
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
    const auth = useAuth();
    const user = auth?.user;
    return (
        <div className="container m-auto">
            <nav className="flex justify-around items-center py-4">
                <div>
                    <img src="" alt="" />
                    
                    <Link to="/" className=" font-extrabold text-gray-800 text-2xl">Logo</Link>
                </div>
                <div className="flex relative max-sm:hidden">
                    <Link to="/" className="px-2 text-lg text-gray-800 hover:text-primary"><p className="mx-2 hover:border-b-2 border-primary">Home</p></Link>
                    <Link to="/reservations" className="px-2 text-lg text-gray-800 hover:text-primary"><p className="mx-2 hover:border-b-2 border-primary">Room</p></Link>
                    <Link to="/" className="px-2 text-lg text-gray-800 hover:text-primary"><p className="mx-2 hover:border-b-2 border-primary">Pricing</p></Link>
                </div>
                <div>
                {user ? <>
                    <div className="image w-20 h-20 mr-10 rounded-full overflow-hidden">
                {user.img ? <img src={user.img} className="w-full" alt="" />: <img src="https://res.cloudinary.com/dekmr7qlp/image/upload/v1701910051/default-pfp_uc7yn8.jpg" className="w-full" alt="" />}
                </div>
                </> :<Link to="/auth/signup" className="px-12 py-2 rounded bg-primary text-white">Register</Link>}
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    // const {userId}=useParams()
    const {auth} = useAuth()
    const user = auth?.user
    const [error,setError]=useState({})
    useEffect(()=>{
        console.log(user)
    },[user])
    return (
        <div className="profile container m-auto">
            {error && <div>{error.message}</div>}
            <div className=" ">
                <div className="w-[83%] mx-auto flex mb-20 ">
                <div className="image w-20 h-20 mr-10 rounded-full overflow-hidden">
                {user?.img ? <img src={user.img} className="w-full" alt="" />: <img src="https://res.cloudinary.com/dekmr7qlp/image/upload/v1701910051/default-pfp_uc7yn8.jpg" className="w-full" alt="" />}
                </div>
                <div className="name">
                    {user?.firstname ? <h1>{user?.firstname}/</h1> : <h1>abdou</h1>}
                    {(user?.firstname && user?.lastname) ? <p>Mr.{`${user?.firstname} ${user?.lastname}`}</p>: <p>Mr. abdou</p>}
                </div>
                </div>
                <div className="details mb-20 w-[83%] mx-auto">
                    <h1 className="ml-2">personal information</h1>
                    <div className="personal flex flex-wrap " >
                        <input type="text" className=" className=' m-2  px-3 py-2 w-[330px] placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" value={user?.firstname} placeholder="firstname" />
                        <input type="text" className=" className=' m-2  px-3 py-2 w-[330px] placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" value={user?.lastname} placeholder="lastname" />
                        <input type="text" className=" className=' m-2  px-3 py-2 w-[330px] placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" value={user?.username} placeholder="username" />
                        <input type="text" className=" className=' m-2  px-3 py-2 w-[330px] placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" value={user?.email} placeholder="Email" />
                        <input type="text" className=" className=' m-2  px-3 py-2 w-[330px] placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" value={user?.phonenumber} placeholder="phonenumber" />
                    </div>
                    <div className="password">
                        {/* <h1 className="ml-2"> password </h1> */}
                    {/* <input type="text" className=" className=' m-2  px-3 py-2 w-fit placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" value={user?.password} placeholder="password" /> */}
                    </div>
                </div>
                <div className="history mb-20 w-[83%] mx-auto">
                    <h1>History</h1>
                    <div className="w-full h-40 bg-slate-200"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile

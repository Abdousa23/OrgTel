import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Profile = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const {userId}=useParams()
    const [user,setUser]=useState({})
    const [error,setError]=useState({})
    useEffect(()=>{
        const getUser = async () => {
            try {
            const res = await fetch(`${apiUrl}/users/${userId}`);
            const data = await res.json();
            setUser(data);
            } catch (err) {
            setError(err.message);
            }
        };
        getUser();
        }, [userId, apiUrl]);

    return (
        <div className="profile">
            {error && <div>{error.message}</div>}
            <div className="container m-auto">
                <div className="overview flex justify-start ml-20 mb-20">
                <div className="image w-20 h-20 mr-10 rounded-full overflow-hidden">
                {user.img ? <img src={user.img} className="w-full" alt="" />: <img src="https://res.cloudinary.com/dekmr7qlp/image/upload/v1701910051/default-pfp_uc7yn8.jpg" className="w-full" alt="" />}
                </div>
                <div className="name">
                    {user.firstname ? <h1>{user.firstname}/</h1> : <h1>abdou</h1>}
                    {(user.firstname && user.lastname) ? <p>Mr.{`${user.firstname} ${user.lastname}`}</p>: <p>Mr. abdou</p>}
                </div>
                </div>
                <div className="details mb-20 ">
                    <h1 className="ml-2">personal information</h1>
                    <div className="personal flex flex-wrap" >
                        <input type="text" className=" className=' m-2  px-3 py-2 w-fit placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" placeholder="firstname" />
                        <input type="text" className=" className=' m-2  px-3 py-2 w-fit placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" placeholder="lastname" />
                        <input type="text" className=" className=' m-2  px-3 py-2 w-fit placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" placeholder="username" />
                        <input type="text" className=" className=' m-2  px-3 py-2 w-fit placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" placeholder="Email" />
                        <input type="text" className=" className=' m-2  px-3 py-2 w-fit placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" placeholder="phonenumber" />
                    </div>
                    <div className="password">
                        <h1 className="ml-2"> password </h1>
                    <input type="text" className=" className=' m-2  px-3 py-2 w-fit placeholder:text-black bg-slate-200 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'" placeholder="phonenumber" />
                    </div>
                </div>
                <div className="history mb-20">
                    <h1>History</h1>
                    <div className="w-full h-40 bg-slate-200"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile

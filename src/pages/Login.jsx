import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ErrorMsg from '../components/ErrorMsg';
import { useAuth } from '../context/AuthContext';
const Login= () => {
    const Navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]=useState({message:null})
    const {setAuth} = useAuth()
    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        });
        const data = await response.json();
        if (response.ok) {
        localStorage.setItem("accessToken", data.accessToken);
        setAuth(data.user);
        <Navigate to='' />;
        console.log("ok");
        }
    } catch (error) {
        console.error("Error:", error);
        setError({message:error.message});
    }
};
return (<>
<div className="container mx-auto min-h-[51.5vh]">
<img src="/src/assets/Group.png" className='absolute top-0 w-1/2 left-1/4 -translate-x-1/2 translate-y-1/2 rotate-180 overflow-hidden ' alt="" />
<div className='text-center relative flex justify-center items-center md:my-36'>
        <div className="flex flex-col max-md:w-full w-1/2 justify-center p-4 z-10 ">
          
        {error.message&& <ErrorMsg errMessage={error} />}
    <h1 className="text-2xl text-primary font-medium text-center">LOG IN</h1>
    <form onSubmit={handleSubmit}>
        <input
        type="email"
        id="email"
        className='my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'
        value={email}
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* {error && <div>{error}</div>} */}
      <input
        type="password"
        value={password}
        placeholder='password'
        className='my-2 mx-auto px-3 py-2 w-1/2 placeholder:text-black bg-slate-200 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* {error.password && <div>{error}</div>} */}
      <button type="submit" className='my-4 py-2 px-4 mx-auto rounded bg-primary text-white  w-fit'>Login</button>
    </form>
    <p>if you haven&apos;t an account , <Link to="/auth/signup" className='hover:text-primary hover:border-b-2 border-primary'>Register</Link></p>    
    </div>
  </div>
 <img src="/src/assets/Group.png" className='absolute w-1/2 right-[-270px] top-0 -translate-x-1/2 rotate-180 translate-y-1/2 overflow-hidden' alt="" />
</div>
</>
  
  );
};

export default Login;

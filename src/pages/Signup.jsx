import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import SuccessMsg from "../components/SuccessMsg";
import ErrorMsg from "../components/ErrorMsg";
const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  const [step,setStep]=useState(1)
  const [successMsg, setSuccessMsg] = useState(false); // [1
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const userRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)$/;
  const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.*[a-zA-Z]).{8,}$/; 
  const phoneRegex =/^(?:\+213|00213|0)([567])\d{8}$/
  const emailRegex=/[^\s]*@[a-z0-9.-]*/i
  const apiUrl = import.meta.env.VITE_API_URL;
  const validate = () => {
    if (formData.first_name.length < 3 || formData.first_name.length > 20 ||!formData.first_name.match(userRegex)) {
      setError(true);
      return false;
    }
    if (
      formData.last_name.length < 3 ||
      formData.last_name.length > 20 ||
      !formData.last_name.match(userRegex)
    ) {
      setError(true);
      return false;
    }
    if (
      formData.username.length < 3 ||
      formData.username.length > 20 ||
      !formData.username.match(userRegex)
    ) {
      setError(true);
      return false;
    }
    if (
      formData.email.length < 3 ||
      formData.email.length > 20 ||
      !formData.email.match(emailRegex)
    ) {
      setError(true);
      return false;
    }
    if (
      formData.phonenumber.length < 3 ||
      formData.phonenumber.length > 20 ||
      !formData.phonenumber.match(phoneRegex)
    ) {
      setError(true);
      return false;
    }
    if (
      formData.password.length < 3 ||
      formData.password.length > 20 ||
      !formData.password.match(passwordRegex)||
      formData.password !== formData.confirmPassword
      ) {
      setError(true);
      return false;
    }
    return true;
  }
  const handleSignUp = async () => {
    if (validate()) {
      try {
        const id = uuidv4(); // Generate a random id using uuid
        const response = await fetch(`${apiUrl}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            id: id, // Include the generated id in the request body
          }),
        });
  
        const data = await response.json();
  
        if (response.status === 201) {
          navigate("/auth/login", { replace: true });
          setSuccessMsg(true); // [2]
        } else {
          console.log(data.error);
          setError(true);
        }
      } catch (error) {
        console.error("Error during sign up:", error);
      }
    };
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  return (
    <>
    {error && <ErrorMsg />}
    {successMsg && <SuccessMsg />}
    <img src="/src/assets/Group.png" className='absolute top-0 w-fit left-1/4 -translate-x-1/2 translate-y-1/2 rotate-180 overflow-hidden ' alt="" />
    <div className="text-center relative flex justify-center items-center md:my-3">
<div className="flex flex-col max-md:w-full w-1/2 justify-center p-4 z-10 my-24 ">
      <h2 className=" text-2xl text-primary font-medium text-center">Register</h2>
      <div className="flex justify-center">
        <div className={`text-white flex justify-center items-center m-2 w-8 h-8 rounded-full ${step >= 1 ? "bg-primary" : "bg-gray-200"}`}>1</div>
        <div className={`text-white flex justify-center items-center  m-2 w-8 h-8 rounded-full ${step >= 2 ? "bg-primary" : "bg-gray-200"}`}>2</div>
        <div className={`text-white flex justify-center items-center m-2 w-8 h-8 rounded-full ${step >= 3 ? "bg-primary" : "bg-gray-200"}`}>3</div>
      </div>
      <form onSubmit={handleSubmit}>
        {
          step == 1 && 
          <>
          <input
          className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="enter your firstname"
          type="text"
          required
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value })
          }
        />
        <input
          className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="enter your lastname"
          type="text"
          required
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value })
          }
        />
          </>
          
          
        }
        {step==2 && <>
        <input
          className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="enter your username"
          type="text"
          required
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <input
          className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="enter your email"
          type="email"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        </>}
        {step==3 && <>
        <input
          className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="enter your password "
          type="password"
          required
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <input
          className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="confirm your password"
          required
          type="password"
        />
        <input
          className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="enter your phone number"
          type="phonenumber"
          onChange={(e) =>
            setFormData({ ...formData, phonenumber: e.target.value })
          }
        />
        </>}
        
        {step !== 3 &&<>
          <button onClick={()=>setStep(prevStep=>prevStep+1)}
              className="my-4 mx-2 py-2 px-4  rounded bg-primary text-white  w-fit">Next</button>
        </>}
          {step == 3 &&<>
            <button type="submit"   className="my-4 mx-2 py-2 px-4  rounded bg-primary text-white  w-fit">Submit</button>
          </>}
        <button  onClick={()=>setStep(prevStep => prevStep > 1 ? prevStep - 1 : 1)} className="my-4 py-2 px-4 mx-2 rounded bg-white text-primary border-2 border-primary  w-fit">cancel</button>
      </form>
    </div>

    </div>
    
    <img src="/src/assets/Group.png" className='absolute w-1/2 right-[-270px] top-0 -translate-x-1/2 rotate-180 translate-y-1/2 overflow-hidden' alt="" />
    </>
    
  );
};

export default Signup;

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library
import SuccessMsg from "../components/SuccessMsg";
import ErrorMsg from "../components/ErrorMsg";
import Step1 from "../components/Register/Step1";
import Step2 from "../components/Register/Step2";
import Step3 from "../components/Register/Step3";
import FormContext from "../context/FormContext";
const Signup = () => {

  const {step,setStep,formData} =useContext(FormContext)
  const [successMsg, setSuccessMsg] = useState(false); // [1
  const [error, setError] = useState({message:null});
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;
  const validate = () => {
    const userRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const phoneRegex = /^(?:\+213|00213|0)([567])\d{8}$/
    const emailRegex = /[^\s]*@[a-z0-9.-]*/i
    if (formData.first_name.length < 3 || formData.first_name.length > 20 || !formData.first_name.match(userRegex)) {
      setError({message:"first name must be between 3 and 20 characters and contain only letters and numbers"});
      return false;
    }
    if (
      formData.last_name.length < 3 ||
      formData.last_name.length > 20 ||
      !formData.last_name.match(userRegex)
    ) {
      setError({message:"last name must be between 3 and 20 characters and contain only letters and numbers"});
      return false;
    }
    if (
      formData.username.length < 3 ||
      formData.username.length > 20 ||
      !formData.username.match(userRegex)
    ) {
      setError({message:"username must be between 3 and 20 characters and contain only letters and numbers"});
      return false;
    }
    if (
      formData.email.length < 3 ||
      formData.email.length > 20 ||
      !formData.email.match(emailRegex)
    ) {
      setError({message:"email must be between 3 and 20 characters and contain only letters and numbers"});
      return false;
    }
    if (
      formData.phonenumber>0 &&(
      formData.phonenumber.length == 10 ||
      !formData.phonenumber.match(phoneRegex))
    ) {
      setError({message:"phone number must 10 characters and contain only numbers"});
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError({message:"Passwords doesn't match"})
      return false
    }
    if (!formData.password.match(passwordRegex)) {
      console.log(formData.password)
      setError({message:'password must contain letters,numbers, and have at least 6 characters'})
      return false
    }
    setError({message:null})
    return true;
  }
  const handleSignUp = async () => {
    if (validate()) {
      // try {
        const id = uuidv4(); // Generate a random id using uuid
        console.log(id)
      //   const response = await fetch(`${apiUrl}/users`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       ...formData,
      //       id: id, // Include the generated id in the request body
      //     }),
      //   });

      //   const data = await response.json();

      //   if (response.status === 201) {
           setSuccessMsg(true); // [2]
           setTimeout(() => {
            navigate("/auth/login", { replace: true }); 
           }, 2000);
           
      //   } else {
      //     console.log(data.error);
      //     setError({message:data.error});
      //   }
      // } catch (error) {
      //   setError({message:error.message});
      // }
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  useEffect(() => {
    console.log(step)
  }, [step]);
  return (
    <div className="min-h-[67.5vh]">
      {error.message && <ErrorMsg errMessage={error} />}
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
            {step == 1 && <Step1 />}
            {step == 2 && <Step2 />}
            {step == 3 && <Step3 />}
          </form>
        </div>

      </div>

      <img src="/src/assets/Group.png" className='absolute w-1/2 right-[-270px] top-0 -translate-x-1/2 rotate-180 translate-y-1/2 overflow-hidden' alt="" />
    </div>

  );
};

export default Signup;

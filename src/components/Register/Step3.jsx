import React from 'react'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'
export default function Step3() {
    const {step,setStep,formData,setFormData}=useContext(FormContext)
    
    
  return (
    <div>
    <div>
       <input
          className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="enter your password "
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <input
          className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="confirm your password"
          value={formData.confirmPassword}
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <input
          className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
          placeholder="enter your phone number"
          type="phonenumber"
          value={formData.phonenumber}
          onChange={(e) =>
            setFormData({ ...formData, phonenumber: e.target.value })
          }
        />
       
    </div>
    <button type="submit"   className="my-4 mx-2 py-2 px-4  rounded bg-primary text-white  w-fit">Submit</button>
    <button  onClick={()=>setStep(prevStep => prevStep > 1 ? prevStep - 1 : 1)} className="my-4 py-2 px-4 mx-2 rounded bg-white text-primary border-2 border-primary  w-fit">cancel</button>
    </div>
  )
}

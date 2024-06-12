import React from 'react'
import { useContext } from 'react'
import  FormContext  from '../../context/FormContext'
export default function Step2() {
    const {step,setStep,formData,setFormData}=useContext(FormContext)
    return (
        <div>
            <div>
                <input
                    className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                    placeholder="enter your username"
                    type="text"
                    value={formData.username}
                    onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                    }
                />
                <input
                    className="my-2 mx-auto w-1/2 placeholder:text-black bg-slate-200 px-3 py-2  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                    placeholder="enter your email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

            </div>
            <button onClick={() => setStep(prevStep => prevStep + 1)}
                className="my-4 mx-2 py-2 px-4  rounded bg-primary text-white  w-fit">Next</button>
                <button  onClick={()=>setStep(prevStep => prevStep > 1 ? prevStep - 1 : 1)} className="my-4 py-2 px-4 mx-2 rounded bg-white text-primary border-2 border-primary  w-fit">cancel</button>
        </div>
    )
}

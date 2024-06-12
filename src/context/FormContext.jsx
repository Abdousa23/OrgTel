import { useState, createContext } from "react";

const FormContext = createContext(null);

export const FormContextProvider = ({ children }) => {
    const initialState = {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmPassword: "",
    }
    const [formData, setFormData] = useState(initialState);
    const [step, setStep] = useState(1)
    return (
        <FormContext.Provider value={{ formData, setFormData, step,setStep }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
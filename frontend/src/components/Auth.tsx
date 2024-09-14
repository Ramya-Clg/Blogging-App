import { SignupInput } from "@imramya/blogging-app-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import {BACKEND_URL} from "../config"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostinputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ?"signup" : "signin" }`,postInputs);
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        }catch(e){
            alert("error while signup/signin")
            console.error(e)
        }        

    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className=" px-10 pb-4">
                    <div className="text-3xl font-extrabold">
                    {type === "signup" ? "Create a new account" : "Login to your account"}
                    </div>
                    <div className="text-slate-600">
                        {type === "signup" ? "Already have an account?" : "Create a new account"}
                        <Link to={type === "signup" ? "/signin" : "/signup"} className="pl-2 underline">{type === "signup"? "Signin" : "Signup"}</Link>
                    </div>
                </div>
                {type === 'signup' ? <InputBox label="Name" placeholder="Your name" type="text" onChange={(e) => {
                    setPostinputs(c => ({
                        ...c,
                        name: e.target.value
                    }))
                }} />:null}
                <InputBox label="Email" placeholder="Your Email" type="email" onChange={(e) => {
                    setPostinputs(c => ({
                        ...c,
                        email: e.target.value
                    }))
                }} />
                <InputBox label="Password" placeholder="Your Password" type="password" onChange={(e) => {
                    setPostinputs(c => ({
                        ...c,
                        password: e.target.value
                    }))
                }} />
                <button onClick={sendRequest} type="button" className="mt-12 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> {type === "signup" ? "SignUp" : "SignIn"} </button>
            </div>
        </div>
    </div>
}

interface InputBoxType {
    label: string;
    placeholder: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputBox({ label, placeholder, type, onChange }: InputBoxType) {
    return <div>
        <label className="block my-4 text-sm font-bold text-gray-900">{label}</label>
        <input type={type} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-1" placeholder={placeholder} required />
    </div>
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSetToken } from '../hooks/useSetToken'
const BASE_URL_SERVER = "http://localhost:3000"
const Signup = () => {
    const [email, setEmail] = useState('')
    const [name, setname] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState<"password"| "text">('password')
    const hanldeLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const data = {name, email, password}
        const response = await fetch(`${BASE_URL_SERVER}/auth/signup`, {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        let resdata= await response.json()
        if(resdata.message){
            alert(resdata.message)
        }
        if(resdata.token){
            
            useSetToken(resdata.token)
            window.location.href = "/"
        }
    }
    

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.id=="email")
            {
                setEmail(value=>e.target.value)
            }
            else if(e.target.id=="password"){
                setPassword(value=>e.target.value)
            }
            else{
                setname(value=>e.target.value)
            }

    }
    const togglePasswordType = ()=>{
        if(passwordType=="password"){
            setPasswordType("text")
        }
        else{
            setPasswordType("password")
        }
    }
    return (
        <div className="bg-white dark:bg-gray-900 text-zinc-900 dark:text-white overflow-hidden relative max-w-[90vw] sm:max-w-[80vw] lg:max-w-[45vw] xl:max-w-[30vw] rounded mx-auto my-14 p-10">
    
            <div className="p-0 relative">
                <div className="grid grid-cols-12 py-4 justify-center">
                    <div className="col-span-12">
                        <div className="md:p-5">
                            <div className="flex justify-center items-center pb-3">
                                <img
                                    src="https://evrebate.oregon.gov/sites/default/files/images/icon-standard-individual.png"
                                    alt=""
                                    className="rounded-full border-0"
                                    width="100"
                                    height="100"
                                />
                            </div>
                            <h2 className="font-bold text-3xl leading-6 text-center p-2 mt-4 mb-2">
                                Signup
                            </h2>

                            <form className="mt-4">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={handleOnchange}
                                        className="w-full bg-transparent min-h-[48px] leading-10 px-4 p-2 rounded-md outline-none border border-gray-400 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-700"
                                        id="name"
                                        placeholder="Enter your Name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={handleOnchange}
                                        className="w-full bg-transparent min-h-[48px] leading-10 px-4 p-2 rounded-md outline-none border border-gray-400 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-700"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <input
                                        type={passwordType}
                                        value={password}
                                        onChange={handleOnchange}
                                        className="w-full bg-transparent min-h-[48px] leading-10 px-4 p-2 rounded-md outline-none border border-gray-400 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-700"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                    <span className='absolute right-2 top-5 cursor-pointer' onClick={togglePasswordType}>{passwordType=="password" ? <FaEye/>: <FaEyeSlash/>}</span>
                                </div>
                     
                                <button
                                    onClick={hanldeLogin}
                                    className="font-semibold bg-blue-500 text-white py-3 px-8 rounded w-full mt-6"
                                >
                                    Signup
                                </button>

                                <div className="text-center mt-5 pt-4">
                                    <p className="mb-0">
                                        Have an account?{" "}
                                        <Link
                                            to="/login"
                                            className="text-blue-600"
                                        >
                                            Sign in 
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetToken } from '../hooks/useGetToken'
import { useGetAuthHeaders } from '../hooks/useGetAuthHeaders'

const BASE_URL_SERVER = "http://localhost:3000"
const PostCreation = () => {
    const [content,setcontent] = useState('')
    const [title, settitle] = useState('')


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const data = {"title":title,"content": content}
        console.log(data)
        const response = await fetch(`${BASE_URL_SERVER}/post/create`, {
            method: "POST",
            headers : useGetAuthHeaders(),
            body: JSON.stringify(data)
        })
        let resdata= await response.json()
        if(resdata.message){
            alert(resdata.message)
        }
        if(resdata.token){
            
            alert("internal server error")
            
        }
    }
    

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.id=="content")
            {
                setcontent(value=>e.target.value)
            }
            else if(e.target.id=="title"){
                settitle(value=>e.target.value)
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
                                Create Post
                            </h2>

                            <form className="mt-4">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={handleOnchange}
                                        className="w-full bg-transparent min-h-[48px] leading-10 px-4 p-2 rounded-md outline-none border border-gray-400 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-700"
                                        id="title"
                                        placeholder="Enter Title"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        value={content}
                                        onChange={handleOnchange}
                                        className="w-full bg-transparent min-h-[48px] leading-10 px-4 p-2 rounded-md outline-none border border-gray-400 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-700"
                                        id="content"
                                        placeholder="Enter Post Content"
                                    />
                                </div>
                              
                                <button
                                    onClick={handleSubmit}
                                    className="font-semibold bg-blue-500 text-white py-3 px-8 rounded w-full mt-6"
                                >
                                    Create Post
                                </button>

                                <div className="text-center mt-5 pt-4">
                                    <p className="mb-0">
                                        Have an account?{" "}
                                        <Link
                                            to="/login"
                                            className="text-blue-600"
                                        >
                                            Create Post 
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

export default PostCreation
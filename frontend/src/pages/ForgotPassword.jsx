import React, {useState} from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const ForgotPassword = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();

        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/forgot-password`, {
            email
        })

        toast.success("If that email exists, we sent a Reset Link.")


    }


  return (
    <div className='max-w-md mx-auto p-6 border rounded-lg'>
        <h2 className='text-xl font-semibold mb-4' >Forgot Password</h2>
        <form action="" onSubmit={handleSubmit} className='space-y-4 flex flex-col justify-center'>
           <input type="email" className='border-1 w-full p-2 rounded' name="" id="" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>

            <button className='bg-black mx-auto text-white px-4 py-2 rounded cursor-pointer'>Send Reset Link</button>
            

            </form>      
    </div>
  )
}

export default ForgotPassword

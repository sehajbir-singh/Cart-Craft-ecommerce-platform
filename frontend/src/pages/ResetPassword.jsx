import { useState } from "react";
import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import axios from 'axios';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords don't match.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/reset-password`, {
        email, token, newPassword
      })

      if(res.data.success){
        toast.success(res.data.message)
        navigate('/login')
      }else{
        toast.error(res.data.message)
      }




    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong")
      
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md border rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Change Your Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter a new password for {email}
        </p>

        <form
          action=""
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col justify-center"
        >
          <div className="my-4">
            <p className="text-sm text-gray-500">New Password*</p>
            <input
              type="password"
              value={newPassword}
              onChange={(e)=>{
                 setNewPassword(e.target.value)
              }}
              placeholder="New Password"
              className="border rounded-lg w-full p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500">Confirm New Password*</p>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm New Password"
              onChange={(e)=>{setConfirmPassword(e.target.value)}}
              className="border rounded-lg w-full p-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white mx-auto px-4 py-2 rounded cursor-pointer"
          >
            {loading? "Resetting....":"Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

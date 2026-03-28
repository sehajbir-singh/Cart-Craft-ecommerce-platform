import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo6} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            “Thank you for choosing our store as your trusted shopping
            destination. We are committed to delivering premium quality
            products, secure payments, fast shipping, and exceptional customer
            support to ensure a seamless, satisfying, and memorable shopping
            experience every time you visit.”
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About us</li>
            <li className='cursor-pointer'>Delivery</li>
            <li className='cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-987456667</li>
            <li>contact@cartcraft.com</li>
          </ul>
        </div>
      </div>

    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026@ cartcraft.com - All Right Reserved.</p>
    </div>

    </div>
  );
}

export default Footer

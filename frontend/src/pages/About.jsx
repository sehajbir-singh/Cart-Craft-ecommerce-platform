import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets.js'
import NewsLetterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>


        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>We are a modern e-commerce platform dedicated to providing high-quality products with a seamless and secure online shopping experience. Our website is designed to make browsing, selecting, and purchasing products simple, fast, and reliable.</p>
            <p>We focus on customer satisfaction by offering trusted products, transparent pricing, secure payment options, and timely delivery. Our goal is to combine technology and convenience to create a smooth digital shopping journey for every customer.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to make online shopping simple, secure, and accessible for everyone. We aim to provide high-quality products at fair prices while ensuring a smooth and trustworthy shopping experience.We are committed to using modern technology to improve convenience, maintain transparency, and build long-term relationships with our customers.</p>
            </div>
        </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We are committed to delivering products that meet the highest standards of quality and reliability. Every product listed on our platform is carefully selected and reviewed to ensure durability, authenticity, and customer satisfaction.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We believe shopping should be simple, fast, and stress-free. Our platform is designed with a user-friendly interface that makes browsing, selecting, and purchasing products easy for everyone.</p>
        </div>
        
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We believe that every customer deserves respect, attention, and prompt support. Our team is dedicated to providing friendly, responsive, and solution-oriented assistance at every stage of your shopping journey.</p>
        </div>
      </div>

    <NewsLetterBox/>


    </div>
  )
}

export default About

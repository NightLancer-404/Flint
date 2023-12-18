import Home from '@/components/Home'
import React from 'react'

const page = () => {
  return (
    <>
      <Home />

      <div className='h-[100vh] bg-white'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239487.165730431!2d85.65529266210943!3d20.30080669034058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1702847185091!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-96 mt-36'></iframe>
      </div>
    </>
  )
}

export default page
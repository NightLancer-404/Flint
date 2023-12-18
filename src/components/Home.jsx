import React from 'react'
import Link from 'next/link'

const Home = () => {
    return (
        <div className='home h-[160vh] relative'>
            <div className='w-[90vw] h-24 rounded-2xl fixed top-5 left-[4.5vw] z-10 bg-[#1E1E1E]/[.65] flex items-center justify-between px-4'>
                <Link href={'/'}>
                    <img src='images/logo.png' alt='Flint Logo' className='h-20 w-20' />
                </Link>

                <div className='mx-5 flex items-end gap-0 justify-around text-base font-normal font-sans text-white'>
                    <Link href={'/'} className='hover:bg-[#DE2C62] rounded-md px-8 py-3 transition-all ease-in hover:-translate-y-0.5'>
                        <span>Home</span>
                    </Link>
                    <Link href={'/about'} className='hover:bg-[#DE2C62] rounded-md px-8 py-3 transition-all ease-in hover:-translate-y-0.5'>
                        <span>About</span>
                    </Link>
                    <Link href={'/service'} className='hover:bg-[#DE2C62] rounded-md px-8 py-3 transition-all ease-in hover:-translate-y-0.5'>
                        <span>Service</span>
                    </Link>
                    <Link href={'/contact'} className='hover:bg-[#DE2C62] rounded-md px-8 py-3 transition-all ease-in hover:-translate-y-0.5'>
                        <span>Contact</span>
                    </Link>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col h-[120vh] gap-y-10'>
                <h1 className='text-white text-[60px] font-bold text-center'>We Provide the Solutions <br />for Your <span className='text-[#DE2C62]'>Business</span></h1>
                <p className='text-white text-center text-[24px] font-serif'><span className='text-[#DE2C62]'>This</span> should be used to tell a story and let your users know a little more about <br />your product or service.<span className='text-[#DE2C62]'> How can you benefit them</span>?</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0 z-0'>
                <path fill="#fff" fill-opacity="1" d="M0,32L120,74.7C240,117,480,203,720,224C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>

            {/* temp */}
            <div className='w-full flex justify-center absolute -bottom-[6.5rem]'>
                <img src='/images/video-preview-bg.jpg' alt='Loading ...' className='rounded-2xl w-[45rem] h-[30rem] shadow-2xl' />
                <div className='rounded-full bg-white h-20 w-20 flex items-center justify-center absolute left-[47vw] top-44 shadow-2xl'>
                    <img src='/images/play-button.png' className='h-12 w-12 p-2' />
                </div>
            </div>
        </div>
    )
}

export default Home
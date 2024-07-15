import React from 'react'
import hehe from '../assets/hehe.jpg'
const Banner = {
    backgroundImage:`url(${hehe})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:'100%',
    width:'100%',

}
const Subsrickson = () => {
  return (
    <div style={Banner } className='bg-gray-100 dark:bg-gray-800 text-white'>
        <div className=" container py-20 flex items-center justify-center backdrop-blur-sm flex-col   "   data-aos='zoom-in '  >
            <h1 className='text-5xl font-bold sm:text-left sm:text-4xl'>Get Notified About New Products</h1> 
            <input data-aos='fade-up' type="email" name="" id="" className='mt-5 w-1/2 p-3 overflow-hidden border-none  ' placeholder='Enter Your Email' />
        </div>



    </div>
  )
}

export default Subsrickson
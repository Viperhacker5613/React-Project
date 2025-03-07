import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
      <div>
          <header className='flex justify-between p-10 bg-white'>
                      <h1 className='font-bold text-2xl text-blue-500'>Sonicbeats</h1>
                  <div className="flex items-center gap-50 font-semibold">
                      <Link className='hover:text-blue-500 font-medium' to='/'>Home</Link>
                      <Link className='hover:text-blue-500 font-medium' to='/about'>About</Link>
                      <Link className='hover:text-blue-500 font-medium' to='/testimonal'>Testimonal</Link>      
                      <Link className='hover:text-blue-500 font-medium' to='/contact'>Contact Us</Link>
                  </div>
                  <div class="flex items-center gap-10">
                      <span>Offers</span>
                      <button className='p-3 bg-blue-500 border-1 border-blue-500 font-medium cursor-pointer rounded-xl text-white hover:bg-white hover:text-black'>Shop Now</button>
                  </div>
          </header>
          <h1 className='text-center pt-20 text-5xl font-bold'>Contact Us</h1>
          <div className='pt-20 pb-30 pl-10 pr-40 flex justify-around items-center'>
              <div>
                  <img src="/src/assets/speaker-woofer-removebg-preview.png" alt="" />
              </div>
              <div className='h-120 w-170 bg-white flex flex-col rounded-2xl justify-around p-5'>
                  <div className="w-full flex justify-between items-center">
                      <div className="flex flex-col gap-2">
                          <p>First Name*</p>
                          <input type="text" className='w-70 h-10 pl-5 border-1'/>
                      </div>
                      <div className="flex flex-col gap-2">
                          <p>Last Name*</p>
                          <input type="text" className='border-1 w-80 h-10 pl-5'/>
                      </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                      <p>Email*</p>
                  <input type="email" className='w-full h-15 pl-5 border-1'/>
                  </div>
                  <div className="w-full">
                      <p>Message</p>
                      <textarea className=' border-1 resize-none w-full h-25'/>
                  </div>
                  <button className='w-full h-15 bg-blue-500 rounded-4xl border-1 border-blue-500 text-white text-2xl font-bold cursor-pointer hover:bg-white hover:text-black'>Submit</button>
              </div>
          </div>
    </div>
  )
}

export default Contact

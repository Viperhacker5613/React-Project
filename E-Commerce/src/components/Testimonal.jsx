import React from 'react'
import { Link } from 'react-router-dom'

const Testimonal = () => {
  return (
    <div>
    <header className='flex justify-between p-10 sticky top-0 bg-white'>
                <h1 className='font-bold text-2xl text-blue-500'>Sonicbeats</h1>
            <div className="flex items-center gap-50 font-semiblod">
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
      <div class="h-auto text-center pt-25 pr-15 pl-15 pb-25">
        <div class="pb-25">
            <h1 className='pb-15 text-6xl font-bold'>Testimanials</h1>
            <p className='font-thin'>Welcome to Sonic Beats, where innovation meets audio excellence. At Sonic Beats, we are passionate about redfining the way you <br/> experience sound, and our journey is rooted in a commitment to delivering premum portable speakers that elevate your audio encounters.</p>
        </div>
    </div>
    <div class="flex justify-around gap-10 pr-15 pl-15 pb-40">
        <div class="w-350 pt-15 pb-15 flex flex-col items-center justify-between shadow-md border-0 bg-white rounded-3xl">
            <div class="w-40">
                <img src="/src/assets/profile1.png" className='w-65 rounded-full'/>
            </div>
            <div class="flex flex-col gap-10 text-center">
                <h1 class="text-5xl font-semibold">Rahul Yadav</h1>
                <p className='pl-20 pr-20 font-thin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa molestiae in dignissimos necessitatibus, autem eius fugiat fuga recusandae commodi quas delectus soluta magni sit amet.</p>
            </div>
        </div>
        <div class="w-350 pt-15 pb-15 flex flex-col items-center justify-between bg-blue-500 rounded-3xl">
            <div class="w-40">
                <img src="/src/assets/profile2.png" className='w-65 rounded-full'/>
            </div>
            <div class="flex flex-col gap-10 text-center text-white">
                <h1 class="text-5xl font-semibold">Alisa Kujou</h1>
                <p className='pl-20 pr-20 font-thin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa molestiae in dignissimos necessitatibus, autem eius fugiat fuga recusandae commodi quas delectus soluta magni sit amet.</p>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Testimonal

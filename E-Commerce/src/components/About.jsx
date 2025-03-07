import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
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
      <div class="h-auto text-center">
        <div class="p-30">
            <h1 className='text-7xl font-bold pb-15'>About Sonic Beats</h1>
            <p className='font-thin'>Welcome to Sonic Beats, where innovation meets audio excellence. At Sonic Beats, we are passionate about redefining the way you <br/>experience sound, and our journey is rooted tin a commitment to delivering permium portable speakers that elevate your aduio encounters.
            </p>
        </div>
        <section className='w-full flex justify-between pr-15 pl-15'>
            <div class="w-500 flex flex-col items-center">
                <div class="img1">
                    <img src="/src/assets/speaker4-removebg-preview.png" alt=""/>
                </div>
                <div class="">
                    <h1 className='p-4 text-3xl font-bold'>Our Sonic Vision</h1>
                    <p className='font-thin pr-20 pl-20'>At Sonic beats, we envision a world where music isn't just heard; it's felt. Our vision is to create protable
                        speakers that seamlessly integrate into your lifestyle providing an immersive and hih-fidelity audio
                        experience anytime, anywhere.</p>
                </div>
            </div>
            <div class="w-500">
                <div class="info">
                    <h1 className='p-4 text-3xl font-bold'>Quality Craftsmanship</h1>
                    <p className='font-thin pr-20 pl-20'>Our commitment to quaility craftsmanship is at the heart of what we do. Each Sonic Beats portable speaker is
                        a testament to precision engineering, premium materials, and a meticulous design process. We understand that
                        the best sound experience emerge form a fusion of cutting-edge technology and a deep appreciation for
                        detail.</p>
                </div>
                <div class="relative bottom-30">
                    <img src="/src/assets/images-removebg-preview.png" className='w-200 h-200'/>
                </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default About

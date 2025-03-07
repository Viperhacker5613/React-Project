import React from 'react'
import { Link } from 'react-router-dom'


const Home1 = () => {
  return (
      <div>
        <header className='flex justify-between p-10 bg-white'>
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
          <div class="flex justify-between items-center pl-15 pr-15 pt-40 pb-30">
              <div className="flex flex-col gap-7">
                <h6 className='text-red-500'>EMBARK ON A</h6>
                <p class="text-7xl font-bold">SONIC <br/>JOURNEY</p>
                <p class="font-extralight text-gray-700">At Sonic Beats,we understand the profound impact muisc has on your life. <br/>That's why we've meticulouly crafted a range of protable epeakers, designed <br/>to Elevate your sound experience no matter where life takes you.</p>
                <div class="flex gap-20 pt-5">
                    <Link to="/Explore" className='pt-4 pb-4 pr-10 pl-10 font-bold bg-blue-500 border-1 border-blue-500  rounded-xl text-white hover:bg-white hover:text-blue-500 cursor-pointer'>Explore Product</Link>
                    <Link to='/New-collection' className='pt-4 pb-4 pr-10 pl-10 font-bold border-1 border-blue-500 rounded-xl text-blue-500 bg-white hover:bg-blue-500 hover:text-white cursor-pointer'>New Collection</Link>
                </div>
            </div>
            <div class="bg-none">
                <img src="/src/assets/bluethooth_speaker-removebg-preview.png" alt=""/>
        </div>
          </div>
              <footer>
        <div class="left">
            <h1>Sonicbeats</h1>
            <p>The Contrast between those elements <br/> Creates a highly and modern lock.</p>
        </div>
        <div class="rig">
            <ul>
                <a href="#" id="head">ABOUT</a>
                <li>Partnership</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
            </ul>
            <ul>
                <a href="#" id="head">PRODUCTS</a>
                <li>About</li>
                <li>Features</li>
                <li>Support</li>
            </ul>
            <ul>
                <a href="#" id="head">RESOURCES</a>
                <li>Career</li>
                <li>Blog</li>
                <li>Legal</li>
            </ul>
            <ul>
                <a href="#" id="head">CONTACT</a>
                <li>ar_fashion.com</li>
                <li>+1564-644-5965</li>
                <li>Los Angels, CA</li>
            </ul>
        </div>
    </footer>

    </div>
  )
}

export default Home1

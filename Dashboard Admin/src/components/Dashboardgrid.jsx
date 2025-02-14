import React from 'react'
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from 'react-icons/io5'

function Dashboardgrid() {
  return (
    <div className="flex gap-4 w-full p-4">
      <Boxwrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
          <IoBagHandle className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Sales</span>
          <div className='flex items-cneter'>
            <strong className='text-xl text-gray-300 font-semibold'>$34525.60</strong>
            <span className='text-sm text-green-500 pl-2'>+234</span>
          </div>
        </div>
      </Boxwrapper>
      <Boxwrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
          <IoPieChart className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Expenses</span>
          <div className='flex items-cneter'>
            <strong className='text-xl text-gray-300 font-semibold'>$34525.60</strong>
            <span className='text-sm text-green-500 pl-2'>-234</span>
          </div>
        </div></Boxwrapper>
      <Boxwrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
          <IoPeople className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Customers</span>
          <div className='flex items-cneter'>
            <strong className='text-xl text-gray-300 font-semibold'>12313</strong>
            <span className='text-sm text-green-500 pl-2'>+30</span>
          </div>
        </div></Boxwrapper>
      <Boxwrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
          <IoCart className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Orders</span>
          <div className='flex items-cneter'>
            <strong className='text-xl text-gray-300 font-semibold'>$34525.60</strong>
            <span className='text-sm text-green-500 pl-2'>+-43</span>
          </div>
        </div></Boxwrapper>
    </div>
  )
}
function Boxwrapper({ children }) {
  return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}

export default Dashboardgrid

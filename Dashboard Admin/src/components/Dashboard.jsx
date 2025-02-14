import React from 'react'
import Dashboardgrid from './Dashboardgrid'
import TrasnsactionChart from './TrasnsactionChart'
import Buyerprofilechart from './Buyerprofilechart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'


const Dashboard = () => {
  return (
    <div className="flex flex-col gap=4">
      <Dashboardgrid />
      <div className='flex flex-row gap-4 w-full'>
        <TrasnsactionChart />
        <Buyerprofilechart />
      </div>
      <div className='flex flex-row gap-4 w-full'>
        <RecentOrders />
        <PopularProducts/>
      </div>
    </div>
  )
}

export default Dashboard

import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {

  const options = [
    {
      name: 'Dashboard',
      route: 'dashborad',
    },
    {
      name: 'Products',
      route: '/',
    },
    {
      name: 'Analytics',
      route: 'analytics',
    }
  ]
  return (
    <div className='w-[20vw] max-w-[300px] min-h-[100vh] h-full bg-[var(--secondary-color)] flex flex-col justify-between py-5 px-4 gap-10 items-start sticky top-0'>

      <div className='flex gap-1 items-center justify-center text-3xl font-bold'><i class="fa-solid fa-tag text-[var(--primary-color)]"></i>invenotry</div>
      <div className='flex flex-col justify-start flex-1 w-full'
      >


<p className={`text-md px-4 py-2 flex gap-1 items-center rounded-xl  w-full `}><i class="fa-solid fa-list"></i>Dashboard</p>

        <NavLink to='/' className={({ isActive }) => `text-md px-4 py-4 flex gap-1 items-center rounded-xl  w-full ${(isActive) ? 'bg-[var(--primary-color)] shadow-md' : 'bg-transparent'}`}><i class="fa-solid fa-chart-column"></i>Products</NavLink>
        <p className={`text-md px-4 py-4 flex gap-1 items-center rounded-xl  w-full `}><i class="fa-solid fa-cart-shopping"></i>Orders</p>
        <p className={`text-md px-4 py-4 flex gap-1 items-center rounded-xl  w-full `}><i class="fa-solid fa-chart-simple"></i>Analytics</p>
        <p className={`text-md px-4 py-4 flex gap-1 items-center rounded-xl  w-full `}><i class="fa-regular fa-money-bill-1"></i>Billing</p>
        <p className={`text-md px-4 py-4 flex gap-1 items-center rounded-xl  w-full `}><i class="fa-solid fa-gear"></i>Setting</p>
        <p className={`text-md px-4 py-4 flex gap-1 items-center rounded-xl  w-full `}><i class="fa-solid fa-info"></i>Help</p>



      </div>
      <p className={`text-md px-4 py-4 flex gap-1 items-center rounded-xl  w-full text-red-800  `}><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</p>

    </div>
  )
}

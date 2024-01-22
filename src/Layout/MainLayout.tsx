import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <div className='layout'>
        <div className='layout_sidebar'>
            Sidebar
        </div>
        <div className='layout_main'>
            <div className='layout_main_mavbar'>
                Navbar
            </div>
            <div className='layout_main_contents'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default MainLayout
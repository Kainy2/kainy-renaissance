/** @format */
import React from 'react'
import AllUsers from '../assets/AllUsers.png'
import Dashboard from '../assets/Dashboard.png'
import Admin from '../assets/Admin.png'
import BellWhite from '../assets/BellWhite.png'
import SupportMain from '../assets/SupportMain.png'
import SettingsMain from '../assets/SettingsMain.png'


const Sidebar = () => {
    return (
        <div style={{backgroundColor: '#484BE8'}} className='h-screen py-16 pt-32'>
                        <p className='flex text-white pl-4 m-4 py-3'><img src={Dashboard} alt={`DashBoard`} />
                       <span className='mx-2'> Dashboard </span>
                    </p>
                     <p style={{ backgroundColor:'rgba(255, 255, 255, 0.3)'}} className='text-white flex pl-4 py-3 m-4 rounded-md'>
                <img src={AllUsers} alt={AllUsers} /> <span className='mx-2'> All Users</span>
                    </p>

            <p className='flex text-white pl-4 m-4 py-3 '><img src={Admin} alt={`Admin`} />
                       <span className='mx-2 -mt-1'> Admin </span>
                    </p>
                        <p className='flex text-white pl-4 m-4 py-3'><img src={BellWhite} alt={`Notif`} />
                       <span className='mx-2'> Notification </span>
                    </p>
                        <p className='flex text-white pl-4 m-4 py-3'><img src={SupportMain} alt={`Help`} />
                       <span className='mx-2'> Help And Support </span>
                    </p>
                        <p className='flex text-white pl-4 m-4 py-3'><img src={SettingsMain} alt={`SettingsMain`} />
                       <span className='mx-2'> Settings </span>
                    </p>
        </div>

        
        // <div style={{backgroundColor: '#484BE8'}} className='h-screen py-16 pt-32'>
        //     {navItems.map((item, index) => {
        //         if (item.name !== 'All Users') {
        //             return (
        //                 <p className='flex text-white pl-4 m-4 py-3'><img src={`${item.icon}`} alt={`img-${index}`} />
        //                 {item.name}
        //             </p>
        //             ) } else {
        //             return <p style={{ backgroundColor:'rgba(255, 255, 255, 0.3)'}} className='text-white flex pl-4 py-3 m-4 rounded-md'>
        //                 <img src={`${item.icon}`} alt={`img-${index}`} /> {item.name}
        //             </p>
        //            }
        //     }
        //     )}
        // </div>
    )
}

export default Sidebar


/** @format */
import React from 'react'
import {navItems} from '../utils/data.js'

const Sidebar = () => {
    console.log(navItems);
    return (
        <div style={{backgroundColor: '#484BE8', display:'absolute' ,top:'136px'}} className='h-screen py-16'>
            {navItems.map((item) => {
                if (item.name !== 'All Users') {
                    return (
                        <p className='text-white pl-4 m-4 py-3'>
                        {item.name}
                    </p>
                    ) } else {
                    return <p style={{ backgroundColor:'rgba(255, 255, 255, 0.3)'}} className='text-white pl-4 py-3 m-4 rounded-md'>
                        {item.name}
                    </p>
                   }
                
               
                
            }
            )}
        </div>
    )
}

export default Sidebar


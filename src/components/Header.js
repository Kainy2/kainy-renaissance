/** @format */
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Bell from '../assets/Bell.png'
import Message from '../assets/message.png'

function Header() {
    return (
        <div className='flex p-4 mb-10 shadow justify-between'>
            <div>
                <div className='flex space-x-3 rounded-2xl px-14 py-1 border '>
                    
                    <span ><AiOutlineSearch />  </span> <p>Search For Users</p> </div>

            </div>
            <div className='flex h-6 space-x-4'>
                <img src={Bell}  className='px-4 '/>
                <img src={Message} className='px-4 '/>
               <p> Bolu Odusanya </p>
            </div>
        </div>
    )
}

export default Header

/** @format */
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Bell from '../assets/Bell.png'
import Message from '../assets/message.png'
import bolupic from '../assets/bolupic.png'

function Header() {
    return (
        <div className='flex px-4 py-6 mb-10 shadow justify-between'>
            <div>
                <div className='flex bg-gray-50 text-gray-500 font-semibold space-x-3 rounded-2xl px-14 py-1  '>
                    
                    <span ><AiOutlineSearch />  </span> <p className='-mt-1 mx-1'>Search For Users</p> </div>

            </div>
            <div className='flex h-5 space-x-1'>
                <img src={Bell} alt=' bell'  className='px-4 '/>
                <img src={Message} alt='msg'  className='px-4 '/>
               <p className='flex '> <span className='w-24 text-sm'> Bolu Odusanya </span> <img src={bolupic} alt=' bolu' className='mx-1 w-5 h-5 '/> </p>
            </div>
        </div>
    )
}

export default Header

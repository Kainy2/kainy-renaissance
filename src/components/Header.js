/** @format */
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Bell from '../assets/Bell.png'
import Message from '../assets/message.png'
import bolupic from '../assets/bolupic.png'

function Header() {
    return (
        <div className='flex p-4 mb-10 shadow justify-between'>
            <div>
                <div className='flex space-x-3 rounded-2xl px-14 py-1 border '>
                    
                    <span ><AiOutlineSearch />  </span> <p className='-mt-1 mx-1'>Search For Users</p> </div>

            </div>
            <div className='flex h-5 space-x-3'>
                <img src={Bell} alt=' bell'  className='px-4 '/>
                <img src={Message} alt='msg'  className='px-4 '/>
               <p className='flex '> <span className='-mt-1'> Bolu Odusanya </span> <img src={bolupic} alt=' bolu' className='mx-2 '/> </p>
            </div>
        </div>
    )
}

export default Header

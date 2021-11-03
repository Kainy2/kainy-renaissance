// /** @format */
import React from 'react'
import { UserItems } from '../utils/data'
import {GoVerified} from 'react-icons/go'


function AllUsers() {
    const totalUsers = '300,568'
    return (
        <div>
            <div className='flex space-x-6'>
                <h2 className='py-7 px-20 font-semibold'>Users</h2>
                <p style={{ color: '#21252A', border: '2px #21252A' }} className='py-7 px-20 text-blue-400'>Merchant</p>
            </div>
            <div className = 'shadow p-2'>

                <div className="flex text-semibold space-x-28 p-2">
                    <p className='w-4' ></p>
                    <p className='text-semibold'>Name</p>
                    <p className='text-semibold pl-8 pr-10'>Email</p>
                    <p className='text-semibold'> Phone Number</p>
                    <p className='text-semibold'>Status</p>
                    <p className='text-semibold'>Verification</p>
                    <p className='text-semibold'>Joined</p>
                </div>

                {UserItems.map((item) => {
                    return (
                        <div className='flex space-x-20 p-2'>
                            <input type='checkbox' className=' w-4 h-4' />
                            <p> {item.name} </p>
                            <p> {item.email} </p>
                            <p> {item.phone} </p>
                            <p className="flex"> <GoVerified className='text-blue-600' /> <span className='-mt-1 mx-1 '> {item.status} </span> </p>
                            <p className='bg-red-200 px-4 py-1'> {item.verif} </p>
                            <p> {item.joined} </p>
                        </div>
                    )
                }
                )}
            </div>

        </div>
    )
}

export default AllUsers

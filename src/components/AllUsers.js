// /** @format */
import React from 'react'
import { UserItems } from '../utils/data'
import {GoVerified} from 'react-icons/go'
import ChrisFlag from '../assets/Chris-flag.png'

function AllUsers() {
    return (
        <div className='mb-10'>
            <div className='flex space-x-6'>
                <h2 className='py-7 px-40 font-semibold '>Users</h2>
                <h2 className='py-7 px-40 font-semibold text-blue-400 border-b-4 border-blue-400'>Merchant</h2>
                {/* <h2 style={{ color: '#21252A', border: '2px #21252A' }} className='py-7 px-20 text-blue-400'>Merchant</h2> */}
            </div>
            <div className = 'shadow p-2'>

                <div className="flex justify-evenly font-semibold my-2 mx-16 space-x-28 p-2">
                    {/* <p className='' ></p> */}
                    <p className='pl-16'>Name</p>
                    <p className=' pl-8 pr-10'>Email</p>
                    <p className='w-32 border'> Phone Number</p>
                    <p className=''>Status</p>
                    <p className=''>Verification</p>
                    <p className='mr-'>Joined</p>
                </div>

                {UserItems.map((item) => {
                    if (item.verif === 'Verified' ) {
                    
                        return (
                            <div className='flex space-x-20 text-sm my-2 p-2'>
                                <input type='checkbox' className=' w-4 h-4' />
                                <p className='flex h-6 mx-2'> <img src={ChrisFlag} alt='Chris' /> <span className='mx-2'> {item.name} </span> </p>
                                <p> {item.email} </p>
                                <p> {item.phone} </p>
                                <p className="flex"> <GoVerified className='text-blue-600' /> <span className='-mt-1 mx-1 '> {item.status} </span> </p>
                                <p className='bg-blue-200 text-blue-600 font-semibold px-4 rounded-sm '> {item.verif} </p>
                                <p className='pl-4 text-xs '> {item.joined} </p>
                            </div>
                        )
                    } else {
                        return (
                            <div className='flex space-x-20 text-sm my-2 p-2'>
                                <input type='checkbox' className=' w-4 h-4' />
                                <p className='flex h-6 mx-2'> <img src={ChrisFlag} alt='Chris' /> <span className='mx-2'> {item.name} </span> </p>
                                <p> {item.email} </p>
                                <p> {item.phone} </p>
                                <p className="flex"> <GoVerified className='text-blue-600' /> <span className='-mt-1 mx-1 '>{item.status}</span></p>
                                <p className='bg-red-200 text-red-600 font-semibold  px-4 rounded-sm  text-sm'> {item.verif} </p>
                                <p className='text-xs'> {item.joined} </p>
                            </div>
                        )
                    }
                }
                )}
            </div>

        </div>
    )
}

export default AllUsers

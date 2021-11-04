import React from 'react'
import Layout from './Layout'
import AllUsers from './AllUsers'
import { IoIosArrowDown } from 'react-icons/io'

function Main() {
    const totalUsers = '300,568'
    return (
        <Layout>
            <header className=''>
                <h2 className=' font-semibold text-3xl'>Users</h2>
                <div className=' flex mt-4 justify-between p-5'>
                    <div className='flex  space-x-12 my-4'>
                        <p className='font-semibold -ml-4 text-xl'>All Users</p>
                        <p className='leading-8'>Total ({totalUsers})</p>
                    </div>
                    <div className='mr-24'> <button className='flex px-6 py-3 rounded-md text-white bg-blue-500'> <span className='-my-1 mx-2'> Filter </span> <IoIosArrowDown /> </button> </div>
                    
                </div>

            </header>

            <AllUsers />
        </Layout>
    )
}

export default Main

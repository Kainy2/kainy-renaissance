import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
    return (
        <div className=''>
            <Header />
            <div className='px-5'>
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout

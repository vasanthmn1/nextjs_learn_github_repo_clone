import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link href={'/'}>Logo</Link>
                </div>
                <div className='links'>
                    <Link href={'/code/repos'}>Code/respo</Link>


                </div>

            </div>
        </div>
    )
}

export default Header
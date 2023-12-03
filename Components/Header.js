
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className='flex items-center  justify-between px-5 h-10 bg-slate-400 text-white  font-bold'>
                <Link className='px-3' href={"/"}>Logo .</Link >
                <div>
                    <Link className='px-3' href={"/Services"}>Services</Link >
                    <Link className='px-3' href={"/Contact"}>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Header

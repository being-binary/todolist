import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdMenu } from "react-icons/md";

const Navbar = () => {
    const [x, setX] = useState(false)
    return (
        <div className='w-full h-[70px] flex justify-between items-center bg-blue-400 relative lg:px-[10vw] md:px-[10vw] px-[5vw] py-5'>
            <h1 className='text-3xl'>Todo List</h1>
            <ul className='gap-5 text-xl capitalize md:flex hidden'>
                <li><Link to={'/'}>home</Link></li>
            </ul>
            {
                x && <ul className='z-50 w-full text-xl capitalize absolute top-[100%] left-0'>
                    <li className='bg-blue-200 w-full p-5 text-center'><Link onClick={()=>setX(false)} to={'/'}>home</Link></li>
                </ul>
            }
            <MdMenu className='text-2xl md:hidden block' onClick={()=>setX(!x)} />
        </div>
    )
}

export default Navbar

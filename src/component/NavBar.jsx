import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'
 
const NavBar = () => {
        const link=[
            {
                id:1,
                link:"home"
            },
            {
                id:2,
                link:"About"
            },
            {
                id:3,
                link:"service"
            },
            {
                id:4,
                link:"Projects"
            },
            {
                id:5,
                link:"contact"
            }
        ]
    const [nav,setNav]=useState(false);
   return (
        <div className='flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed'>
            {/* <FaBars/> */}
            <div>
                <h1 className='text-3xl font-signature ml-2'>DigitalDiaries</h1>
            </div>
            <ul className='hidden md:flex'>
                    {
                        link.map(({id,link})=>(
                            <li key={id} 
                            className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-250 '>
                                
                                <Link to={link} smooth duration={500}>{link}</Link>
                                </li>
                        ))
                    }
            
            </ul>

            <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {
                    nav ? <FaTimes size={25}/> :<FaBars size={25}/>
                }
            </div>
             {nav && (
                //  {/* list for mobile version */}
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800
            text-gray-500
           '>
               {
                 link.map(({id,link})=>(
                    <li key={id} className='px-3 cursor-pointer capitalize py-6 text-3xl'>
                     <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                 ))
               }

           
          
           </ul>
             )}
            
        </div>
    )
}

export default NavBar
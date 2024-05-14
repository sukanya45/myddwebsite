import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {MdOutlineEmail} from "react-icons/md"


const SocialLinks = () => {
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
         <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-800 hover:ml-[-10px] hover:rounded-md duration-300">
                <a href="https://www.linkedin.com/in/sukanya-jakate-728978209"  target={"_blank"}  rel={"noreferrer"} className="flex justify-between items-center w-full text-white">
                    <>LinkedIn<FaLinkedin size={30}/></>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-800 hover:ml-[-10px] hover:rounded-md duration-300">
                <a href="team.digitaldiaries.com" target={"_blank"} rel={"noreferrer"} className="flex justify-between items-center w-full text-white">
                    <>Email<MdOutlineEmail size={30}/></>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-800 hover:ml-[-10px] hover:rounded-md duration-300">
                <a href="https://github.com/sukanya45" target={"_blank"}   rel={"noreferrer"} className="flex justify-between items-center w-full text-white">
                    <>Github<FaGithub size={30}/></>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks
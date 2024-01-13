import React from 'react'
import data from "../data/data.json"
import Link from "../components/Link.jsx"
import { motion } from "framer-motion"

const Header = () => {

  const logo = "src/assets/icons/logos/logo-black.svg"
  const navlinks = data.navlinks;

  return (
    <motion.div 
    initial={{y:"-100%", opacity: 0}}
    animate={{y: "0", opacity: 1, transition: {ease: "linear", duration: .75}}}
    className="header flex justify-between w-100 p-5">
      <div className='logo-container ml-10'>
      <img className='logo' src={logo} />
      </div>
      <div className='navigating-menu mr-10'>
        <ul className='flex gap-5 navbar'>
          {
            navlinks.map((navlink) => {
                return <Link key={navlink.order} {...navlink}/>
            })
          }
          <li className='expand p-2'>
            <a href="src\data\Harsh_Mishra_Resume.pdf" target="_blank">Resume</a>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Header
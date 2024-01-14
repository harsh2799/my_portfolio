import {React, useRef} from 'react'
import data from "../data/data.json"
import Link from "../components/Link.jsx"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = ({contentRef}) => {

  const logo = "src/assets/icons/logos/logo-black.svg"
  const navlinks = data.navlinks;
  const navRef = useRef();

  const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
      contentRef.current.classList.toggle("nav-open");
  }

  const hideNavbar = () => {
      navRef.current.classList.remove("responsive_nav");
      contentRef.current.classList.toggle("nav-open");
  }

  return (
    <motion.div 
    initial={{y:"-100%", opacity: 0}}
    animate={{y: "0", opacity: 1, transition: {ease: "linear", duration: .75}}}
    className="header flex justify-between w-100 p-5">
      <div className='logo-container ml-10'>
        <a href="/"><img className='logo' src={logo} /></a>
      </div>
      <nav className='navigating-menu mr-10'  ref={navRef}>
        <ul className='flex gap-5 navbar'>
          {
            navlinks.map((navlink) => {
                return <Link key={navlink.order} {...navlink} navClose={hideNavbar}/>
            })
          }
          <li className='expand p-2'>
            <a href="src\data\Harsh_Mishra_Resume.pdf" target="_blank">Resume</a>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
          </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
      </button>
    </motion.div>
  )
}

export default Header
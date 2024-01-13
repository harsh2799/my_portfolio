import React from 'react'
import "../css/home.css"
import helloThereSound from "../assets/sound/obi-wan-hello-there.mp3"
import { motion } from "framer-motion"

const Home = () => {
  
  return (
    <div id='home' className='flex justify-center items-center'>
      <motion.div className='intro'>
        <div className='frame'>
          <div className='cut-left'></div>
          <div className='cut-right'></div>
          <div className='cut-bottom'></div>
          <div className='cut-top'></div>
          
          <div className='frame-content'>
            <motion.div  
              initial={{x:"100%", opacity: 0}}
              animate={{x: "0", opacity: 1, transition: {ease: "linear", duration: .75}}}
              className='text-4xl md:text-6xl lg:text-8xl mx-auto lg:mx-56 mb-9 leading-tight capitalize'>
              <p>👋 <span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500'><span>Hello there!</span> <br /> <span>I'm Harsh Mishra</span></span></p>
            </motion.div>
            <motion.div 
              initial={{x:"-100%", opacity: 0}}
              animate={{x: "0", opacity: 1, transition: {ease: "linear", duration: .75}}}
              className='text-2xl md:text-2lg lg:text-4lg mx-auto'>- a <span className='text-cyan-700 hover:font-medium'>fullstack developer</span> with a knack for problem-solving and a passion for crafting seamless digital experiences.</motion.div>
          </div>
        </div>
      </motion.div>
      <a className="explore" href="#experiences">
          <span className="text-sky-600">Explore More</span>
          <svg id="more-arrows">
              <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
              <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
              <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
          </svg>
      </a>
    </div>
  )
}

export default Home
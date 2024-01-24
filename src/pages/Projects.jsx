import React from 'react'
import "../css/projects.css"
import data from "../data/data.json"
import Project from "../components/Project.jsx"

const Projects = () => {

  const top_projects = data.projects.top;
  const regular_projects = data.projects.regular;

  return (
    <div id="projects" className='relative h-auto'>
      <div className='p-10'>
        <p className='bg-clip-text font-semibold  lg:text-4xl text-3xl text-transparent  bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500'>Projects</p> 
        <p className='text-md text-gray-500'>Things I have built so far...</p>
      </div>
      <div className='overflow-y-scroll all-projects'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-x-6 gap-y-12 lg:mx-4 my-5'>
          {
              top_projects.map((project, index) => {
                return <Project key={index} {...project} isTop/>
              })

          }
        </div>
      </div>
      <div> 
        <div className='small-projects overflow-x-scroll animate-marquee-cycle md:[animation-duration:15s] lg:[animation-duration:20s]'>
            {
              regular_projects.map((project, index)=>{
                return <Project key={index} {...project}/>
              })
            }
          </div>
      </div>
      <div className="absolute bottom-0 w-100 text-center w-full p-2 intro-text">
        <span>❤️ Designed with innovation and dedication 🚀 by <a className='text-sky-500' target="_blank" href="https://www.linkedin.com/in/harshmishra27/">Harsh Mishra</a> </span>
      </div>
    </div>
  )
}

export default Projects
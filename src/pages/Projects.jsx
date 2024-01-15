import React from 'react'
import "../css/projects.css"
import data from "../data/data.json"
import Project from "../components/Project.jsx"

const Projects = () => {

  const projects = data.projects;

  return (
    <div id="projects" className='relative'>
      <div className='p-10'>
        <p className='bg-clip-text font-semibold  lg:text-4xl text-3xl text-transparent  bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500'>Projects</p> 
        <p className='text-md text-gray-500'>Things I have built so far...</p>
      </div>
      <div className='overflow-y-scroll all-projects'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-6 gap-y-12 lg:mx-4 my-5'>
          {
              projects.map((project, index) => {
                return <Project key={index} {...project}/>
              })

          }
        </div>
      </div>
      <div className="absolute bottom-0 w-100 text-center w-full p-2">
        <span>❤️ Designed with innovation and dedication 🚀 by <a className='text-sky-500' target="_blank" href="https://www.linkedin.com/in/harshmishra27/">Harsh Mishra</a> </span>
      </div>
    </div>
  )
}

export default Projects
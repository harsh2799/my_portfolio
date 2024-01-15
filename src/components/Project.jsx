import React from 'react'
import { FaLink, FaGithub } from 'react-icons/fa';

const Project = ({id, title, github_link, page_link, image_source, description, tech_stack}) => {

  const image_path = "/assets/images/projects/";
  const default_image = "space.jpg"

  return (
    <div className='project-container bg-white group lg:w-11/12 w-9/12 lg:m-2 rounded-lg shadow-xl'>
       
        <img height={100} className="flex rounded-t-lg object-cover" src={image_path + (image_source ? image_source : default_image)} title={title} />
        <div className='text-2xl font-medium p-2'>{title}</div>
        <div className='project-details p-2'>
            <div className='text-sm text-gray-400'>
                <p>{description}</p>
                {/* <p>Made With: {tech_stack.join(",")}</p> */}
            </div>
        </div>
        <div className='nav-to-proj flex justify-between flex-col gap-4 text-xl'>
            <a className='inline-flex items-center gap-2 hover:font-bold' title="Preview" href={page_link}>
                <FaLink /> 
                {/* <span className='underline underline-offset-4'>Preview</span> */}
            </a>
            <a className='inline-flex items-center gap-2 hover:font-bold' title="View Code" href={github_link}>
                <FaGithub /> 
                {/* <span className='underline underline-offset-4'>View Code</span> */}
            </a>
        </div>
    </div>
  )
}

export default Project
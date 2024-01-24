import React from 'react'
import data from "../data/data.json"
import Skill from "../components/Skill.jsx"

const TechStack = () => {

  const skills = data.skillsets;
  const randColor = []

  return (
    <div id="techstack" className='flex flex-col gap-3 justify-center techstack-bg'>

      {
        skills.map((skill, index) => {
            return <div key={index} className='mb-10'>
              
              <div className="text-center lg:text-left lg:text-4xl text-3xl text-sky-500 mb-5">{skill.name}</div>
              <div className="flex gap-5 lg:gap-4 flex-wrap justify-center lg:justify-start">
                {
                  skill.skills.map((tech, index) => {
                    return <Skill key={index} {...tech} /> 
                  })
                }

              </div>
            </div>
        })
      }

    </div>
  )
}

export default TechStack
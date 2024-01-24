import React from 'react'

const Skill = ({name, icon}) => {

  const skillPath = "/assets/icons/techstack/"

  return (
    <div className='flex gap-4 tile-bg lg:items-center lg:p-4 lg:shadow-md lg:rounded-md skill-button hover:cursor-pointer lg:hover:shadow'>
      <img className="h-10" src={skillPath + icon} id={name} title={name} />
      <label className='intro-text hidden lg:block' htmlFor={"#" + name}>{name}</label>
    </div>
  )
}

export default Skill
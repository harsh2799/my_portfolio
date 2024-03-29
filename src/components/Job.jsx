import React from 'react'
import {useAnimation, motion} from 'framer-motion'


const Job = ({id, company_name, position, time, skills, description, logo}) => {
  
  const logoPath = "/assets/icons/jobs/";
  
  return (
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{delay: .25, ease: "easeIn"}}
        className={"container left slide-left cursor-pointer"}>
        <div className="content">
          <h2 className='company-name intro-text'>{company_name}</h2>
          <h4 className='position-time'>{position}  <span className='time'>{time}</span></h4>
          <p className='work-description intro-text'>
            {description}
          </p>
          <div className='skills'>
              {skills.map((skill, index) => {
                  return <span key={index} className='skill'>{skill}</span>
              })}
          </div>
        </div>
        {/* <div className={"content-logo logo-left"}>
          <img src={logoPath + logo} alt={company_name} />  
        </div> */}
      </motion.div>
  )
}

export default Job
import React from 'react'
import {useAnimation, motion} from 'framer-motion'


const Job = ({id, company_name, position, time, skills, description, logo}) => {
  
  const logoPath = "/src/assets/icons/jobs/";
  
  return (
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{delay: .25, ease: "easeIn"}}
        className={"container left slide-left"}>
        <div className="content">
          <h2 className='company-name'>{company_name}</h2>
          <h4 className='position-time'>{position}  <span className='time'>{time}</span></h4>
          <p className='work-description'>
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
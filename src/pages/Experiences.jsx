import React from 'react'
import "../css/experiences.css"
import data from "../data/data.json"
import Job from '../components/Job'

const Experiences = () => {

    const socialLinks = data.socialLinks;
    const experiences = data.experience;
    const linkPath = "/assets/icons/social/"

    return <div id="experiences" className='flex flex-col items-center pt-16 md:pt-20 lg:flex-row'>
        <div className='introduction flex-1 p-2 flex justift-center flex-col text-center sm:w-3/4 lg:w-3/5 lg:pr-12 lg:text-left'>
            <p className='bg-clip-text font-semibold  lg:text-6xl text-3xl uppercase text-transparent  bg-gradient-to-r from-green-500 via-purple-500 to-blue-500'>My Tale</p>
            <p className='pt-6 text-xl leading-relaxed text-justify text-gray-800 mb-10'>
                I am a tech enthusiast with 2+ years of professional experience and a Master's in Applied Computer Science from Concordia University.
                Proficient in Python, Java, and React.js, my journey has been marked by a passion for problem-solving. 
                I thrive on crafting innovative solutions that go beyond code, enhancing efficiency. 
                In every project, I enjoy the challenge of solving complex problems with creativity and precision.
            </p>
            <div className='flex flex-row gap-4 items-center'>
                <p className='font-semibold text-md'>Get to Know Me: </p>
                {
                    socialLinks.map((link, index) => {
                        if (link.title == 'Gmail') { 
                            return (
                                <a key={index} className="social-link " href={"mailto:" + link.href} target='_blank'>
                                    <img src={linkPath + link.image + ".svg"} />
                                </a>
                            )
                        }
                        else {
                            return <a key={index} className="social-link" href={link.href} target="_blank" title={link.title}><img src={linkPath + link.image + ".svg"} /></a>
                        }
                    })
                }
            </div>
        </div>
        <div className='experience flex-1 p-2'>
            <div className='excontent'>
                <div className='timeline'>
                    {
                    experiences.map((experience) => {
                        
                        return <Job key={experience.id} {...experience} />
                    })
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Experiences
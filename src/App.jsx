import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Experiences from "./pages/Experiences"
import TechStack from "./pages/TechStack"
import Projects from "./pages/Projects"
import {useRef, useEffect, useState} from 'react'
import data from "./data/data.json"
import { FaMoon, FaSun } from 'react-icons/fa'

export default function App() {
  const contentRef = useRef()
  const [currentTheme, changeTheme] = useState("light")

  const toggleTheme = () => {
    if (currentTheme == "light") {
      changeTheme("dark");
      changeColor("dark")
    }
    else{ 
      changeTheme("light");
      changeColor("light");
    }    
  }

  const changeColor = (theme) => {
    const colorData = data["color-scheme"][theme]
    document.documentElement.style.setProperty('--main-font-color', colorData["main-font-color"]);
    document.documentElement.style.setProperty('--main-element-color', colorData["main-element-color"]);
    document.documentElement.style.setProperty('--main-background-color', colorData["main-background-color"]);
    document.documentElement.style.setProperty('--link-color', colorData["link-color"]);
    document.documentElement.style.setProperty('--link-line-color', colorData["link-line-color"]);
    document.documentElement.style.setProperty('--nav-button-color', colorData["nav-button-color"]);
    document.documentElement.style.setProperty('---skill-button', colorData["skill-button"]);
    document.documentElement.style.setProperty('--techstack-background', colorData["techstack-background"]);
    document.documentElement.style.setProperty('--tile-background', colorData["tile-background"]);
    document.documentElement.style.setProperty('--tile-frame-background', colorData["tile-background"]);
  }

  useEffect(() => {
    changeColor("light")
  }, [])

  return (
    <>
      <Header contentRef={contentRef} currentTheme={currentTheme}/>
      <div className="content-div" id="content-div" ref={contentRef}>
        <Home/>
        <Experiences/>
        <TechStack/>
        <Projects/>
        {/* <Contact/> */}
      </div>
        <button className={`${currentTheme}-toggle-switch toggle-switch`} onClick={toggleTheme}>{currentTheme == "light" ? <FaMoon /> : <FaSun />}</button>
    
    </>
  )
}

import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Experiences from "./pages/Experiences"
import TechStack from "./pages/TechStack"
import Projects from "./pages/Projects"
import {useRef} from 'react'

export default function App() {
  const contentRef = useRef()
  return (
    <>
      <Header contentRef={contentRef}/>
      <div className="content-div" id="content-div" ref={contentRef}>
        <Home/>
        <Experiences/>
        <TechStack/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

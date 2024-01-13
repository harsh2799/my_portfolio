import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Experiences from "./pages/Experiences"
import TechStack from "./pages/TechStack"
import Projects from "./pages/Projects"

export default function App() {
  return (
    <>
      <Header />
      <div className="content-div">
        <Home/>
        <Experiences/>
        <TechStack/>
        <Contact/>
        <Projects/>
      </div>
    </>
  )
}

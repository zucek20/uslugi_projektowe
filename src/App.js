import{ Routes, Route } from "react-router-dom"
import "./styles/App.scss"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { NotFound } from "./pages/NotFound"
import { Nav } from "./Nav"

export default function App() {
  
  return (
    <>
    <Nav />

    <Routes>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>

    <footer>
      <p>Paweł Izdebski 2022 &copy;</p>
      <a href="https://github.com/zucek20">Github</a>
    </footer>
    </>
  )
} 
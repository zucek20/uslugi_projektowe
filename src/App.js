import{ Routes, Route, useLocation } from "react-router-dom"
import "./styles/App.scss"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { NotFound } from "./pages/NotFound"
import { Nav } from "./Nav"
import { AnimatePresence } from "framer-motion"

export default function App() {
  const location = useLocation();

  return (
    <>
    <Nav />

    <main>
      <AnimatePresence exitBeforeEnter>

      <Routes key={location.pathname} location={location}>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      </AnimatePresence>
    </main>

    <footer>
      <p>Paweł Izdebski 2022 &copy;</p>
      <a href="https://github.com/zucek20">Github</a>
    </footer>
    </>
  )
} 
import "./styles/Nav.scss"
import logo from "./img/logo_main.png"
import { NavLink } from "react-router-dom"
import burger from "./img/icons/burger.png"
import { useState } from "react"

export function Nav() {
  const [active, setActive] = useState(false)

  return (
    <>
    <nav className="navDesktop">
      <div className="navWrap">

        <NavLink to="/">
          <img className="logo_main" src={logo} alt="logo"/>
        </NavLink>

        <div className="links">
          <NavLink className="link" to="/">Oferta</NavLink>
          <NavLink className="link" to="projects">Projekty</NavLink>
          <NavLink className="link" to="about">O mnie</NavLink>
          <NavLink className="link" to="contact">Kontakt</NavLink>
        </div>

        <img src={burger} alt="burger menu" className="burger" onClick={() => setActive(!active)}/>

        
      </div>
    </nav>

    <div id="menu" className={active.toString()}>
      <NavLink onClick={() => setActive(!active)} className="link" to="/">Oferta</NavLink>
      <NavLink onClick={() => setActive(!active)} className="link" to="projects">Projekty</NavLink>
      <NavLink onClick={() => setActive(!active)} className="link" to="about">O mnie</NavLink>
      <NavLink onClick={() => setActive(!active)} className="link" to="contact">Kontakt</NavLink>
    </div>
    </>
  )
}
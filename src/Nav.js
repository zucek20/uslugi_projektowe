import "./styles/Nav.scss"
import logo from "./img/logo_main.png"
import { NavLink } from "react-router-dom"
import burger from "./img/icons/burger.png"
import { useEffect, useState } from "react"

export function Nav() {
  const [active, setActive] = useState(false)

  const scroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  

  return (
    <>
    <nav className="navDesktop">
      <div className="navWrap">

        <NavLink to="/">
          <img onClick={setTimeout(() => scroll(), 300)} className="logo_main" src={logo} alt="logo"/>
        </NavLink>

        <div className="links">
          <NavLink onClick={function(){setTimeout(() => scroll(), 300)}} className="link" to="/">Oferta</NavLink>
          <NavLink onClick={function(){setTimeout(() => scroll(), 300)}} className="link" to="projects">Projekty</NavLink>
          <NavLink onClick={function(){setTimeout(() => scroll(), 300)}} className="link" to="about">O mnie</NavLink>
          <NavLink onClick={function(){setTimeout(() => scroll(), 300)}} className="link" to="contact">Kontakt</NavLink>
        </div>

        <img src={burger} alt="burger menu" className="burger" onClick={() => setActive(!active)}/>
        
        
      </div>
    </nav>

    <div id="menu" className={active.toString()}>
      <NavLink onClick={() => {setActive(!active); setTimeout(() => {scroll()}, 300)}} className="link" to="/">Oferta</NavLink>
      <NavLink onClick={() => {setActive(!active); setTimeout(() => {scroll()}, 300)}} className="link" to="projects">Projekty</NavLink>
      <NavLink onClick={() => {setActive(!active); setTimeout(() => {scroll()}, 300)}} className="link" to="about">O mnie</NavLink>
      <NavLink onClick={() => {setActive(!active); setTimeout(() => {scroll()}, 300)}} className="link" to="contact">Kontakt</NavLink>
    </div>
    </>
  )
}
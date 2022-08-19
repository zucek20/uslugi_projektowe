import "./styles/Nav.scss"
import logo from "./img/logo_main.png"
import { NavLink } from "react-router-dom"

export function Nav() {

  return (
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

        {/* burger here */}
      </div>
    </nav>
  )
}
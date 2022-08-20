import { NavLink } from "react-router-dom"
import Animated from "../Animated"
import robot from "../img/icons/robot.png"
import "../styles/NotFound.scss"

export function NotFound() {
  return (
    <Animated>
      <section className="notFound">
        <img src={robot} alt="robot" />
        <h2>Błąd 404</h2>

        <p>Nie odnaleziono strony</p>

        <NavLink className="back" to="/">Strona główna</NavLink>
      </section>
    </Animated>
  )
}
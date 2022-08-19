import "../styles/Home.scss"
import {NavLink} from "react-router-dom"
import Animated from "../Animated"

export function Home() {
  return (
    // <h1>Home</h1>
    <>
    <Animated>

      <section className="wrapper">

        <header>
          <h2>Profesjonalne <br/>usługi<br/> projektowe</h2>
          <p>Nasze biuro zapewnia nie tylko fachowe tworzenie projektów budowlanych, ale także szereg innych usług.</p>
        </header>
        
        <div className="offer">
          <h3>Co oferujemy</h3>

          <article className="art1">
            <div className="artImg1"></div>
            <p>Podstawą biura jest projektowanie. Projekty w zakresie konstrukcji, architektury oraz projektów branżowych.</p>
          </article>

          <article className="art2">
            <div></div>
            <p>Nadzory inwestorskie.</p>
          </article>

          <article className="art3">
            <div></div>
            <p>Obsługa w zakresie inwestora zastępczego.</p>
          </article>

          <p className="check">Sprawdź nasze <NavLink className="link" to="projects">zrealizowane projekty</NavLink>!</p>
        </div>

      </section>
    </Animated>
    </>
  )
}
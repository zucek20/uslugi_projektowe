import Animated from "../Animated"
import "../styles/About.scss"
import check from "../img/icons/check.png"

export function About() {
  return (
    <Animated>
      <section className="about">
        <header>
          <h2>O mnie</h2>
        </header>

        <div className="wrapper">
          <article>
            <h3>Początki</h3>
            <p>Projektowaniem zajmujemy się od <b>1991 r</b>. Pierwsze kroki to: tradycyjnie deska kreślarska, rapidograf i duże biuro projektowe.</p>
          </article>
          <article>
            <h3>Modernizacja</h3>
            <p>Po jakimś czasie komputer, programy kreślarskie i obliczeniowe. Początki projektowania od domów jednorodzinnych następnie budynki wielorodzinne, zakłady produkcyjne, sportowe itp. Obecnie posiadamy oprogramowanie ZwCad, BricsCad, Robot, ABC i wiele innych.</p>
          </article>
          <article>
            <h3>Zainteresowania</h3>
            <p>Interesuję się nurkowaniem AOWD, wycieczkami po górach, nartami oraz morsowaniem.</p>
          </article>
        </div>

        <figure>
          <p>Najważniejsze to nasze doświadczenie i zapał w rozwiązywaniu problemów. </p>
          <img src={check} alt="check icon" />
        </figure>
      </section>
    </Animated>

  )
}

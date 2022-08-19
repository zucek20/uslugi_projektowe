import "../styles/Projects.scss"
import Animated from "../Animated"
import dots from "../img/icons/dots.png"

export function Projects() {
  return (
  <Animated>
    <section className="wrapper projects">
      <header>
        <h2>Zrealizowane <br/>projekty</h2>
      </header>

      <h3>Projekty mieszkaniowe dla deweloperów:</h3>

      <figure>
        <div className="wrap2">
          <div className="wrap4">
            <div className="strus"></div>
            <div className="m"></div>
          </div>
          <div className="budomatex"></div>
        </div>
        <div className="ssm"></div>
      </figure>
      <p>Inwestorzy indywidualni</p>

      <img src={dots} alt="dots icon" />

      <div className="examples1">
        <div className="industry">
          <h3>Projekty przemysłowe:</h3>
          <ul>
            <li>Bozamet</li>
            <li>Mleczarnia w Rykach</li>
            <li>Mleczarnia w Siedlcach</li>
            <li>Zakład przetwórstwa owoców i warzyw w Grójcu</li>
            <li>Zakład przetwórstwa owoców i warzyw w Janowie Podlaskim</li>
            <li>Astra Siedlce</li>
            <li>Bass Tools</li>
            <li>Pilkington Sandomierz</li>
            <li>PEC Serwis</li>
          </ul>
        </div>
        <div className="public">
          <h3>Projekty użytku publicznego:</h3>
          <ul>
            <li>Park wodny Ruda Śląska</li>
            <li>Liceum Ogólnokształcące nr 1 w Siedlcach</li>
            <li>Szkoła w Kosowie Lackim</li>
            <li>Urząd Gminy w Mińsku Mazowieckim</li>
            <li>Galeria Sandecja Nowy Sącz</li>
          </ul>
        </div>
      </div>
      <div className="examples2">
        <h3>Obiekty zabytkowe</h3>
        <ul>
          <li>Pałącyk Suberia w Korczewie</li>
          <li>Dworek w Kupientynie</li>
        </ul>
      </div>

      <section className="gallery">
        <h3>Galeria</h3>

        <div className="galleryGrid">
          <div className="gal1" title="Galeria Sandeca"></div>
          <div className="gal2"></div>
          <div className="gal3"></div>
          <div className="gal4"></div>
          <div className="gal5"></div>
          <div className="gal6"></div>
          <div className="gal7"></div>
          <div className="gal8"></div>
          <div className="gal9"></div>
        </div>
      </section>

    </section>
  </Animated>
  )
}
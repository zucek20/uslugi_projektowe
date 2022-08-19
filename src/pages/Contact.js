import Animated from "../Animated"
import "../styles/Contact.scss"
import phone from "../img/icons/phone_icon.png"
import office from "../img/icons/office.png"
import mail from "../img/icons/mail.png"

export function Contact() {
  return (
    <Animated>
      <section className="contact">
        <header>
          <h2>Kontakt</h2>
        </header>

        <figure>
          <div>
            <img src={phone} alt="phone icon" />
            <p><b>Tel:</b> 606 103 136</p>
          </div>
          <div>
            <img src={mail} alt="mail icon" />
            <p><b>E-mail</b> mi321@wp.pl</p>
          </div>
          <div>
            <img src={office} alt="office icon" />
            <p><b>Biuro: </b>ul. Floriańska 47<br/>
            08-110 Siedlce</p>
          </div>
        </figure>

      </section>
    </Animated>
  )
}
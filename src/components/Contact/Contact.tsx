import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>contact me</h2>
        <p>If you saw my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:hemanthkumarv35@gmail.com">hemanthkumarv35@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone" />
          <a href="tel:+918904014600">8904014600</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
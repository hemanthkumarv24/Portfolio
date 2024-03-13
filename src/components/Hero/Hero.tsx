import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
// import Illustration from "../../assets/illustration.svg"
import Lottie from "lottie-react-web";
import animationData from "../../assets/illustration.json";
import Resume from '../../assets/Hemanth-Resume.pdf'

import { NavHashLink } from "react-router-hash-link"
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text" style={{width:'55%'}}>
        {/* <ScrollAnimation animateIn="fadeInUp">
          <p>Hi,🖐️ I'm</p>
        </ScrollAnimation> */}
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h1>Hemanth Kumar V</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h1><span style={{color:'#5af25a'}}>Software</span> Developer</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume"> I am a versatile tech enthusiast skilled in Web Development & Deployment, Game Development, Ethical Hacking, and IoT.</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contato" className="button">Let's Talk</NavHashLink>
              <a href={Resume} target="_blank" rel="noopener noreferrer" className="button" style={{ marginLeft: '20px' }}>
  Resume
</a>

            </BrowserRouter>
          </ScrollAnimation>
          
      </div>
      <div className="hero-image">
      <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <Lottie
            options={{
              animationData: animationData,
            }}
          />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
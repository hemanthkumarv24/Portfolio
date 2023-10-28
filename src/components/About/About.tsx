import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>My name is Hemanth Kumar v, I am a computer technician with a great passion for programming. I am passionate about delivering solutions that add value to people's lives and at the same time challenge me. Improved my skills as a Front-End </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing layouts that provide me. I'm always improving myself with each project they put in my hands.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>I am a dedicated person who strives to make my dreams come true, hardworking and results-oriented, I always seek to achieve the best version of myself</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          {/* <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={vueIcon} alt="Vue" />
          </ScrollAnimation>
          </div> */}

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>


        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src="https://lh3.googleusercontent.com/pw/AIL4fc_sBr2XeefLDNzlJJWRCmESerd2mtMPEPieqo35ghVb3p7aHsJtTkD4Q2mUIPn-Do4x7gn3mKLEvNLBfNge_jQnZv2-GXU3Ji9zfwCyE-YBAkDlYs1su55kdRZwIjND_Ibc8ykJwfg7mCq7SaN-pV3EQ1zqh-j5pfTi1yxJXvcYn88aR2_oYjtVc0TPotOq88-QvQatSHQAnLy6lltLhXCaaC5JJNh-5CtyXXOj1gahcI8TTbnaLx-OAK6QN9btNn9NOhVwH6Nbk-aiAkwzNh-UWihxaKbbLpUob0eeqTc-wJ7__JGFHkOOVrlWwT84GvEiilWLOmDaAM_Gq0jBd7-ScWZ0i7n6Oxax7JdHPYX8vP7LJX8wIFTsCs6R_QcajcNeOHwRmkerZvZkBiHo6eJpMfE79dTuUn2SWqMO2xO7p9FV-gkHFv8-oRxIfJwPjuv1DYKEdqbtBn4x3wfRVo_zEym0hTxKXtdKRN_W6Cb-bT7SvuABs1Jc1RPdYqx_birvtwq5swnfirEHt7gtkQx6RWFUGi-qHLdqTGsCo6yHjvN5juVetCraTGAZVU1al7voUzPp2-5kr1FAMTU1cDZbXi5IqSB65kavnwnj5VE8nNCkPam5w_qG6JpOZ-HN2VP8fK9OxTwydNm09cLZXcGU1ZqdMl2VsUq8SCgFhVmPk-u1YJg-B9YcNyl9iRjIo-ScaPeYMI3JHKfdaIP-Xkb0Wxg4QUnwWxDi3o7my_dgzJVxlgXdLJC76gbGkZsoaeq7x3RPHcnrnEFtxnSKJA7OH5gv4fe9IdEkEzkIzFcg2IqRd1jpjcyE636G5P5qXQf-0TOZ0rmia93EGPTh1qbvnly0mLG7yFVv7-iEVk0kfJxN8BTUrxLbqSvsI2Svq3E7ZvCTPLBeOGDMoG6EDs6W3CXcy1YfmAPSf6xsE_9L1WaB3lnllbjQ342p=w504-h504-s-no?authuser=0" alt="Hemanth kumar v"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}

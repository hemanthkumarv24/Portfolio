import React, { useEffect } from 'react';
import { tsParticles } from "tsparticles";

const ParticlesBackground: React.FC = () => {

  useEffect(() => {
    tsParticles.load("tsparticles", {
      particles: {
        number: {
            value: 100
        },
        size: {
            value: 3
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          }
        }
      }
    });
  }, []);
  
  return <div id="tsparticles"></div>;
}

export default ParticlesBackground;

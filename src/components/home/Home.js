import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'

import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import img from '../../images/img.jpg'
import linkedin from '../../images/social/linkedin.png'
import whatsapp from '../../images/social/facebook.png'
import github from '../../images/social/github.png'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles className="particles" params={config.particles} />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <h1 className="greeting-text">
              Hola, esta es{' '}
              <span className="name">Mi Presentacion de Portfolio</span>{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                🚀
              </span>
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'Soy un Desarrollador Web Stack MERN',
                    'Transformo ideas en productos digitales.',
                    'Creo experiencias digitales únicas.',
                    'Trabajo con tecnologías modernas, como React, Node, MongoDB, etc.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '<',
                  delay: 100,
                }}
              />
            </h1>
            <img
              className="profile"
              alt="tomas steven"
              src={img}
              onLoad={() => setImageLoaded(true)}
            />
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/tomas-steven/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />
                </a>
                <a
                  href="http://wa.link/89sjrd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={whatsapp} alt="Linkedin Logo" width="50px" />
                </a>
                <a
                  href="https://github.com/tomisteven"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Linkedin Logo" width="50px" />
                </a>
              </div>
            </Bounce>
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home

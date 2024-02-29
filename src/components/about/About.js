import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="about" name="Acerca de">
      <div className="about-content">

      <Skills />
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Quien Soy ? </h2>
            <p>
              Soy Tomas{' '} !

            </p>
            <p>
              <span role="img" aria-label="lightning">
              🚀
              </span>{' '}
               Soy un apasionado programador web especializado en el stack MERN (MongoDB, Express.js, React.js y Node.js). Con una sólida experiencia en el desarrollo de aplicaciones web modernas y dinámicas, me esfuerzo por ofrecer soluciones creativas y eficientes para hacer realidad tus ideas.
            </p>
            <p>
              <span role="img" aria-label="lightning">
              💻
              </span>{' '}
              Mi enfoque se centra en el desarrollo de aplicaciones robustas y escalables, utilizando las últimas tecnologías del stack MERN. Desde el diseño de la base de datos hasta la interfaz de usuario, me dedico a proporcionar soluciones completas que cumplan con tus requisitos y excedan tus expectativas.
            </p>
            <div className="typewriter">
              <p className="typewriter-start">
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{' '}
                Ademas..
              </p>
              <Typewriter
                options={{
                  strings: [
                    'Trabajo Aplicaciones Web y Móviles',
                    'Creo Landing Pages',
                    'Desarrollo de E-commerce con CMS',
                    'Creo Blogs y Portafolios',
                    'Trabajo con Node JS y Express',
                    'Desarrollo de API RESTful para Negocios',

                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>.</p>
            </div>
            <p>
            Explora mi portafolio para descubrir proyectos anteriores y la diversidad de habilidades que puedo aportar a tu próximo proyecto. Si estás listo para llevar tu presencia en línea al siguiente nivel, ¡contáctame hoy mismo!{' '}

            </p>
            <div className="location-wrapper">
              <svg
                className="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
              </svg>
              <p>Buenos Aires, Argentina!</p>
            </div>
          </div>
        </Fade>

      </div>
    </Section>
  )
}

export default About

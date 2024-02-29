import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p className="copyright">
        Tomas Steven - &copy;{' '}{new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer

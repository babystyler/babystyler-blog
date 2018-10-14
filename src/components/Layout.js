import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../sass/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Babystyler.com" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper

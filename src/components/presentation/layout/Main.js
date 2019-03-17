import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Main = ({ customer, nav, children, logout }) => (
  <div className="main">
    <Header />
    <section className="content">{children}</section>
    <Footer />
  </div>
)

export default Main

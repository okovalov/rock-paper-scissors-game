import React , { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Main = ({ customer, nav, children, logout }) => (
  <Fragment>
    <Header />
    <Link to="/">
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container is-fluid">
            <h1 className="title">
              Rock, Paper, Scissors
            </h1>
            <h2 className="subtitle">
              aka "TheGame"
            </h2>
          </div>
        </div>
      </section>
    </Link>
    {children}
    <Footer />
  </Fragment>
)

export default Main

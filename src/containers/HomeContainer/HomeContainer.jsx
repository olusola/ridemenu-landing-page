import React, { Component } from 'react'
import { Button, Container, Badge } from 'reactstrap'
import './homecontainer.css'
import logo from '../../assets/images/logo.png'

class HomeContainer extends Component {
  render() {
    return (
      <div className="homecontainer">
        <Container fluid>
          <header className="text-center my-5">
          <img src={logo} alt="Logo" width="50%"/>
          </header>
          <section className="text-center">
            <article className="text-white">
              <h2>
              First UK in-car vending box that provide passengers with snacks and daily essentials while riding.
              </h2>
            </article>
          </section>
          <section className="text-center m-4">
            <h1><Badge color="light">Are You a Driver?</Badge></h1>
            <article>
              <h2 className="text-white lead">
              Earn extra £50 on average monthly by offering product samples and essential items!
              </h2>
            </article>
            <Button className="my-4" color="primary" size="lg">Get Your Box Now!</Button>
          </section>
        </Container>
      </div>
    )
  }
}

export default HomeContainer

import React, { Component } from 'react'
import { Button, Container, Badge, Row, Col } from 'reactstrap'
import './homecontainer.css'
import logo from '../../assets/images/logo.png'

class HomeContainer extends Component {
  render() {
    return (
      <div className="homecontainer">
        <Container>
          <header className="text-center my-5">
          <img src={logo} alt="Logo" width="50%"/>
          </header>
          <section className="text-center">
            <article className="text-white">
              <h2>
              The first UK in-car vending box that provides passengers with snacks and daily essentials while riding.
              </h2>
            </article>
          </section>
          <section className=" text-center m-4">
            <h1><Badge color="light">Are You a Driver?</Badge></h1>
            <small className="text-light lead ">Uber, Black Cab, ViaVan, Others...</small>
            <article>
              <h3 className="text-white py-3">
              Earn at least £50 extra on average monthly by offering product samples and essential items!
              </h3>
              <Container className="my-4">
                <Row>
                  <Col md="4" xs="12" className="text-center text-white">
                    <h6>
                    &#9830; Free products and setup
                    </h6>
                  </Col>
                  <Col md="4" xs="12" className="text-center text-white">
                    <h6>
                    &#9830; Get commission from sales & product samples
                    </h6>
                  </Col>
                  <Col md="4" xs="12" className="text-center text-white">
                    <h6>
                    &#9830; Monthly Payouts
                    </h6>
                  </Col>
                </Row>
              </Container>
            </article>
            <Button href="https://oludotcom.typeform.com/to/aFABF1" tyle={{cursor: 'pointer'}} className=" p-3" color="primary" size="lg"><h3>Get Your Box Now!</h3></Button>
          </section>
        </Container>
      </div>
    )
  }
}

export default HomeContainer

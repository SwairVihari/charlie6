import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Styles from './Body.module.css'

const Body = () => {
  return (
    <>
    <Container>
        <h3 className={Styles.wave}>Hi There 👋 </h3>
        <h3 className={Styles.Question}>To start with, are you are a legal 
            <span className={Styles.Bold} > British Citizen </span> Or 
            <span className={Styles.Bold} > UK Resident? </span> 
        </h3>

        <Row className={Styles.OptionRow}>
            <Col lg={4} sm={10} className={Styles.Option}>
            <a target="_blank" href="https://www.google.com/">
            <div>
            YES
            </div>
            </a>
            </Col>

            <Col lg={4} sm={10} className={Styles.Option}>
            <a target="_blank" href="https://www.google.com/">
            <div>
            NO
            </div>
            </a>
            </Col>



        </Row>

        
    </Container>
    </>
  )
}

export default Body
import React from 'react'
import Styles from './Footer.module.css'
import {Container, Col, Row} from 'react-bootstrap'
const Footer = () => {
  return (

    <Container fluid={true} className={Styles.Container}>
        <Row>
            <Col>
           <p>
           The content of this website does not constitute financial advice and is provided for general information purposes only.
           </p>
            </Col>
        </Row>

        <hr/>

        <Row>
            <Col>
            Copyright © www.savesmarterdaily.com 2022 | 
            <a className={Styles.color} href='/terms'> Terms Of Service </a>
        | <a className={Styles.color} href='/policy'> Privacy Policy </a>
        | <a className={Styles.color} href='/contact'> Contact </a>
            </Col>
        </Row>
    </Container>
    
  )
}

export default Footer
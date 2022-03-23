import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Styles from "./Header.module.css"
import logo from "../images/logo.svg"
const Header = () => {
  return (
    <>
    <Container className={Styles.Header} fluid={true}>
    <div className={Styles.imgContainer}>
    <img className={Styles.img} src={logo}></img>
    </div>

    <Row className={Styles.RowText}>
        <Col className={Styles.TextContainer}>
            <h1 className={Styles.Texth1}>
                We've helped over
                 <span className={Styles.blue}> 3280 </span> 
                 people this week
            </h1>

            <h3>
                Are you eligible?
            </h3>

            <p className={Styles.TextP}>Simply complete the form below, it takes under 30 seconds to complete and is obligation-free. </p>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default Header
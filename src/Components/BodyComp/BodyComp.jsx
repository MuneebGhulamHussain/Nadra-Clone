import React from 'react'
import styles from "./BodyComp.module.css"
import { Container } from 'react-bootstrap'
import { Row, Col } from "react-bootstrap";


const BodyComp = () => {
    return (

        <>
            <Container >
                <h4 className={styles.heading4}>NADRA OUTLOOK</h4>
                <Row className={styles.customParentClass}>
                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.cardOne}>
                            <img src="src/assets/BodyImages/img1.svg" alt="" />
                            <div className={styles.forText}>
                                <h2 className="fw-bold">24,765+</h2>
                                <h5 className="fw-bold">Employees</h5>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.cardOne}>
                            <img src="src/assets/BodyImages/img2.svg" alt="" />
                            <div className={styles.forText}>
                                <h2 className="fw-bold">936</h2>
                                <h5 className="fw-bold">REGISTRATION CENTERS</h5>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.cardOne}>
                            <img src="src/assets/BodyImages/img3.svg" alt="" />
                            <div className={styles.forText}>
                                <h2 className="fw-bold">76</h2>
                                <h5 className="fw-bold">MANPACKS</h5>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.cardOne}>
                            <img src="src/assets/BodyImages/img4.svg" alt="" />
                            <div className={styles.forText}>
                                <h2 className="fw-bold">14</h2>
                                <h5 className="fw-bold">MEGA CENTERS</h5>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.cardOne}>
                            <img src="src/assets/BodyImages/img5.svg" alt="" />
                            <div className={styles.forText}>
                                <h2 className="fw-bold">233</h2>
                                <h5 className="fw-bold">MOBILE VANS</h5>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.cardOne}>
                            <img src="src/assets/BodyImages/img6.svg" alt="" />
                            <div className={styles.forText}>
                                <h2 className="fw-bold">3</h2>
                                <h5 className="fw-bold">DATA CENTERS</h5>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.cardOne}>
                            <img src="src/assets/BodyImages/img7.svg" alt="" />
                            <div className={styles.forText}>
                                <h2 className="fw-bold">28</h2>
                                <h5 className="fw-bold">BIKERS</h5>
                            </div>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.cardOne}>
                            <img src="src/assets/BodyImages/img8.svg" alt="" />
                            <div className={styles.forText}>
                                <h2 className="fw-bold">1,000+</h2>
                                <h5 className="fw-bold">SERVERS</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>



           



        </>
    )
}

export default BodyComp
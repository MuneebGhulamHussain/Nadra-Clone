import React from 'react'
import styles from "./ServiceComp.module.css"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


import {  Row, Col } from "react-bootstrap";


import img1 from "../../assets/ServiceCompImages/img1.svg"
import img2 from "../../assets/ServiceCompImages/img2.svg"
import img3 from "../../assets/ServiceCompImages/img3.svg"
import img4 from "../../assets/ServiceCompImages/img4.svg"
import img5 from "../../assets/ServiceCompImages/img5.svg"
import img6 from "../../assets/ServiceCompImages/img6.svg"
import img7 from "../../assets/ServiceCompImages/img7.svg"
import img8 from "../../assets/ServiceCompImages/img8.svg"


const ServiceComp = () => {
  return (

    <>
      <Container>

        <h3 className={styles.head3}>Our Services & Solutions</h3>
  <Row className={styles.serviceMainContainer}>
    <Col lg={3} md={6} sm={6} xs={12}>
    <div className={styles.serviceCard1}>
      <Link to="/service-1" className={styles.link}>
        <img src={img1} alt="" />
        <p>Integrated Security Management System</p>
      </Link>
    </div>
    </Col>

    <Col lg={3} md={6} sm={6} xs={12}>
    <div className={styles.serviceCard1}>
      <Link to="/service-2" className={styles.link}>
        <img src={img2} alt="" />
        <p>Secure Document Solution</p>
      </Link>
    </div>
    </Col>

    <Col lg={3} md={6} sm={6} xs={12}>
    <div className={styles.serviceCard1}>
      <Link to="/service-3" className={styles.link}>
        <img src={img3} alt="" />
        <p>e-Governance Solutions</p>
      </Link>
    </div>
    </Col>

    <Col lg={3} md={6} sm={6} xs={12}>
    <div  className={styles.serviceCard1}>
      <Link to="/service-4" className={styles.link}>
        <img src={img4} alt="" />
        <p>Financial Services Solutions</p>
      </Link>
      </div>
    </Col>

    <Col lg={3} md={6} sm={6} xs={12}>
    <div  className={styles.serviceCard1}>
      <Link to="/service-5" className={styles.link}>
        <img src={img5} alt="" />
        <p>Consultancy & Advisory Services</p>
      </Link>
      </div>
    </Col>

    <Col lg={3} md={6} sm={6} xs={12}>
    <div className={styles.serviceCard1}>
      <Link to="/service-6" className={styles.link}>
        <img src={img6} alt="" />
        <p>Enterprise Level Software Development</p>
      </Link>
      </div>
    </Col>

    <Col lg={3} md={6} sm={6} xs={12}>
    <div  className={styles.serviceCard1}>
      <Link to="/service-7" className={styles.link}>
        <img src={img7} alt="" />
        <p>System Integration, Development & Training</p>
      </Link>
      </div>
    </Col>

    <Col lg={3} md={6} sm={6} xs={12}>
    <div  className={styles.serviceCard1}>
      <Link to="/service-8" className={styles.link}>
        <img src={img8} alt="" />
        <p>Data Warehousing & Secure Document Production</p>
      </Link>
      </div>
    </Col>
  </Row>
</Container>
    </>
  )
}

export default ServiceComp

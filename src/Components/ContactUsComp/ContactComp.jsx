import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ContactComp.module.css"

import img1 from "../../assets/ContactCompImages/img1.svg"
import img2 from "../../assets/ContactCompImages/img2.svg"
import img3 from "../../assets/ContactCompImages/img3.svg"

const ContactComp = () => {
    return (
        <>
            <Container>
                <h4 className={styles.head4}>CONTACT US</h4>
                <p className={styles.para}>NADRA is at your service 24/7 and We would be delighted to comply on any query, suggestion or complaint you might have about NADRA services / products. Please choose one of the following way to approach us</p>

                <Row className={styles.mainParent}>

                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className={styles.childOne}>
                            <img src={img1} alt="" />
                            <div className={styles.forText}>
                                <h5>Address</h5>
                                <p>
                                    State Bank of Pakistan Building, Shahrah-i-Jamhuriat,
                                    G-5/2, Islamabad
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className={styles.childOne}>
                            <img src={img2} alt="" />
                            <div className={styles.forText}>
                                <h5>Call Us</h5>
                                <p>
                                    1777 (Mobile Users) <br /> +92 51 111 786 100
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={12} xs={12}>
                        <div className={styles.childOne}>
                            <img src={img3} alt="" />
                            <div className={styles.forText}>
                                <h5>Approach Us</h5>
                                <p>For query, suggestions and complaints</p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>


            {/* nadra map part starts here/ */}
            <Container>
                <div className={styles.mapMainParent}>
                    <div className={styles.mapChild1}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.515671074198!2d73.09236587441556!3d33.721479335125345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc07bbe4f5cd7%3A0xc4d06e70d5fd1f2a!2sNADRA%20Headquarters!5e0!3m2!1sen!2s!4v1766173812620!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.mapCustom}
                        />

                    </div>
                    <div className={styles.form}>
                <p className={styles.par}>Get In Touch</p>

                        <div className={styles.input1}>
                            <input type="text" placeholder='Your Name'/>
                            <input type="text" placeholder='Your Email'/>
                        </div>
                            <input type="number" placeholder='Your Number'/><br />
                            <textarea className={styles.textaraeclass} name="" id="" placeholder='Your Message'></textarea>
                            <button className={styles.btn}>Submit</button>
                    </div>
                </div>
            </Container>
            {/* nadra map part ends here/ */}


        </>
    )
}

export default ContactComp
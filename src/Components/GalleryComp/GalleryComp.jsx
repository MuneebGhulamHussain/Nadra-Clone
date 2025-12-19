import React from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col } from "react-bootstrap";

import styles from "./GalleryComp.module.css"


import galleyImg1 from "../../assets/GalleryCompImages/img1.webp"
import galleyImg2 from "../../assets/GalleryCompImages/gal2.webp"
import galleyImg3 from "../../assets/GalleryCompImages/gal3.webp"
import galleyImg4 from "../../assets/GalleryCompImages/gal4.webp"
import galleyImg5 from "../../assets/GalleryCompImages/gal5.webp"
import galleyImg6 from "../../assets/GalleryCompImages/gal6.webp"
import galleyImg7 from "../../assets/GalleryCompImages/gal7.webp"
import galleyImg8 from "../../assets/GalleryCompImages/gal8.webp"


import mediaCenterImg1 from "../../assets/GalleryCompImages/announcements.svg"
import mediaCenterImg2 from "../../assets/GalleryCompImages/downloads.svg"
import mediaCenterImg3 from "../../assets/GalleryCompImages/careers.svg"
import mediaCenterImg4 from "../../assets/GalleryCompImages/tenders.svg"



const GalleryComp = () => {
    return (
        <>
{/* gallery image part starts here */}
            <Container>

                <h4 className={styles.heading4}>GALLERY</h4>
                <div className={` ${styles.btn}`}>
                    <button >FEATURED PHOTOS</button>
                </div>

                <Row className="g-3 mt-4">

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src={galleyImg1}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src={galleyImg2}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src={galleyImg3}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src={galleyImg4}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src={galleyImg5}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src={galleyImg6}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src={galleyImg7}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src={galleyImg8}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                </Row>
            </Container>
{/* gallery image part ends here */}


<Container>
     <Row className="g-3 mt-4">

                   
    <h5 className={styles.heading5}>MEDIA CENTER</h5>                   

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.mediaCard1}>
                            <div className={styles.imgParent}>
                            <img
                                src={mediaCenterImg1}
                                alt=""
                                className="img-fluid"
                            />
                            </div>
                            <h5>ANNOUNCEMENTS</h5>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.mediaCard1}>
                            <div className={styles.imgParent}>
                            <img
                                src={mediaCenterImg2}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                            <h5>DOWNLOADS</h5>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.mediaCard1}>
                            <div className={styles.imgParent}>
                            <img
                                src={mediaCenterImg3}
                                alt=""
                                className="img-fluid"
                            />
                            </div>
                            <h5>CAREERS</h5>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.mediaCard1}>
                            <div className={styles.imgParent}>
                            <img
                                src={mediaCenterImg4}
                                alt=""
                                className="img-fluid"
                            />
                            </div>
                            <h5>TENDERS</h5>
                        </div>
                    </Col>

                </Row>
 </Container>



        </>
    )
}

export default GalleryComp
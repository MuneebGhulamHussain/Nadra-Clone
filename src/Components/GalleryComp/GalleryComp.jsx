import React from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col } from "react-bootstrap";

import styles from "./GalleryComp.module.css"

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
                                src="src/assets/GalleryCompImages/img1.webp"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src="src/assets/GalleryCompImages/gal2.webp"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src="src/assets/GalleryCompImages/gal3.webp"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src="src/assets/GalleryCompImages/gal4.webp"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src="src/assets/GalleryCompImages/gal5.webp"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src="src/assets/GalleryCompImages/gal6.webp"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src="src/assets/GalleryCompImages/gal7.webp"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={12}>
                        <div className={styles.imgCardOne}>
                            <img
                                src="src/assets/GalleryCompImages/gal8.webp"
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
                                src="src/assets/GalleryCompImages/announcements.svg"
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
                                src="src/assets/GalleryCompImages/downloads.svg"
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
                                src="src/assets/GalleryCompImages/careers.svg"
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
                                src="src/assets/GalleryCompImages/tenders.svg"
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
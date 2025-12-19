import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./SwipperSlider.module.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";



import image1 from "../../assets/SwipperSliderImages/img1.jfif"
import image2 from "../../assets/SwipperSliderImages/img2.jfif"
import image3 from "../../assets/SwipperSliderImages/img3.jfif"
import image4 from "../../assets/SwipperSliderImages/img4.jfif"




import addImage1 from "../../assets/SwipperSliderImages/add.png"
import addImage2 from "../../assets/SwipperSliderImages/add1.png"
import addImage3 from "../../assets/SwipperSliderImages/add2.png"


const products = [
    {
        image: image1,
        title: "Succession Certificate",
        // use any link you want use here
        link: "xyz link here",
        description: "In January 2021,NADRA introduced..."
    },
    {
        image: image2,
        title: "Family Registeration Certificate (FRC)",
        // use any link you want use here
        link: "xyz link here",
        description: "Family Registeration Certificate (FRC) is..."
    },
    {
        image: image3,
        title: "Child Registeration Certificate (CRC)",
        // use any link you want use here
        link: "xyz link here",
        description: "Child Registeration Certificate (CRC)..."
    },
    {
        image: image4,
        title: " National Identity Card For Overseas Pakistanis (NICOP)",
        // use any link you want use here
        link: "xyz link here",
        description: "National Identity Card For..."
    },
];

export default function ProductsSwiper() {
    return (

        <>
            <Container>
                <h4 className={styles.heading4}>NADRA PRODUCTS</h4>

                <div className={styles.forZindex}>


                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.card}>

                                    <Link > <img src={product.image} alt={product.title} className={styles.image} /></Link>
                                    <div className={styles.cardBody}>
                                        <h5 className={styles.title}>{product.title}</h5>
                                        <p className={styles.desc}>{product.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>

            </Container>



    <Container>
  <Row className={`g-3 ${styles.addParent}`}>
    <Col lg={4} md={4} sm={12}>
      <div className={styles.containerOne}>
        <img
          src={addImage1}
          alt=""
          className="img-fluid"
        />
      </div>
    </Col>

    <Col lg={4} md={4} sm={12}>
      <div className={styles.containerOne}>
        <img
          src={addImage2}
          alt=""
          className="img-fluid"
        />
      </div>
    </Col>

    <Col lg={4} md={4} sm={12}>
      <div className={styles.containerOne}>
        <img
          src={addImage3}
          alt=""
          className="img-fluid"
        />
      </div>
    </Col>
  </Row>
</Container>


        </>
    );
}

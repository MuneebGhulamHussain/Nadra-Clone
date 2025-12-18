import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from "./Courosel.module.css"
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const CouroselComp = () => {
    return (
        <>
            <div>

                <Carousel className={styles.customParent}>
                    <Carousel.Item interval={1000}>
                        <img src="src/assets/CouroselImages/image1.webp" alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img src="src/assets/CouroselImages/img2.webp" alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img src="src/assets/CouroselImages/image3.webp" alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img src="src/assets/CouroselImages/image4.webp" alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img src="src/assets/CouroselImages/image5.webp" alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img src="src/assets/CouroselImages/image6.webp" alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>




            {/* marqueue code starts here */}
<div className={styles.marquee}>
  <div className={styles["marquee-content"]}>
    <p>Somalia to launch Civil Registration and Vital Statistics System with support of NADRA</p>
    <p>NADRA Hosts Consultative Conference on Upgradation of Biometric & Verification.</p>
    <p><strong>WE ARE HIRING :</strong> For more information, please click here</p>
    <p><strong>NADRA Tenders :</strong> For more information, please click here</p>

    {/* Duplicate content for seamless loop */}
    <p>Somalia to launch Civil Registration and Vital Statistics System with support of NADRA</p>
    <p>NADRA Hosts Consultative Conference on Upgradation of Biometric & Verification.</p>
    <p><strong>WE ARE HIRING :</strong> For more information, please click here</p>
    <p><strong>NADRA Tenders :</strong> For more information, please click here</p>
  </div>
</div>



            {/* marqueue code ends here */}

        </>
    )
}

export default CouroselComp
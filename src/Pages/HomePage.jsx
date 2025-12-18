import React from 'react'
import TopHeader from '../Components/TopHeader/TopHeader'
import Container from 'react-bootstrap/Container';
import NavbarCustom from '../Components/Navbar/NavbarCustom';
import CouroselComp from '../Components/Courosel/CouroselComp';
import BodyComp from '../Components/BodyComp/BodyComp';
import styles from "./HomePage.module.css"
import ProductsSwiper from '../Components/SwipperSliderComp/SwipperSlider';
import GalleryComp from '../Components/GalleryComp/GalleryComp';
import FooterComp from '../Components/FooterComp/FooterComp';

const HomePage = () => {
    return (
        <div >
            <div className={styles.navBarParent}>
                <TopHeader />
                <NavbarCustom />
            </div>
            <CouroselComp />
            <BodyComp />
            <ProductsSwiper/>
            <GalleryComp/>
            <FooterComp/>
        </div>
    )
}

export default HomePage
import React from 'react'
import TopHeader from '../../Components/TopHeader/TopHeader'
import NavbarCustom from '../../Components/Navbar/NavbarCustom'
import FooterComp from '../../Components/FooterComp/FooterComp'
import AboutComp from '../../Components/AboutNadra/AboutComp'
import ServiceComp from '../../Components/About(Service)/ServiceComp'
import styles from "./About.module.css"
// import AboutComp from '../../Components/AboutNadra/AboutComp'

const About = () => {
  return (
    <div>
         <div className={styles.navBarParent}>
        <TopHeader/>
        <NavbarCustom/>
        </div>
        <AboutComp/>
        <ServiceComp/>
        <FooterComp/>
    </div>
  )
}

export default About
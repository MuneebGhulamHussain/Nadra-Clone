import React from 'react'
import TopHeader from '../../Components/TopHeader/TopHeader'
import NavbarCustom from '../../Components/Navbar/NavbarCustom'
import styles from "./DigitalIdentity.module.css"
import FooterComp from '../../Components/FooterComp/FooterComp'
import DigitalCompOne from '../../Components/DigitalComp1/DigitalCompOne'


const DigitalIdentity = () => {
    return (
        <div>
            <div className={styles.navBarParent}>
                <TopHeader />
                <NavbarCustom />
            </div>
            <DigitalCompOne/>
               <FooterComp/>
        </div>
    )
}

export default DigitalIdentity
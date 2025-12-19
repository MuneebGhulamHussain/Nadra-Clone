import React from 'react'
import TopHeader from '../../Components/TopHeader/TopHeader'
import NavbarCustom from '../../Components/Navbar/NavbarCustom'
import FooterComp from '../../Components/FooterComp/FooterComp'

import styles from "./ContactUs.module.css"
import ContactComp from '../../Components/ContactUsComp/ContactComp'

const ContactUs = () => {
  return (
       <div>
         <div className={styles.navBarParent}>
        <TopHeader/>
        <NavbarCustom/>
        </div>
        <ContactComp/>
        <FooterComp/>
    </div>
  )
}

export default ContactUs
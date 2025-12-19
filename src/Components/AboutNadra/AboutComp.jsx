import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "./AboutComp.module.css"


import aboutImage from "../../assets/AboutNadraImages/aboutus_graphics.webp"


const AboutComp = () => {
    return (
        <>
            <Container>
                <div className={styles.aboutMainParent}>
                    <div className={styles.image}>
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>About Nadra</h3>
                        <p><strong>National Database and Registration Authority (NADRA)</strong> was established as National Database Organization (NDO), an attached department under the Ministry of Interior, Government of Pakistan in 1998. On 10 March, 2000, NDO & Directorate General of Registration (DGR) merged to form NADRA; an independent corporate body with requisite autonomy to operate independently and facilitate good governance. National Database & Registration Authority (NADRA) has gained international recognition for its success in providing solutions for identification, e-governance and secure documents that deliver multi-pronged goals of mitigating identity theft; safe-guarding the interests of our clients and facilitating the public.</p>
                        <p>NADRA set out on the journey of Civil Registration of all Pakistanis in March 2000 and in a short span of time NADRA’s team indigenously created a state of the art centralized Data Warehouse, Network Infrastructure and Interactive Data Acquisition Systems to issue secure National Identity Cards (NIC). With the introduction of this new fool-proof, comprehensive and highly sophisticated computerized system; NADRA has been successful in mitigating risk of identity theft.</p>
                    </div>
                </div>
            </Container>



            {/* about us second part starts here */}
<Container>
            <div className={styles.aboutSecondPart}>
                <div className={styles.aboutSecondPartChild1}>
                    <p className={styles.editPara}>One Of The World’s Largest Multi Biometric National Identity Database</p>
                </div>
                <div className={styles.aboutSecondPartChild2}>
                    <div className={styles.innerNumbers}>
                        <h2>25</h2>
                        <p>Years of Experience</p>
                    </div>
                    <div className={styles.innerNumbers}>
                        <h2>136,000</h2>
                        <p >Daily Registrations and Processings</p>
                    </div>
                </div>
                <div className={styles.aboutSecondPartChild2}>
                    <div className={styles.innerNumbers}>
                        <h2>209+</h2>
                        <p>Million Registrations</p>
                    </div>
                    <div className={styles.innerNumbers}>
                        <h2>1.3+</h2>
                        <p>Billion Finger Prints</p>
                    </div>
                </div>
            </div>
</Container>
            {/* about us second part starts here */}
        </>
    )
}

export default AboutComp
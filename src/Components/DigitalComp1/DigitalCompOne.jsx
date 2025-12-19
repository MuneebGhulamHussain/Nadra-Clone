import React from 'react'
import styles from "./DigitalCompOne.module.css"
import { Container } from 'react-bootstrap'

import image1 from "../../assets/DigitalCompImages/playstore-btn.png"
import image2 from "../../assets/DigitalCompImages/applestore-btn.png"
import hero from "../../assets/DigitalCompImages/Hero_img.webp"
import identity from "../../assets/DigitalCompImages/identity.png"
import NDEL from "../../assets/DigitalCompImages/NDEL.png"


const DigitalCompOne = () => {
    return (

        <>
            <div className={styles.mainParent}>
                <Container>

                <div className={styles.forFlex}>
                    <div className={styles.cardOneParent}>
                        <h1><span>Your</span> Digital Identity, Key to the Digital Pakistan</h1>
                        <p>Pakistan’s secure, inclusive, and citizen-first digital identity platform</p>
                        <div className={styles.imgSec}>
                            <img src={image1} alt="" />
                            <img src={image2} alt="" />
                        </div>
                    </div>
                    <div className={styles.cardTwoParent}>
                        <img src={hero} alt="" />
                    </div>
                </div>
                </Container>
            </div>




        {/* Digital Part 2 code starts here */}

               <div className={styles.mainParentTwo}>
                <Container>

                <div className={styles.forFlexTwo}>
                    <div className={styles.cardOneParentPartTwo}>
                        <div className={styles.forImg}>
                            <img src={identity} alt="" />
                            <div className={styles.forText}>
                                <p>Ecosystem for</p>
                                <h6>Digital Identity</h6>
                            </div>
                        </div>
                        <div className={styles.forListinf}>
                            <ul>
                                <li className={styles.specList}>NADRA is building a secure Digital ID to verify your identity & access digital documents.</li>
                                <li>Enable secure and trusted identification and authentication of individuals</li>
                                <li>Facilitate access to public and private digital services</li>
                                <li>Ensure privacy, consent, and data protection in digital interactions</li>
                            </ul>
                        </div>
                    </div>


                    
                    <div className={`${styles.cardOneParentPartTwo} ${styles.cardOneParentPartTwoOther}`}>
                        <div className={ `${styles.forImg} ${styles.otherImg}`} >
                            <img src={NDEL} alt="" />
                            <div className={`${styles.forText} ${styles.forText2}`}>
                                <p>Design and Establishment of a</p>
                                <h6>National Data Exchange Layer (NDEL)</h6>
                            </div>
                        </div>
                        <div className={styles.forListinf}>
                            <ul>
                                <li className={styles.specList}>NDEL is a secure, standardized API platform for seamless and controlled data sharing across organizations</li>
                                <li>Enable secure and interoperable data exchange</li>
                                <li>Standardize APIs and governance across entities</li>
                                <li>Improved public service through verified data</li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
                </Container>
            </div>
        {/* Digital Part 2 code ennds here */}




        {/* Digital Part 3 code starts here */}

            <Container>
                <h1 className={styles.head1}>KEY FEATURES OF DIGITAL ID & NDEL</h1>
            </Container>

        {/* Digital Part 3 code ends here */}




        </>
    )
}

export default DigitalCompOne
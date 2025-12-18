import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "./FooterComp.module.css"
import { Link } from 'react-router-dom'

const FooterComp = () => {
    return (
        <div className={styles.footerGrandPrent}>
            <Container>

                <div className={styles.footerParent}>
                    <div className={styles.footerDivOne}>
                            <h6 className={styles.head6}>Products</h6>
                            <Link className={styles.linkClass}>Succession Certificate</Link>
                            <Link className={styles.linkClass}>Family Registeration Certificate (FRC)</Link>
                            <Link className={styles.linkClass}>Child Registeration Certificate (CRC)</Link>
                            <Link className={styles.linkClass}>National Identity Card For Overseas Paksitani (NICOP)</Link>
                            <Link className={styles.linkClass}>Cancellation Certificate</Link>
                            <Link className={styles.linkClass}>Pakistan Origin Card (POC)</Link>
                            <Link className={styles.linkClass}>Juvenile Card</Link>
                            <Link className={styles.linkClass}>Computerized National Identity Card</Link>
                            <Link className={styles.linkClassLast}>Show All Products</Link>
                     </div>

                    <div className={styles.footerDivOne}>
                            <h6 className={styles.head6}>Downloads</h6>  
                            <Link className={styles.linkClass}>Intruder Performa</Link>
                            <Link className={styles.linkClass}>Power of Attorney</Link>
                            <Link className={styles.linkClass}>Clearance Performa</Link>
                            <Link className={styles.linkClass}>POC Complete Form With Instruction</Link>
                            <Link className={styles.linkClass}>NICOP Complete Form With Instruction</Link>
                            <Link className={styles.linkClass}>NADRA Services Charter 1.0.0</Link>
                            <Link className={styles.linkClassLast}>Show All Downloads</Link>
                    </div>  
                    <div className={styles.footerDivOne}>
                        
                            <h6 className={styles.head6}>Products</h6>   
                            <Link className={styles.linkClass}>NR & BP Framework</Link>
                            <Link className={styles.linkClass}>Right to Information (RTI)</Link>
                            <Link className={styles.linkClass}>NADRA Tenders </Link>
                            <Link className={styles.linkClass}>NADRA Locations</Link>
                            <Link className={styles.linkClass}>Downloads</Link>
                            <Link className={styles.linkClass}>Complaints</Link>
                            <Link className={styles.linkClass}>Overseas Pakistanis Grievance</Link>
                            <Link className={styles.linkClass}>Careers</Link>
                            <Link className={styles.linkClass}>Digital Idnetity FAQ'S</Link>
                            <Link className={styles.linkClassLast}>Special Investment Facilitaion Council</Link>
                        
                    </div> 

                    <div className={`${styles.footerDivOne} ${styles.footerDivOneExtra}`}>
                           <h6 className={styles.head6}>Contact US</h6>
                           <p className={styles.paraQuery}>For general question to NADRA, please contact our public inquiry service.</p>   

                           <div className={styles.queryParent}>
                           <div className={styles.query}>
                                <img src="src/assets/FooterCompImages/footer_timing.svg" alt="" />
                                <p>Timings: 24/7</p>
                           </div>
                           <div className={styles.query}>
                                <img src="src/assets/FooterCompImages/footer_mobile.svg" alt="" />
                                <p>Mobile: 1777</p>
                           </div>
                           <div className={styles.query}>
                                <img src="src/assets/FooterCompImages/footer_landline.svg" alt="" />
                                <p>+92 51 111 786 100</p>
                           </div>
                           <div className={styles.query}>
                                <img src="src/assets/FooterCompImages/footer_email.svg" alt="" />
                                 <p> csd@nadra.gov.pk</p>
                           </div>
                        </div>

                    <div className={`${styles.socialMedia}`}>
                        <p>Follow Us</p>
                        <img src="src/assets/FooterCompImages/footer_fb.svg" alt="" />
                        <img src="src/assets/FooterCompImages/footer_x.svg" alt="" />
                        <img src="src/assets/FooterCompImages/footer_instagram.svg" alt="" />
                        <img src="src/assets/FooterCompImages/footer_youtube.svg" alt="" />
                        <img src="src/assets/FooterCompImages/footer_whatsapp.svg" alt="" />
                    </div>

                    </div>
                </div>

            </Container>


            <Container>
                <div className={styles.mainParentFooterLast}>
                    <div className={styles.footerLastDivOne}>
                      <p>Copyright © 2025 NADRA. All Rights Reserved</p>  
                    </div>
                    <div className={styles.footerLastDivOne}>
                        <p>Version 2.2.3 (Dated: 19/11/2025)</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FooterComp
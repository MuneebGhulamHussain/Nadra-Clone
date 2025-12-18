import React from 'react'
import styles from "./TopHeader.module.css"
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Container } from 'react-bootstrap';



import facebook from "../assets/HeaderImages/facebook.svg";
import twitter from "../assets/HeaderImages/twitter.svg";
import instagram from "../assets/HeaderImages/instagram.svg";
import youtube from "../assets/HeaderImages/footer_youtube.svg";
import whatsapp from "../assets/HeaderImages/footer_whatsapp.png";

const TopHeader = () => {
    return (
        <Container>
            <div className={styles.mainParent}>
                <div className={styles.firstParent}>
                    <div className={styles.firsthone}>
                        <p> <CallIcon fontSize="x-small" /> +1234567890</p>
                    </div>
                    <div className={styles.firsthone}>
                        <p> | </p>
                    </div>
                    <div className={styles.firsthone}>
                        <p> <MailIcon fontSize="x-small" /> nadra@gmail.com</p>
                    </div>

                </div>
                <div className={styles.secondParent}>
                    <div className={styles.iconOne}>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                        <img src={youtube} alt="" />
                        <img src={whatsapp} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default TopHeader
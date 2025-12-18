import React from 'react'
import styles from "./TopHeader.module.css"
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import { Container } from 'react-bootstrap';

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
                        <img src="src/assets/HeaderImages/facebook.svg" alt="" />
                        <img src="src/assets/HeaderImages/twitter.svg" alt="" />
                        <img src="src/assets/HeaderImages/instagram.svg" alt="" />
                        <img src="src/assets/HeaderImages/footer_youtube.svg" alt="" />
                        <img src="src/assets/HeaderImages/footer_whatsapp.png" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default TopHeader
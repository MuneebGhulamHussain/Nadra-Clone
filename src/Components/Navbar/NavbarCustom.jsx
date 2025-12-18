import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import styles from "./Navbar.module.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const NavbarCustom = () => {


  const [home, setHome] = useState("Home")
  const [AboutNadra, setAboutNadra] = useState("About Nadra")
  const [pakIdentity, setPakIdentity] = useState("Pak Identity")
  const [laws, setLaws] = useState("Laws")
  const [Products, setProducts] = useState("Products")
  const [officeAndMRVs, setofficeAndMRVs] = useState("office & MRVs")
  const [Complaints, setComplaints] = useState("Complaints")
  const [projects, setProjects] = useState("Projects")
  const [SIFC, setSIFC] = useState("SIFC")
  const [career, setCareer] = useState("Career")
  const [media, setMedia] = useState("Media")
  const [Statistics, setStatistics] = useState("Statistics")
  const [Contact, setContact] = useState("Contact Us")


  const [toggle, setToggle] = useState("urdu")

  const changeState = () => {

    if (toggle === "urdu") {



      setHome("ہوم");
      setAboutNadra("نادرا کے بارے میں");
      setPakIdentity("پاکستانی شناخت");
      setLaws("قوانین");
      setProducts("مصنوعات");
      setofficeAndMRVs("دفاتر اور MRVs");
      setComplaints("شکایات");
      setProjects("پروجیکٹس");
      setSIFC("SIFC"); // agar acronym hai to same rehne do
      setCareer("کیریئر");
      setMedia("میڈیا");
      setStatistics("شماریات");
      setContact("ہم سے رابطہ کریں");

      setToggle("English")

    } else {
      setHome("Home");
      setAboutNadra("About Nadra");
      setPakIdentity("Pak Identity");
      setLaws("Laws");
      setProducts("Products");
      setofficeAndMRVs("Office & MRVs");
      setComplaints("Complaints");
      setProjects("Projects");
      setSIFC("SIFC");
      setCareer("Career");
      setMedia("Media");
      setStatistics("Statistics");
      setContact("Contact Us");

      setToggle("urdu")
    }
  }


  return (
    <>
      <Container>

        {/* navbar top part starts here */}

        <div className={styles.navBarTopPartParent}>
          <div className={styles.forImage}>
            <img src="src/assets/HeaderImages/nadra_logo.svg" alt="" />
          </div>

          <div className={styles.forText}>
            <h6>NATIONAL DATABASE AND REGISTERATION AUTHORITY</h6>
            <p>Ministery or Interior and Narcostics Control,Government of Pakistan</p>
          </div>
        </div>
      </Container>
      {/* navbar top ends here */}



      {/* bootstrap navbar starts here */}

      <Navbar expand="lg" className={styles.customNavbarParent}>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Nav className="me-auto">
              {/* //use your routing path in this "to" tag              */}
              <Nav.Link className="text-white " as={Link} to={"/"}>{home}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{AboutNadra}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{pakIdentity}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{laws}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{Products}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{officeAndMRVs}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{Complaints}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{projects}</Nav.Link>
              <Nav.Link style={{ color: "#006600" }} className={`fw-bold ${styles.specialLink}`} as={Link} to={"/"}>{SIFC}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{career}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{media}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{Statistics}</Nav.Link>
              <Nav.Link className="text-white " as={Link} to={"/"}>{Contact}</Nav.Link>
              <button onClick={changeState} className={styles.customButton}>{toggle === "urdu" ? "اردو" : "English"}</button>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>

      {/* bootstrap navbar end here */}

      

    </>
  )
}

export default NavbarCustom

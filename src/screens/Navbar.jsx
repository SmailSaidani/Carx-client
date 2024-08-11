import React, { useState, useEffect, useRef } from 'react'
import coverbg from "../assets/largecover.jpg";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBInput,
  MDBCardHeader,
  MDBIcon,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from "../assets/logo.png";
import logodark from "../assets/logodark.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import car from "../assets/car.png";
import minivan from "../assets/minibus.png";
import van from "../assets/van.png";
import prestige from "../assets/sportscar.png";
import carinv from "../assets/carinv.png";
import "../App.css";
import { Grid } from "@mui/material";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import adventure from "../assets/adventure.jpg";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DatePicker } from "@mui/x-date-pickers";

import para1 from "../assets/para1.jpg";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import {
  ArrowForwardIosOutlined,
  BuildCircle,
  ContactPhoneOutlined,
  EmojiEvents,
  Favorite,
  Filter1,
  Filter2,
  Filter3,
  Filter4,
  FilterList,
  LocalGasStation,
  LocalOfferOutlined,
  LocationOffOutlined,
  LocationOnOutlined,
  Logout,
  Looks3,
  Looks4,
  LooksOne,
  LooksTwo,
  PeopleAlt,
  SensorDoor,
} from "@mui/icons-material";
import { Parallax } from "react-parallax";
import ReactCardCarousel from "react-card-carousel";

import car3d from "../assets/car3d.png";
import car1 from "../assets/bmw-m5.jpg";
import car2 from "../assets/ferrari-enzo.jpg";

import car3 from "../assets/ford-raptor.jpg";
import car4 from "../assets/jeep-renegade.jpg";
import car5 from "../assets/mini-cooper.jpg";
import car6 from "../assets/vw-polo.jpg";
import Build from "react-card-carousel";

import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from "../actions/auth";
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#21BF18",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#21BF18",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const steps = [
  "Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination.",
  "Create an ad group",
  "Create an ad",
  "Create an ad",
];
function Navb({auth:{isAuthenticated , loading},logout}) {


    const [showNav, setShowNav] = useState(false);
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50;
        if (navRef.current !== show) {
          setNavBackground(show);
        }
      };
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const ref = useRef();
  
    //handling hover
    const [isShown, setIsShown] = useState(false);
    console.log(isShown);
    //handling inputs
    const [endroit1, setEndroit1] = useState("");
  
    //date time
    const [datedebut, setDateDeb] = useState("");
  
    //styling stepper
    const StepOneIcon = () => {
      return (
        <Filter1 color="#21BF18" sx={{ fontSize: "40px", color: "#21BF18" }} />
      );
    };
  
    const StepTwoIcon = () => {
      return (
        <Filter2 color="#21BF18" sx={{ fontSize: "40px", color: "#21BF18" }} />
      );
    };
  
    const StepThreeIcon = () => {
      return (
        <Filter3 color="#21BF18" sx={{ fontSize: "40px", color: "#21BF18" }} />
      );
    };
    const StepFourIcon = () => {
      return (
        <Filter4 color="#21BF18" sx={{ fontSize: "40px", color: "#21BF18" }} />
      );
    };
  
    //card styiling
  
   const Connected = (
    <Nav>
    
  
    <Nav.Link>
      <Button onClick={()=>{logout()}} variant="outline-success"> <Logout /> Logout</Button>{" "}
    </Nav.Link>
  </Nav>
   );
   const NotConnected= (
    <Nav>
    <Nav.Link eventKey={2} href="#memes">
      {navBackground ? (
        <Button variant="outline-dark">Sign up</Button>
      ) : (
        <Button variant="outline-light">Sign up</Button>
      )}
    </Nav.Link>
  
    <Nav.Link>
      <Button  variant="outline-success">Login</Button>{" "}
    </Nav.Link>
  </Nav>
    
   )


   
  return (
    <div>
            <Navbar
        collapseOnSelect
        dark
        expand="sm"
        fixed="top"
        className="shadow-sm"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "white" : "transparent",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <p
              className="text-green-600 font-bold  mt-2 headm font-face-gm"
              style={{ fontSize: "2vw" }}
            >
              <img
                src={navBackground ? logodark : logo}
                style={{ width: "80px", height: "80px", marginRight: "2%" }}
              />
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{color:"#252525"}}>  <FilterList sx={{fontSize:"30px"}} />   </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" style={{color:"red"}}>
            <Nav className="me-auto">
              <Nav.Link href="/shop" className="text-green-500">
                <p
                  className=" text-xl mt-2"
                  style={{
                    transition: "1s ease",
                    color: navBackground ? "black" : "white",
                  }}
                >
                  Our Products
                </p>
              </Nav.Link>
              <Nav.Link href="/shop">
                <p
                  className=" text-xl mt-2"
                  style={{
                    transition: "1s ease",
                    color: navBackground ? "black" : "white",
                  }}
                >
                  Pricing
                </p>
              </Nav.Link>
            </Nav>


             {!loading && (
              <>
          {isAuthenticated == true && (
            Connected 
          )}


            {isAuthenticated == false && (
                NotConnected
              )}


            </>
             )}     
       
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

Navb.propTypes={
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
  }
  
  const mapStateToProps=state=>({
  auth: state.auth
  });
  
  export default  connect (mapStateToProps, {logout})(Navb);

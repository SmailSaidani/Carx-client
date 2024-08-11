import React, { useState, useEffect, useRef } from "react";
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
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import { Grid, Slider } from "@mui/material";
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
  AttachMoney,
  BuildCircle,
  Check,
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
  Looks3,
  Looks4,
  LooksOne,
  LooksTwo,
  Money,
  PeopleAlt,
  SensorDoor,
} from "@mui/icons-material";
import { Parallax } from "react-parallax";
import ReactCardCarousel from "react-card-carousel";
import car1 from "../assets/bmw-m5.jpg";
import cardcover from "../assets/fddlog.jpg";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import MuiInput from "@mui/material/Input";
import VolumeUp from "@mui/icons-material/VolumeUp";

import car2 from "../assets/ferrari-enzo.jpg";

import car3 from "../assets/ford-raptor.jpg";
import car4 from "../assets/jeep-renegade.jpg";
import car5 from "../assets/mini-cooper.jpg";
import car6 from "../assets/vw-polo.jpg";

import car7 from "../assets/hyundai-staria.jpg";

import ImageGallery from "react-image-gallery";

import Carousel from "react-bootstrap/Carousel";
import axios from "axios"

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import  {login}  from "../actions/auth";
import { useNavigate } from "react-router-dom";


const  Login =({ login,isAuthenticated })=> {
 const  navigate = useNavigate();
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
  //getting log in details 




  const [loogin , setLogin]=useState({
    email:"",
    password:""
  })



 
  const SubmitLogin =async e=> {
    e.preventDefault();
    const email = loogin.email
    const password= loogin.password
    console.log("email : ",email, "pass",password)
    login(email ,password)
  }


  if (isAuthenticated){
    console.log("hellllllllll")
     navigate('/profile')
  }
  
  console.log(isAuthenticated)
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
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ color: "#252525" }}
          >
            {" "}
            <FilterList sx={{ fontSize: "30px" }} />{" "}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" style={{ color: "red" }}>
            <Nav className="me-auto">
              <Nav.Link href="#features" className="text-green-500">
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
              <Nav.Link href="#pricing">
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
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                {navBackground ? (
                  <Button variant="outline-dark">Sign up</Button>
                ) : (
                  <Button variant="outline-light">Sign up</Button>
                )}
              </Nav.Link>

              <Nav.Link>
                <Button variant="outline-success">Login</Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        class="bg-image cardHeight"
        style={{
          backgroundImage: `url(${cardcover})`,
          textAlign: "center",
          justifyContent: "center",
          width:"100%",
          height:"1000px"
        }}
      >
          <MDBContainer fluid style={{marginTop:"10%"}}> 

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
        <img src={logo}  style={{width:"40%"}}/>
        <h2 style={{marginTop:"-10%"}} className="fw-bold  mb-4 text-uppercase">Login</h2>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"  onChange={(e)=>{setLogin({...loogin, email:e.target.value});console.log(loogin.email)}}/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>{setLogin({...loogin, password:e.target.value})}}/>

        <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
        <MDBBtn outline className='mx-2 px-5' color='success' size='lg'  onClick={(e)=>{SubmitLogin(e)}}>
          Login
        </MDBBtn>

        <div className='d-flex flex-row mt-3 mb-5'>
          <MDBBtn tag='a' color='none' className='m-3' style={{ color: '#21BF18' }}>
            <MDBIcon fab icon='facebook-f' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: '#21BF18' }}>
            <MDBIcon fab icon='twitter' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: '#21BF18' }}>
            <MDBIcon fab icon='google' size="lg"/>
          </MDBBtn>
        </div>

        <div>
          <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

        </div>
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
      </div>

  
    </div>
  );
}


const mapStateToProps = state=>({
  isAuthenticated:state.auth.isAuthenticated
})

Login.propTypes ={
  login :PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,

}

export default connect(mapStateToProps , { login })(Login);

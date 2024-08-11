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
  MDBCheckbox,
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

import axios from "axios";
import {
  getAuth,
  signInWithCustomToken,
  onAuthStateChanged,
} from "firebase/auth";
import { signupUser } from "../firebase";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";

import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Registration = ({setAlert, register,isAuthenticated})=> {
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

  //handling data

  const [registration, setReg] = useState({
    username: "",
    email: "",
    password: "",
    passwordconf: "",
  });

  console.log(registration);

  const handleName = (e) => {
    setReg({ username: e.target.value });
    console.log(registration.username);
  };

  //handle registration
  const [error, setError] = useState(false);
  const [passmismatch, setPassm] = useState(false);
  const handlesubmit = async () => {
    
    if (
      registration.username != "" &&
      registration.email != "" &&
      registration.password != "" &&
      registration.passwordconf != ""
    ) {
      if (registration.password != registration.passwordconf) {
        setError(false);
        setPassm(true);
        setAlert("password mismatch", "danger");
      } else {
        setPassm(false);
        setError(false);
        const name = registration.username;
        const email = registration.email;
        const password = registration.password;
        const newUser = {
          name,
          email,
          password,
        };



        register({name, email , password})

 
      }
    } else {
      setError(true);
    }
  };

  const navigate=useNavigate()
  useEffect(()=>{
    if (isAuthenticated){
      console.log("hellllllllll")
       navigate('/profile')
    }
  })

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user.stsTokenManager.accessToken);
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
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
          width: "100%",
          height: "1000px",
        }}
      >
        <MDBContainer fluid style={{ width: "30%", marginTop: "15%" }}>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="12"
                  lg="12"
                  xs="12"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <img src={logodark} style={{ width: "40%" }} />

                  <h3
                    classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 "
                    style={{ marginTop: "-10%" }}
                  >
                    Sign up
                  </h3>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon
                      fas
                      icon="user me-3"
                      size="lg"
                      style={{ color: "#053d75" }}
                    />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      type="text"
                      className="w-100"
                      value={registration.username}
                      onChange={(e) => {
                        setReg({ ...registration, username: e.target.value });
                      }}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon
                      fas
                      icon="envelope me-3"
                      size="lg"
                      style={{ color: "#053d75" }}
                    />
                    <MDBInput
                      label="Your Email"
                      id="form2"
                      type="email"
                      onChange={(e) => {
                        setReg({ ...registration, email: e.target.value });
                      }}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon
                      fas
                      icon="lock me-3"
                      size="lg"
                      style={{ color: "#053d75" }}
                    />
                    <MDBInput
                      label="Password"
                      id="form3"
                      type="password"
                      onChange={(e) => {
                        setReg({ ...registration, password: e.target.value });
                      }}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon
                      fas
                      icon="key me-3"
                      size="lg"
                      style={{ color: "#053d75" }}
                    />
                    <MDBInput
                      label="Repeat your password"
                      id="form4"
                      type="password"
                      onChange={(e) => {
                        setReg({
                          ...registration,
                          passwordconf: e.target.value,
                        });
                      }}
                    />
                  </div>

                  {error == true && (
                    <div className="d-flex flex-row align-items-center mb-4">
                      <p style={{ fontWeight: "bold", color: "red" }}>
                        Remplir tout les champs
                      </p>
                    </div>
                  )}
                  {passmismatch == true && (
                    <div className="d-flex flex-row align-items-center mb-4">
                      <p style={{ fontWeight: "bold", color: "red" }}>
                        les mots de passes ne correspendent pas
                      </p>
                    </div>
                  )}

                  <MDBBtn
                    className="mb-4 "
                    size="lg"
                    style={{
                      backgroundColor: "#21BF18",
                      width: "50%",
                      color: "#141414",
                    }}
                    onClick={() => {
                      handlesubmit();
                    }}
                  >
                    Register
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  );
};

const mapStateToProps = state=>({
  isAuthenticated:state.auth.isAuthenticated
})

Registration.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,

}

export default connect(mapStateToProps, { setAlert,register })(Registration);

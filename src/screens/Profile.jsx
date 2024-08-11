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
  MDBTypography,
  MDBProgress,
  MDBProgressBar,
  MDBListGroupItem,
  MDBListGroup,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRipple,
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
import cardcover from "../assets/profile.jpg";

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
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from "../actions/auth";
import auth from "../reducers/auth";




function Profile({auth:{ isAuthenticated , loading, user},logout}) {
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

  //gallery
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  //carousel
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };



    //handling inputs
    const [endroit1, setEndroit1] = useState("");

    //date time
    const [datedebut, setDateDeb] = useState("");
    console.log(user)
  return (

    <div>
          {loading == false && (
            <>
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
        }}
      >
        <h1
          className="mgup"
          style={{
            fontFamily: " 'Bebas Neue', sans-serif",
            color: "#FEFFFE",
            fontSize: "7vh",
            textAlign: "center",
          }}
        >
          Profile
        </h1>
      </div>

      <Grid container style={{ marginTop: "5%",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",backgroundColor:"#FEFFFE" }}>
        <Grid xs={12} md={11} lg={11} container>
          <Grid xs={12} md={2} lg={2}>
            <h1></h1>
          </Grid>
          <Grid xs={12} md={10} lg={10} style={{ }}>
          <section >
      <MDBContainer className="py-5">


        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">
                  {user.name}
                   </p>
                <p className="text-muted mb-4">{user.email}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn style={{backgroundColor:"#053d75",width:"50%"}}>Edit</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>


          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
            <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={car2}
                alt=''
                style={{ width: '55px', height: '50px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={car6}
                alt=''
                style={{ width: '55px', height: '50px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={car1}
                alt=''
                style={{ width: '55px', height: '50px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
            </MDBCard>

   
          </MDBCol>


          <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Favorite cars</strong>
      </h4>

      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src={car1}
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-primary ms-2">New</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Product name</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Category</p>
              </a>
              <h6 className="mb-3">$61.99</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src={car3}
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-success ms-2">Eco</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Product name</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Category</p>
              </a>
              <h6 className="mb-3">$61.99</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src={car6}
                fluid
                className="w-100"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-danger ms-2">-10%</span>
                    </h5>
                  </div>
                </div>
                <div class="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Product name</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>Category</p>
              </a>
              <h6 className="mb-3">
                <s>$61.99</s>
                <strong className="ms-2 text-danger">$50.99</strong>
              </h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </section>
          </Grid>


        </Grid>
      </Grid>
      </>)}
    </div>
    
    
  );
}
Profile.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
auth: state.auth
});
export default connect(mapStateToProps, {logout})(Profile);

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
  Clear,
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
import cardcover from "../assets/cardcover.jpg";

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

import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GetCar } from "../actions/car";

import { useNavigate } from "react-router-dom";
import { loadUser } from "../actions/auth";
import { Rent,UnRent } from "../actions/rent";

function CarD({UnRent, GetCar, Rent, car, auth: { isAuthenticated, loading, user } }) {
  const params = useParams();
  const [idc, setIdc] = useState(String(params.ID));

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

  //managing car
  const [Ccar, setCar] = useState(car.car);
  useEffect(() => {
    GetCar(idc);
  }, [GetCar]);

  const Reservation = () => {
    if (!loading) {
      if (isAuthenticated == true) {
        const userid = user._id;
        const ID = car.car._id;
        Rent(userid, ID);
      } else {
        window.alert("pls connect");
      }
    }
    
  };



   const Rendre=()=>{
    if(!loading){
      if(isAuthenticated == true){
        const userid = user._id;
        const ID = car.car._id;
        UnRent(userid, ID);

      }
    }
   }

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
          CAR DETAILS
        </h1>
      </div>
      {car.car && (
        <Grid container style={{ marginTop: "5%" }}>
          <Grid xs={12} md={11} lg={11} container>
            <Grid xs={12} md={2} lg={2}>
              <h1></h1>
            </Grid>
            <Grid xs={12} md={5} lg={5} style={{}}>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                style={{ height: "400px" }}
                interval={1000}
              >
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    src={car.car.ImgM}
                    text="First slide"
                    style={{ height: "100%", borderRadius: "15px" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={car.car.ImgS1}
                    text="Second slide"
                    style={{ height: "400px", borderRadius: "15px" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={car.car.ImgS2}
                    text="Third slide"
                    style={{ height: "400px", borderRadius: "15px" }}
                  />
                </Carousel.Item>
              </Carousel>
            </Grid>

            <Grid xs={12} md={2} lg={2} style={{ marginLeft: "1%" }}>
              <h3 style={{ textAlign: "start" }}>
                {car.car.brand} {car.car.model}
              </h3>

              <h6 style={{ fontWeight: "bold" }}>Specifications</h6>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "0.5px solid #e3dada",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  padding: "5px",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Seat</p>
                <p>{car.car.Seats}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "0.5px solid #e3dada",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  padding: "5px",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Door</p>
                <p>{car.car.Doors}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "0.5px solid #e3dada",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  padding: "5px",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Fuel Type</p>
                <p>{car.car.FuelType}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "0.5px solid #e3dada",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  padding: "5px",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Engine</p>
                <p>{car.car.Engin}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "0.5px solid #e3dada",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  padding: "5px",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Year</p>
                <p>{car.car.Year}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "0.5px solid #e3dada",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  padding: "5px",
                }}
              >
                <p style={{ fontWeight: "bold" }}>Transmission</p>
                <p>{car.car.Transmission}</p>
              </div>

              <h6 style={{ fontWeight: "bold", marginTop: "5%" }}>Features</h6>
              <div style={{ display: "flex" }}>
                <p style={{ fontWeight: "bold" }}>
                  {car.car.ABS == true && <Check color="success" />}
                  {car.car.ABS == false && <Clear color="error" />}
                </p>
                <p style={{ marginLeft: "2%" }}>ABS</p>
              </div>

              <div style={{ display: "flex" }}>
                <p style={{ fontWeight: "bold" }}>
                  {car.car.ESP == true && <Check color="success" />}
                  {car.car.ESP == false && <Clear color="error" />}
                </p>
                <p style={{ marginLeft: "2%" }}>ESP</p>
              </div>

              <div style={{ display: "flex" }}>
                <p style={{ fontWeight: "bold" }}>
                  {car.car.AIDE == true && <Check color="success" />}
                  {car.car.AIDE == false && <Clear color="error" />}
                </p>
                <p style={{ marginLeft: "2%" }}>Aaide stationement</p>
              </div>
            </Grid>

            <Grid xs={12} md={2} lg={2} style={{ marginLeft: "1%" }}>
              <MDBCard
                style={{ backgroundColor: "#ebedf0", textAlign: "center" }}
              >
                <MDBCardBody
                  style={{
                    backgroundColor: "#ebedf0",
                    borderRadius: "20px",
                    height: "150%",
                  }}
                >
                  <p style={{ color: "#141414" }}>Daily rate</p>
                  <h2 style={{ color: "#053d75", fontWeight: "bold" }}>
                    {car.car.Price} DA
                  </h2>
                </MDBCardBody>
              </MDBCard>

              <Grid
                container
                style={{
                  padding: "5%",
                  marginTop: "5%",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  borderRadius: "20px",
                }}
              >
                <Grid
                  xs={12}
                  md={12}
                  lg={12}
                  style={{
                    padding: "1%",
                    fontFamily: " 'Bebas Neue', sans-serif",
                  }}
                >
                  <p>Choisissez un endroit</p>
                  <MDBInput
                    value={endroit1}
                    onChange={(e) => setEndroit1(e.target.value)}
                    label="endroit 1 "
                    id="controlledValue"
                    type="text"
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={12}
                  lg={12}
                  style={{
                    padding: "1%",
                    fontFamily: " 'Bebas Neue', sans-serif",
                  }}
                >
                  <p>Choisissez un autre endroit</p>
                  <MDBInput
                    value={endroit1}
                    onChange={(e) => setEndroit1(e.target.value)}
                    label="endroit 1 "
                    id="controlledValue"
                    type="text"
                  />
                </Grid>

                <Grid
                  xs={12}
                  md={12}
                  lg={12}
                  style={{
                    padding: "1%",
                    fontFamily: " 'Bebas Neue', sans-serif",
                  }}
                >
                  <p>Date Debut</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateField", "DateField"]}>
                      <DatePicker
                        label="Controlled field"
                        inputFormat="dd/MM/yyyy"
                        value={datedebut}
                        onChange={(newValue) => setDateDeb(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>

                <Grid
                  xs={12}
                  md={12}
                  lg={12}
                  style={{
                    padding: "1%",
                    fontFamily: " 'Bebas Neue', sans-serif",
                  }}
                >
                  <p>Date Fin</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateField", "DateField"]}>
                      <DatePicker
                        label="Controlled field"
                        inputFormat="dd/MM/yyyy"
                        value={datedebut}
                        onChange={(newValue) => setDateDeb(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>

                <Grid
                  xs={12}
                  md={12}
                  lg={12}
                  style={{
                    padding: "1%",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "5%",
                  }}
                >



                    
                  {  loading ==false && car.car.taken == false && (
                    <MDBBtn
                      style={{
                        width: "60%",
                        borderRadius: "5px",
                        backgroundColor: "#21BF18",
                      }}
                      onClick={() => {
                        Reservation();
                      }}
                    >
                      Reserver
                    </MDBBtn>
                  )}
                  { loading ==false && car.car.taken == true && car.car.takenBy == user._id && (
                    <>
                    <p style={{color:"red",fontWeight:"bold"}}>dejas prise</p>
                    <MDBBtn
                      style={{
                        width: "60%",
                        borderRadius: "5px",
                        backgroundColor: "#21BF18",
                      }}
                      onClick={()=>{Rendre()}}
                    >
                      Rendre
                      
                    </MDBBtn>
                    </>
                  )}

                  { loading ==false && car.car.taken == true && car.car.takenBy != user._id && (
                    <MDBBtn
                      disabled
                      style={{
                        width: "60%",
                        borderRadius: "5px",
                        backgroundColor: "#21BF18",
                      }}
                    >
                      Indisponible
                    </MDBBtn>
                  )}


                  
                
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

CarD.propTypes = {
  GetCar: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
  Rent: PropTypes.func.isRequired,
  UnRent:PropTypes.func.isRequired,
};

const mapsStateToProps = (state) => ({
  car: state.car,
  auth: state.auth,
});
export default connect(mapsStateToProps, { UnRent,loadUser, GetCar, Rent })(CarD);

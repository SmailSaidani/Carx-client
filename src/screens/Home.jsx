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
import Navb from "./Navbar"
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

function Home({auth:{isAuthenticated , loading},logout}) {
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
      <Navb />

      <div
        class="bg-image coverHeight"
        style={{
          backgroundImage: `url(${coverbg})`,
          padding: "1%",

        }}
      >
        <h1
          className="mgup"
          style={{
            fontFamily: " 'Bebas Neue', sans-serif",
            color: "#FEFFFE",
            display: "inline-block",
            marginLeft: "15%",
            fontSize: "7vh",
          }}
        >
          Vous cherchez un{" "}
          <h1
            style={{
              color: "#21BF18",
              display: "inline-block",
              fontSize: "7vh",
            }}
          >
            vehicule
          </h1>{" "}
          ? Vous etes au bon endroit .{" "}
        </h1>

        <Container
          style={{
            width: "60%",
            marginLeft: "15%",
            backgroundColor: "white",
            borderRadius: "25px",
            padding: "2%",
          }}
        >
          <Grid container xs={12} md={12} lg={12} style={{ padding: "1%" }}>
            <Grid xs={12} md={6} lg={6} style={{ padding: "1%" }} container>
              <Grid xs={12} md={12} lg={12}>
                <h6 style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  Quel type de vehicule cherchez-vous ?{" "}
                </h6>
              </Grid>

              <Grid xs={12} md={6} lg={6} container>
                <Grid xs={6} md={6} lg={6} style={{ padding: "3%" }}>
                  <MDBCard
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                  >
                    <MDBCardBody
                      style={{
                        backgroundColor: isShown ? "#FEFFFE" : "#21BF18",
                        padding: "15%",
                        borderRadius: "15px",
                        height: "150%",
                      }}
                    >
                      <img
                        src={isShown ? carinv : car}
                        style={{ height: "120%", width: "100%" }}
                      />
                    </MDBCardBody>
                  </MDBCard>
                </Grid>

                <Grid xs={6} md={6} lg={6} style={{ padding: "3%" }}>
                  <MDBCard>
                    <MDBCardBody
                      style={{
                        backgroundColor: "#21BF18",
                        padding: "15%",
                        borderRadius: "15px",
                        height: "150%",
                      }}
                    >
                      <img
                        src={minivan}
                        style={{ height: "120%", width: "100%" }}
                      />
                    </MDBCardBody>
                  </MDBCard>
                </Grid>
              </Grid>

              <Grid xs={12} md={6} lg={6} container>
                <Grid xs={6} md={6} lg={6} style={{ padding: "3%" }}>
                  <MDBCard>
                    <MDBCardBody
                      style={{
                        backgroundColor: "#21BF18",
                        padding: "15%",
                        borderRadius: "15px",
                        height: "150%",
                      }}
                    >
                      <img
                        src={van}
                        style={{ height: "120%", width: "100%" }}
                      />
                    </MDBCardBody>
                  </MDBCard>
                </Grid>
                <Grid xs={6} md={6} lg={6} style={{ padding: "3%" }}>
                  <MDBCard>
                    <MDBCardBody
                      style={{
                        backgroundColor: "#21BF18",
                        padding: "15%",
                        borderRadius: "15px",
                        height: "150%",
                      }}
                    >
                      <img
                        src={prestige}
                        style={{ height: "120%", width: "100%" }}
                      />
                    </MDBCardBody>
                  </MDBCard>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={12} md={6} lg={6} container>
              <Grid xs={12} md={12} lg={12} container>
                <Grid
                  xs={12}
                  md={6}
                  lg={6}
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
                  md={6}
                  lg={6}
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
                  md={6}
                  lg={6}
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
                  md={6}
                  lg={6}
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
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ width: "80%", marginLeft: "5%", marginTop: "2%" }}>
          <Stepper
            alternativeLabel
            activeStep={4}
            connector={<QontoConnector />}
          >
            <Step>
              <StepLabel
                StepIconComponent={StepOneIcon}
                sx={{ color: "white" }}
                color="white"
              >
                <MDBCard
                  style={{
                    backgroundColor: "transparent",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    
                    width: "100%",
                  }}
                >
                  <MDBCardBody
                    style={{
                      padding: "15%",
                      backgroundColor: "transparent",
                      borderRadius: "15px",
                      height: "150%",
                    }}
                  >
                    <h6 style={{ color: "#FEFFFE" }}>Pick a car</h6>
                    
                  </MDBCardBody>
                </MDBCard>
              </StepLabel>
            </Step>

            <Step>
              <StepLabel
                StepIconComponent={StepTwoIcon}
                sx={{ color: "white" }}
                color="white"
              >
                <MDBCard
                  style={{
                    backgroundColor: "transparent",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    
                    width: "100%",
                  }}
                >
                  <MDBCardBody
                    style={{
                      padding: "15%",
                      backgroundColor: "transparent",
                      borderRadius: "15px",
                      height: "150%",
                    }}
                  >
                    <h6 style={{ color: "#FEFFFE" }}>Pick a car</h6>
        
                  </MDBCardBody>
                </MDBCard>
              </StepLabel>
            </Step>

            <Step>
              <StepLabel
                StepIconComponent={StepThreeIcon}
                sx={{ color: "white" }}
                color="white"
              >
                <MDBCard
                  style={{
                    backgroundColor: "transparent",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    
                    width: "100%",
                  }}
                >
                  <MDBCardBody
                    style={{
                      padding: "15%",
                      backgroundColor: "transparent",
                      borderRadius: "15px",
                      height: "150%",
                    }}
                  >
                    <h6 style={{ color: "#FEFFFE" }}>Pick a car</h6>

                  </MDBCardBody>
                </MDBCard>
              </StepLabel>
            </Step>

            <Step>
              <StepLabel
                StepIconComponent={StepFourIcon}
                sx={{ color: "white" }}
                color="white"
              >
                <MDBCard
                  style={{
                    backgroundColor: "transparent",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    width: "100%",
                  }}
                >
                  <MDBCardBody
                    style={{
                      padding: "15%",
                      backgroundColor: "transparent",
                      borderRadius: "15px",
                      height: "150%",
                    }}
                  >
                    <h6 style={{ color: "#FEFFFE" }}>Pick a car</h6>

                  </MDBCardBody>
                </MDBCard>
              </StepLabel>
            </Step>
          </Stepper>
        </Box>
      </div>

      <Box style={{ width: "100%", height: "100%", marginTop: "2%" }}>
        <Grid xs={12} md={12} lg={12} container>
          <Grid
            xs={12}
            md={12}
            lg={12}
            style={{ textAlign: "ceter", alignItems: "center" }}
          >
            <div style={{ textAlign: "center" }}>
              <MDBBtn
                color="secondary"
                style={{
                  color: "#21BF18",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2vh",
                  alignSelf: "center",
                }}
              >
                WHY CHOOSE US ?
              </MDBBtn>
              <h3
                style={{
                  fontWeight: "bolder",
                  alignSelf: "center",
                  marginTop: "1%",
                }}
              >
                Our Features
              </h3>
              <p style={{ opacity: "0.8" }}>
                Discover a world of convenience, safety, and
                customization,paving the way for unforgettable adventures{" "}
              </p>
              <p style={{ opacity: "0.8", marginTop: "-1%" }}>
                {" "}
                and seamless mobility solutions.
              </p>
            </div>
          </Grid>

          <Grid container>
            <Grid xs={12} md={2} lg={2} container style={{ marginLeft: "15%" }}>
              <Grid xs={12} md={12} lg={12} container>
                <Grid xs={3} md={3} lg={3}>
                  <EmojiEvents
                    sx={{
                      color: "white",
                      fontSize: "6vh",
                      backgroundColor: "#21BF18",
                      padding: "10%",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid xs={9} md={9} lg={9}>
                  <p style={{ fontWeight: "bold", textAlign:"left"}}>
                    First class services
                  </p>
                  <p
                    style={{
                      width: "100%",
                      marginTop: "-2%",
                      textAlign: "left",
                    }}
                  >
                    Where luxury meets exceptional care, creating unforgettable
                    moments and exceeding your every expectation.
                  </p>
                </Grid>
              </Grid>

              <Grid
                xs={12}
                md={12}
                lg={12}
                container
                style={{ marginTop: "1%" }}
              >
                <Grid xs={3} md={3} lg={3}>
                  <ContactPhoneOutlined
                    sx={{
                      color: "white",
                      fontSize: "6vh",
                      backgroundColor: "#21BF18",
                      padding: "10%",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid xs={9} md={9} lg={9}>
                  <p style={{ fontWeight: "bold", }}>
                    24/7 road assistance
                  </p>
                  <p
                    style={{
                      width: "100%",
                      
                      marginTop: "-2%",
                      textAlign: "left",
                    }}
                  >
                    Reliable support when you need it most, keeping you on the
                    move with confidence and peace of mind.
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} md={3} lg={3} style={{ textAlign: "center" }}>
              <img
                src={car3d}
                style={{  marginTop: "-10%" ,width:"100%",padding:"3%"}}
              />
            </Grid>

            <Grid xs={12} md={2} lg={2} container>
              <Grid xs={12} md={12} lg={12} container>
                <Grid xs={3} md={3} lg={3}>
                  <LocalOfferOutlined
                    sx={{
                      color: "white",
                      fontSize: "6vh",
                      backgroundColor: "#21BF18",
                      padding: "10%",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid xs={9} md={9} lg={9}>
                  <p style={{ fontWeight: "bold", marginLeft: "-2%" }}>
                    Quality at Minimum Expense
                  </p>
                  <p
                    style={{
                      width: "100%",
                      marginLeft: "-2%",
                      marginTop: "-2%",
                      textAlign: "left",
                    }}
                  >
                    Unlocking affordable brilliance with elevating quality while
                    minimizing costs for maximum value.
                  </p>
                </Grid>
              </Grid>

              <Grid
                xs={12}
                md={12}
                lg={12}
                container
                style={{ marginTop: "1%" }}
              >
                <Grid xs={3} md={3} lg={3}>
                  <LocationOnOutlined
                    sx={{
                      color: "white",
                      fontSize: "6vh",
                      backgroundColor: "#21BF18",
                      padding: "10%",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid xs={9} md={9} lg={9}>
                  <p style={{ fontWeight: "bold", marginLeft: "-2%" }}>
                    Free Pick-Up & Drop-Off
                  </p>
                  <p
                    style={{
                      width: "100%",
                      marginLeft: "-2%",
                      marginTop: "-2%",
                      textAlign: "left",
                    }}
                  >
                    Enjoy free pickup and drop-off services, adding an extra
                    layer of ease to your car rental experience.
                  </p>
                </Grid>
              </Grid>
            </Grid>




          </Grid>
        </Grid>
      </Box>

      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={para1}
        bgImageAlt="the dog"
        strength={-200}
        bgImageStyle={{ opacity: "1" }}
        className="para1h"

      >
        <Grid xs={12} md={12} lg={12} container>
          <Grid xs={1} md={1} lg={1}></Grid>
          <Grid
            xs={12}
            md={5}
            lg={5}
            style={{ padding: "2%", textAlign: "center" }}
          >
            <h1
              className="mgup"
              style={{
                fontFamily: " 'Bebas Neue', sans-serif",
                color: "#FEFFFE",
                display: "inline-block",
                marginLeft: "15%",
                fontSize: "5vh",
              }}
            >
              We offer customers a wide range of
              <h1
                style={{
                  color: "#21BF18",
                  display: "inline-block",
                  fontSize: "5vh",
                }}
              >
                commercial cars
              </h1>{" "}
              and
              <h1
                style={{
                  color: "#21BF18",
                  display: "inline-block",
                  fontSize: "5vh",
                }}
              >
                luxury cars
              </h1>{" "}
              cars for any occasion.
            </h1>
          </Grid>
          <Grid
            xs={12}
            md={5}
            lg={5}
            style={{ color: "#FEFFFE", textAlign: "center" }}
          >
            <p style={{ marginTop: "20%" }}>
              At our car rental agency, we believe that everyone deserves to
              experience the pleasure of driving a reliable and comfortable
              vehicle, regardless of their budget. We have curated a diverse
              fleet of well-maintained cars, ranging from sleek sedans to
              spacious SUVs, all at competitive prices. With our streamlined
              rental process, you can quickly and conveniently reserve your
              desired vehicle. Whether you need transportation for a business
              trip, family vacation, or simply want to enjoy a weekend getaway,
              we have flexible rental options to accommodate your schedule.
            </p>
          </Grid>

          <Grid xs={12} md={12} lg={12} container>
            <Grid xs={2} md={2} lg={2}></Grid>
            <Grid
              xs={12}
              md={2}
              lg={2}
              style={{
                textAlign: "center",
                borderRadius: "15px",
                padding: "2%",
              }}
            >
              <MDBCard style={{ backgroundColor: "#141414" }}>
                <MDBCardBody
                  style={{
                    backgroundColor: "#141414",
                    borderRadius: "15px",
                    height: "150%",
                  }}
                >
                  <h3 style={{ color: "#21BF18" }}>352335</h3>
                  <p style={{ color: "white" }}>Completed Orders</p>
                </MDBCardBody>
              </MDBCard>
            </Grid>

            <Grid
              xs={12}
              md={2}
              lg={2}
              style={{
                textAlign: "center",
                borderRadius: "15px",
                padding: "2%",
              }}
            >
              <MDBCard style={{ backgroundColor: "#141414" }}>
                <MDBCardBody
                  style={{
                    backgroundColor: "#141414",
                    borderRadius: "15px",
                    height: "150%",
                  }}
                >
                  <h3 style={{ color: "#21BF18" }}>352335</h3>
                  <p style={{ color: "white" }}>Completed Orders</p>
                </MDBCardBody>
              </MDBCard>
            </Grid>

            <Grid
              xs={12}
              md={2}
              lg={2}
              style={{
                textAlign: "center",
                borderRadius: "15px",
                padding: "2%",
              }}
            >
              <MDBCard style={{ backgroundColor: "#141414" }}>
                <MDBCardBody
                  style={{
                    backgroundColor: "#141414",
                    borderRadius: "15px",
                    height: "150%",
                  }}
                >
                  <h3 style={{ color: "#21BF18" }}>352335</h3>
                  <p style={{ color: "white" }}>Completed Orders</p>
                </MDBCardBody>
              </MDBCard>
            </Grid>

            <Grid
              xs={12}
              md={2}
              lg={2}
              style={{
                textAlign: "center",
                borderRadius: "15px",
                padding: "2%",
              }}
            >
              <MDBCard style={{ backgroundColor: "#141414" }}>
                <MDBCardBody
                  style={{
                    backgroundColor: "#141414",
                    borderRadius: "15px",
                    height: "150%",
                  }}
                >
                  <h3 style={{ color: "#21BF18" }}>352335</h3>
                  <p style={{ color: "white" }}>Completed Orders</p>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </Grid>
        </Grid>
        <div style={{ height: "600px" }} />
      </Parallax>

      <Box style={{ width: "100%", height: "100%", marginTop: "2%", }}>
        <Grid xs={12} md={12} lg={12} container>
          <Grid
            xs={12}
            md={12}
            lg={12}
            style={{ textAlign: "ceter", alignItems: "center" }}
          >
            <div style={{ textAlign: "center" }}>
              <MDBBtn
                color="secondary"
                style={{
                  color: "#21BF18",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2vh",
                  alignSelf: "center",
                }}
              >
                ENJOY YOUR RIDE
              </MDBBtn>
              <h3
                style={{
                  fontWeight: "bolder",
                  alignSelf: "center",
                  marginTop: "1%",
                }}
              >
                Our VEHICULE FLEET
              </h3>
              <p style={{ opacity: "0.8" }}>
                Driving your dreams to reality with an exquisite fleet of{" "}
              </p>
              <p style={{ opacity: "0.8", marginTop: "-1%" }}>
                {" "}
                versatile vehicles for unforgettable journeys.
              </p>
            </div>
          </Grid>
          </Grid>


              <div className="carouselcontainer">
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                  <div className="cardstyle">
                    <MDBCard className="text-black" style={{ padding: "5px" }}>
                      <MDBCardImage
                        src={car1}
                        position="top"
                        alt="Apple Computer"
                      />
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <h3 className="big">BMW-M5</h3>
                          <p className="small text-danger">
                            <Favorite color="error" /> 5
                          </p>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="mb-0">
                            <PeopleAlt color="success" /> 5{" "}
                          </h5>
                          <h5 className="mb-0">
                            <LocalGasStation color="success" /> Diesel{" "}
                          </h5>
                          <h5 className="mb-0">
                            <SensorDoor color="success" /> 2{" "}
                          </h5>
                          <h5 className="mb-0">
                            <BuildCircle color="success" /> 2.0{" "}
                          </h5>
                        </div>

                        <div class="d-flex justify-content-between ">
                          <h5 class="mb-0">
                            Disponible Pour
                            <h4>6000 DA/J</h4>
                          </h5>

                          <div class="ms-auto text-warning mt-2">
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                          </div>
                        </div>
                        <div class="d-flex justify-content-between ">
                          <MDBBtn className="me-1" color="success">
                            Plus de details{" "}
                            <ArrowForwardIosOutlined
                              style={{ fontSize: "20px" }}
                            />
                          </MDBBtn>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </div>

                  <div className="cardstyle">
                    <MDBCard className="text-black">
                      <MDBCardImage
                        src={car2}
                        position="top"
                        alt="Apple Computer"
                      />
                      <MDBCardBody>
                        <div className="text-center">
                          <MDBCardTitle>Believing is seeing</MDBCardTitle>
                          <p className="text-muted mb-4">
                            Apple pro display XDR
                          </p>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between">
                            <span>Pro Display XDR</span>
                            <span>$5,999</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Pro stand</span>
                            <span>$999</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Vesa Mount Adapter</span>
                            <span>$199</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between total font-weight-bold mt-4">
                          <span>Total</span>
                          <span>$7,197.00</span>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </div>

                  <div className="cardstyle">
                    <MDBCard className="text-black">
                      <MDBCardImage
                        src={car3}
                        position="top"
                        alt="Apple Computer"
                      />
                      <MDBCardBody>
                        <div className="text-center">
                          <MDBCardTitle>Believing is seeing</MDBCardTitle>
                          <p className="text-muted mb-4">
                            Apple pro display XDR
                          </p>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between">
                            <span>Pro Display XDR</span>
                            <span>$5,999</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Pro stand</span>
                            <span>$999</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Vesa Mount Adapter</span>
                            <span>$199</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between total font-weight-bold mt-4">
                          <span>Total</span>
                          <span>$7,197.00</span>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </div>

                  <div className="cardstyle">
                    <MDBCard className="text-black">
                      <MDBCardImage
                        src={car4}
                        position="top"
                        alt="Apple Computer"
                      />
                      <MDBCardBody>
                        <div className="text-center">
                          <MDBCardTitle>Believing is seeing</MDBCardTitle>
                          <p className="text-muted mb-4">
                            Apple pro display XDR
                          </p>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between">
                            <span>Pro Display XDR</span>
                            <span>$5,999</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Pro stand</span>
                            <span>$999</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Vesa Mount Adapter</span>
                            <span>$199</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between total font-weight-bold mt-4">
                          <span>Total</span>
                          <span>$7,197.00</span>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </div>

                  <div className="cardstyle">
                    <MDBCard className="text-black">
                      <MDBCardImage
                        src={car5}
                        position="top"
                        alt="Apple Computer"
                      />
                      <MDBCardBody>
                        <div className="text-center">
                          <MDBCardTitle>Believing is seeing</MDBCardTitle>
                          <p className="text-muted mb-4">
                            Apple pro display XDR
                          </p>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between">
                            <span>Pro Display XDR</span>
                            <span>$5,999</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Pro stand</span>
                            <span>$999</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Vesa Mount Adapter</span>
                            <span>$199</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between total font-weight-bold mt-4">
                          <span>Total</span>
                          <span>$7,197.00</span>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </div>

                  <div className="cardstyle">
                    <MDBCard className="text-black">
                      <MDBCardImage
                        src={car6}
                        position="top"
                        alt="Apple Computer"
                      />
                      <MDBCardBody>
                        <div className="text-center">
                          <MDBCardTitle>Believing is seeing</MDBCardTitle>
                          <p className="text-muted mb-4">
                            Apple pro display XDR
                          </p>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between">
                            <span>Pro Display XDR</span>
                            <span>$5,999</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Pro stand</span>
                            <span>$999</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Vesa Mount Adapter</span>
                            <span>$199</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between total font-weight-bold mt-4">
                          <span>Total</span>
                          <span>$7,197.00</span>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </ReactCardCarousel>
              </div>
       
      </Box>

      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={adventure}
        bgImageAlt="the dog"
        strength={-200}
        bgImageStyle={{ opacity: "1" }}
        className="para2h"
      >
        <Grid xs={12} md={12} lg={12} style={{ marginTop: "5%" }} container>
          <Grid xs={12} md={12} lg={12} container>
            <Grid xs={12} md={1} lg={1}></Grid>
            <Grid
              xs={12}
              md={3}
              lg={3}
              style={{
                textAlign: "center",
                borderRadius: "15px",
                padding: "2%",
              }}
            >
              <h1
                className="mgup"
                style={{
                  fontFamily: " 'Bebas Neue', sans-serif",
                  color: "#FEFFFE",
                  display: "inline-block",
                  marginLeft: "15%",
                  fontSize: "5vh",
                }}
              >
                Let Your Adventure Begin
               </h1>
            </Grid>

            <Grid
              xs={12}
              md={2}
              lg={2}
              style={{
                textAlign: "center",
                borderRadius: "15px",
                padding: "2%",
              }}
              container
            >
              <Grid xs={12} md={12} lg={12} style={{textAlign:"center"}}>
                <EmojiEvents  style={{backgroundColor:"#21BF18",float:"left"}} sx={{fontSize:"80px", color:"white",padding:"7%",borderRadius:"20px"}}/>
              </Grid>

              <Grid xs={12} md={12} lg={12} style={{marginTop:"1%"}}>
                <h5 style={{fontFamily:"'Bebas Neue',sans-serif",color:"white",float:"left"}}>First Class Services</h5>
              </Grid>
              <Grid xs={12} md={12} lg={12}>
                <p style={{color:"white",textAlign:"left",opacity:"0.8"}}>Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
              </Grid>



              

            </Grid>


            <Grid
              xs={12}
              md={2}
              lg={2}
              style={{
                textAlign: "center",
                borderRadius: "15px",
                padding: "2%",
              }}
              container
            >
              <Grid xs={12} md={12} lg={12}>
                <ContactPhoneOutlined  style={{backgroundColor:"#21BF18",float:"left"}} sx={{fontSize:"80px", color:"white",padding:"7%",borderRadius:"20px"}}/>
              </Grid>

              <Grid xs={12} md={12} lg={12} style={{marginTop:"1%"}}>
                <h5 style={{fontFamily:"'Bebas Neue',sans-serif",color:"white",float:"left"}}>First Class Services</h5>
              </Grid>
              <Grid xs={12} md={12} lg={12}>
                <p style={{color:"white",textAlign:"left",opacity:"0.8"}}>Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
              </Grid>



              

            </Grid>

            <Grid
              xs={12}
              md={2}
              lg={2}
              style={{
                textAlign: "center",
                borderRadius: "15px",
                padding: "2%",
              }}
              container
            >
              <Grid xs={12} md={12} lg={12}>
                <LocationOnOutlined  style={{backgroundColor:"#21BF18",float:"left"}} sx={{fontSize:"80px", color:"white",padding:"7%",borderRadius:"20px"}}/>
              </Grid>

              <Grid xs={12} md={12} lg={12} style={{marginTop:"1%"}}>
                <h5 style={{fontFamily:"'Bebas Neue',sans-serif",color:"white",float:"left"}}>First Class Services</h5>
              </Grid>
              <Grid xs={12} md={12} lg={12}>
                <p style={{color:"white",textAlign:"left",opacity:"0.8"}}>Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
              </Grid>



              

            </Grid>
          </Grid>
        </Grid>
        <div style={{ height: "600px" }} />
      </Parallax>





      <Box style={{ width: "100%", height: "100%", marginTop: "2%" }}>
        <Grid xs={12} md={12} lg={12} container>
          <Grid
            xs={12}
            md={12}
            lg={12}
            style={{ textAlign: "ceter", alignItems: "center" }}
          >
            <div style={{ textAlign: "center" }}>
              <MDBBtn
                color="secondary"
                style={{
                  color: "#21BF18",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2vh",
                  alignSelf: "center",
                }}
              >
                ENJOY YOUR RIDE
              </MDBBtn>
              <h3
                style={{
                  fontWeight: "bolder",
                  alignSelf: "center",
                  marginTop: "1%",
                }}
              >
                Our VEHICULE FLEET
              </h3>
              <p style={{ opacity: "0.8" }}>
                Driving your dreams to reality with an exquisite fleet of{" "}
              </p>
              <p style={{ opacity: "0.8", marginTop: "-1%" }}>
                {" "}
                versatile vehicles for unforgettable journeys.
              </p>
            </div>
          </Grid>

          <Grid container>
            <Grid xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
              <Grid xs={12} md={2} lg={2}>

              </Grid>
              <Grid xs={12} md={10} lg={10} container style={{textAlign:"center"}}>
                  <Grid xs={12} md={6} lg={6} style={{textAlign:"center"}}>
                  <Accordion style={{width:"70%",marginLeft:"30%",backgroundColor:"transparent",fontFamily:"'Bebas Neue', sans-serif",boxShadow:"none",borderBottom:"1px solid gray"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{backgroundColor:"#21BF18" , padding:"3%",color:"white"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
                  </Grid>

                  <Grid xs={12} md={6} lg={6}>
                    hello
                  </Grid>

                </Grid>


            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}



Home.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
}

const mapStateToProps=state=>({
auth: state.auth
});

export default  connect (mapStateToProps, {logout})(Home);

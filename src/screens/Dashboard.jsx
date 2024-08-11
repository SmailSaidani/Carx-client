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
  MDBCheckbox,
  MDBFile,
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
import { CircularProgress, Grid, Slider, Tooltip } from "@mui/material";
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
  AdminPanelSettingsOutlined,
  ArrowForwardIosOutlined,
  AttachMoney,
  BuildCircle,
  CalendarMonthOutlined,
  CarRentalOutlined,
  Check,
  ContactPhoneOutlined,
  DirectionsCarOutlined,
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
  QueryStatsOutlined,
  RecentActorsOutlined,
  RedoOutlined,
  RequestPageOutlined,
  SensorDoor,
  UploadFileOutlined,
} from "@mui/icons-material";
import { Parallax } from "react-parallax";
import ReactCardCarousel from "react-card-carousel";
import car1 from "../assets/bmw-m5.jpg";
import cardcover from "../assets/dashboard.jpg";

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

import loadingif from "../assets/5cac4a000cece-unscreen.gif";

import car7 from "../assets/hyundai-staria.jpg";

import ImageGallery from "react-image-gallery";

import Carousel from "react-bootstrap/Carousel";
import welcom from "../assets/dashboardbg.jpg";

import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import { addCar } from "../actions/car";

import { storage } from "../firebase";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { changeprice } from "../actions/car";
import { ref as reference } from "firebase/storage";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}










function Dashboard({
  auth: { isAuthenticated, loading, user },
  addCar,
  changeprice,
  logout,
}) {
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

  const [showBasic, setShowBasic] = useState(true);
  // loading

  const [loadingsc, setIsloaded] = useState(true);
  setInterval(function () {
    setIsloaded(false);
  }, 5000);

  //selector

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //conditional render

  const [isinfo, setIsnfo] = useState(true);
  const [iscar, setIscar] = useState(false);

  const [Brand, setBrand] = useState("");
  const [Model, setModel] = useState("");
  const [Snb, setSnb] = useState("");
  const [Body, setBody] = useState("");
  const [Seats, setSeats] = useState("");
  const [Doors, setDoors] = useState("");
  const [FuelT, setFuelT] = useState("");
  const [Engine, setEngine] = useState("");
  const [Year, setYear] = useState("");
  const [Trans, setTrans] = useState("");
  const [Price, setPrice] = useState("");
  const [ABS, setABS] = useState(false);
  const [ESP, setESP] = useState(false);
  const [AIDE, setAIDE] = useState(false);
  const [Imgs, setImgs] = useState([]);

  //adding a car

  const addTheCar = (e) => {
    addCar({
      Brand,
      Model,
      Snb,
      Body,
      Seats,
      Doors,
      FuelT,
      Engine,
      Year,
      Trans,
      Price,
      ABS,
      ESP,
      AIDE,
      imagePC,
      imagePC1,
      imagePC2
    });
  };

  // file upload
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  const [imagepc, setimagepc] = useState(false);
  const [imagepc1, setimagepc1] = useState(false);
  const [imagepc2, setimagepc2] = useState(false);

  const [imagePC, setimagePC] = useState("");
  const [imagePC1, setimagePC1] = useState("");
  const [imagePC2, setimagePC2] = useState("");

  const [photo, setphoto] = useState(false);
  const [photo1, setphoto1] = useState(false);
  const [photo2, setphoto2] = useState(false);

  const [errors2, setErrors2] = useState({});
  const [errors3, setErrors3] = useState({});
  const [errors1, setErrors1] = useState({});

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    setErrors2({});
    //
    if (!file) return;
    const sotrageRef = reference(storage, `files/${file.name}`);

    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimagePC(downloadURL);
          setphoto(true);
          setImgs(oldArray => [...oldArray, downloadURL]);

        });
      }
    );
  };






  const formHandler2 = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles2(file);
  };


  const uploadFiles2 = (file) => {
    setErrors3({});
    //
    if (!file) return;
    const sotrageRef = reference(storage, `files/${file.name}`);

    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress1(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimagePC2(downloadURL);
          setphoto2(true);
          setImgs(oldArray => [...oldArray, downloadURL]);

        });
      }
    );
  };


  const formHandler1 = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles1(file);
  };

  const uploadFiles1 = (file) => {
    setErrors1({});
    //
    if (!file) return;
    const sotrageRef = reference(storage, `files/${file.name}`);

    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress2(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimagePC1(downloadURL);
          setphoto1(true);
          setImgs(oldArray => [...oldArray, downloadURL]);

        });
      }
    );
  };



  //changing price

  const [price , setprice]=useState('')
  const [serial , setserial]=useState('')
  
  console.log(price, "asdl",serial)
  const  Changep=()=>{
    changeprice({serial,price})
    
  }


  return (
    <>
      {loadingsc ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            position: "absolute",
            display: "flow",
            alignItems: "center",
          }}
          className="welc"
        >
          <div>
            <img
              src={loadingif}
              style={{
                backgroundColor: "#FEFFFE",
                marginTop: "15%",
                width: "20%",
              }}
              className="picw"
            />
          </div>
          <CircularProgress
            sx={{ color: "#21BF18" }}
            style={{ marginTop: "-5%" }}
          />
          <h3 style={{ fontWeight: "bolder" }}>Welcome To CARX</h3>
        </div>
      ) : (
        <div>
          {!loading &&
            isAuthenticated == true &&
            user.email == "admin@gmail.com" && (
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
                          style={{
                            width: "80px",
                            height: "80px",
                            marginRight: "2%",
                          }}
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
                    <Navbar.Collapse
                      id="responsive-navbar-nav"
                      style={{ color: "red" }}
                    >
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
                    Dashboard
                  </h1>
                </div>

                <Grid
                  container
                  style={{
                    marginTop: "5%",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    backgroundColor: "#F7F9FA",
                  }}
                >
                  <Grid xs={12} md={11} lg={11} container>
                    <Grid xs={12} md={2} lg={2}>
                      <h1></h1>
                    </Grid>
                    <Grid xs={12} md={10} lg={10} style={{}}>
                      <MDBNavbar
                        expand="lg"
                        light
                        style={{
                          backgroundColor: "#21BF18",
                          borderRadius: "10px",
                        }}
                      >
                        <MDBContainer fluid>
                          <MDBNavbarToggler
                            onClick={() => setShowBasic(!showBasic)}
                            aria-controls="navbarExample01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                          >
                            <MDBIcon fas icon="bars" />
                          </MDBNavbarToggler>
                          <MDBCollapse show={showBasic}>
                            <MDBNavbarNav
                              right
                              className="mb-2 mb-lg-0"
                              style={{ alignItems: "center", marginTop: "2%" }}
                            >
                              <MDBNavbarItem active>
                                <MDBNavbarLink
                                  aria-current="page"
                                  style={{
                                    color: "#252525",
                                    fontWeight: "bolder",
                                  }}
                                >
                                  <AdminPanelSettingsOutlined color="white" />{" "}
                                  Admin Dashboard
                                </MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem style={{ color: "#053d75" }}>
                                /
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                <MDBNavbarLink
                                  style={{
                                    color: "#FEFFFE",
                                    fontWeight: "bold",
                                  }}
                                  onClick={() => {
                                    setIsnfo(true);
                                    setIscar(false);
                                  }}
                                >
                                  {" "}
                                  <QueryStatsOutlined
                                    style={{ fontSize: "30px" }}
                                  />{" "}
                                  Informations
                                </MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem style={{ color: "#053d75" }}>
                                /
                              </MDBNavbarItem>

                              <MDBNavbarItem
                                onClick={() => {
                                  setIsnfo(false);
                                  setIscar(true);
                                }}
                              >
                                <MDBNavbarLink
                                  style={{
                                    color: "#FEFFFE",
                                    fontWeight: "bold",
                                  }}
                                >
                                  <CarRentalOutlined /> Gestion Vehicules
                                </MDBNavbarLink>
                              </MDBNavbarItem>
                            </MDBNavbarNav>
                          </MDBCollapse>
                        </MDBContainer>
                      </MDBNavbar>
                      <section>
                        <MDBContainer className="py-5">
                          {isinfo == true && (
                            <>
                              <MDBRow className="g-0">
                                <MDBCol lg="12">
                                  <Grid
                                    container
                                    style={{ justifyContent: "space-between" }}
                                  >
                                    <Grid
                                      xs={12}
                                      md={2}
                                      lg={2}
                                      style={{
                                        textAlign: "center",
                                        borderRadius: "15px",
                                        padding: "2%",
                                        color: "black",
                                        boxShadow:
                                          "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                        width: "50%",
                                        height: "200px",
                                        border: "0.5px solid #e3dada",
                                      }}
                                      container
                                    >
                                      <Grid xs={12} md={12} lg={12}>
                                        <RedoOutlined
                                          style={{ float: "left" }}
                                          sx={{
                                            fontSize: "40px",
                                            color: "#21BF18",
                                            borderRadius: "20px",
                                          }}
                                        />
                                      </Grid>
                                      <Grid xs={12} md={12} lg={12} style={{}}>
                                        <p
                                          style={{
                                            fontFamily:
                                              "'Bebas Neue',sans-serif",
                                            float: "left",
                                            color: "#053d75",
                                            fontSize: "5vh",
                                          }}
                                        >
                                          12
                                        </p>
                                      </Grid>
                                      <Grid
                                        xs={12}
                                        md={12}
                                        lg={12}
                                        style={{ marginTop: "-12%" }}
                                      >
                                        <p
                                          style={{
                                            fontFamily:
                                              "'Bebas Neue',sans-serif",
                                            textAlign: "left",
                                            opacity: "0.8",
                                          }}
                                        >
                                          Requests waiting validation
                                        </p>
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
                                        color: "black",
                                        boxShadow:
                                          "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                        width: "60%",
                                        height: "200px",
                                        border: "0.5px solid #e3dada",
                                      }}
                                      container
                                    >
                                      <Grid xs={12} md={12} lg={12}>
                                        <CalendarMonthOutlined
                                          style={{ float: "left" }}
                                          sx={{
                                            fontSize: "40px",
                                            color: "#21BF18",
                                            borderRadius: "20px",
                                          }}
                                        />
                                      </Grid>
                                      <Grid xs={12} md={12} lg={12} style={{}}>
                                        <p
                                          style={{
                                            fontFamily:
                                              "'Bebas Neue',sans-serif",
                                            float: "left",
                                            color: "#053d75",
                                            fontSize: "5vh",
                                          }}
                                        >
                                          12
                                        </p>
                                      </Grid>
                                      <Grid
                                        xs={12}
                                        md={12}
                                        lg={12}
                                        style={{ marginTop: "-12%" }}
                                      >
                                        <p
                                          style={{
                                            fontFamily:
                                              "'Bebas Neue',sans-serif",
                                            textAlign: "left",
                                            opacity: "0.8",
                                          }}
                                        >
                                          Orders this month
                                        </p>
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
                                        color: "black",
                                        boxShadow:
                                          "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                        width: "60%",
                                        height: "200px",
                                        border: "0.5px solid #e3dada",
                                      }}
                                      container
                                    >
                                      <Grid xs={12} md={12} lg={12}>
                                        <DirectionsCarOutlined
                                          style={{ float: "left" }}
                                          sx={{
                                            fontSize: "40px",
                                            color: "#21BF18",
                                            borderRadius: "20px",
                                          }}
                                        />
                                      </Grid>
                                      <Grid xs={12} md={12} lg={12} style={{}}>
                                        <p
                                          style={{
                                            fontFamily:
                                              "'Bebas Neue',sans-serif",
                                            float: "left",
                                            color: "#053d75",
                                            fontSize: "5vh",
                                          }}
                                        >
                                          12
                                        </p>
                                      </Grid>
                                      <Grid
                                        xs={12}
                                        md={12}
                                        lg={12}
                                        style={{ marginTop: "-12%" }}
                                      >
                                        <p
                                          style={{
                                            fontFamily:
                                              "'Bebas Neue',sans-serif",
                                            textAlign: "left",
                                            opacity: "0.8",
                                          }}
                                        >
                                          Voitures les plus demandées
                                        </p>
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
                                        color: "black",
                                        boxShadow:
                                          "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                        width: "60%",
                                        height: "200px",
                                        border: "0.5px solid #e3dada",
                                      }}
                                      container
                                    >
                                      <Grid xs={12} md={12} lg={12}>
                                        <CarRentalOutlined
                                          style={{ float: "left" }}
                                          sx={{
                                            fontSize: "40px",
                                            color: "#21BF18",
                                            borderRadius: "20px",
                                          }}
                                        />
                                      </Grid>
                                      <Grid xs={12} md={12} lg={12} style={{}}>
                                        <p
                                          style={{
                                            fontFamily:
                                              "'Bebas Neue',sans-serif",
                                            float: "left",
                                            color: "#053d75",
                                            fontSize: "5vh",
                                          }}
                                        >
                                          9
                                        </p>
                                      </Grid>
                                      <Grid
                                        xs={12}
                                        md={12}
                                        lg={12}
                                        style={{ marginTop: "-12%" }}
                                      >
                                        <p
                                          style={{
                                            fontFamily:
                                              "'Bebas Neue',sans-serif",
                                            textAlign: "left",
                                            opacity: "0.8",
                                          }}
                                        >
                                          Total cars
                                        </p>
                                      </Grid>
                                    </Grid>
                                  </Grid>

                                  <MDBCard className="mb-4 mt-4">
                                    <h4
                                      className="mt-4 mb-5"
                                      style={{ textAlign: "center" }}
                                    >
                                      <strong>Recent Orders</strong>
                                    </h4>

                                    <MDBTable align="middle">
                                      <MDBTableHead>
                                        <tr>
                                          <th
                                            scope="col"
                                            style={{ fontWeight: "bold" }}
                                          >
                                            Car
                                          </th>
                                          <th
                                            scope="col"
                                            style={{ fontWeight: "bold" }}
                                          >
                                            Pick up Location
                                          </th>
                                          <th
                                            scope="col"
                                            style={{ fontWeight: "bold" }}
                                          >
                                            Drop Off Location
                                          </th>
                                          <th
                                            scope="col"
                                            style={{ fontWeight: "bold" }}
                                          >
                                            Pick up Date
                                          </th>
                                          <th
                                            scope="col"
                                            style={{ fontWeight: "bold" }}
                                          >
                                            Drop Off Date
                                          </th>
                                          <th
                                            scope="col"
                                            style={{ fontWeight: "bold" }}
                                          >
                                            Status
                                          </th>
                                        </tr>
                                      </MDBTableHead>
                                      <MDBTableBody>
                                        <tr>
                                          <td>
                                            <div className="d-flex align-items-center">
                                              <img
                                                src={car2}
                                                alt=""
                                                style={{
                                                  width: "55px",
                                                  height: "50px",
                                                }}
                                                className="rounded-circle"
                                              />
                                              <div className="ms-3">
                                                <p className="fw-bold mb-1">
                                                  Ferrari
                                                </p>
                                                <p className="text-muted mb-0">
                                                  La Ferrari
                                                </p>
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <p className="fw-normal mb-1">
                                              Blida
                                            </p>
                                            <p className="text-muted mb-0">
                                              Bab Essebt
                                            </p>
                                          </td>

                                          <td>
                                            <p className="fw-normal mb-1">
                                              Alger
                                            </p>
                                            <p className="text-muted mb-0">
                                              Centre
                                            </p>
                                          </td>
                                          <td>
                                            <p className="fw-normal mb-1">
                                              09/11/23
                                            </p>
                                          </td>
                                          <td>
                                            <p className="fw-normal mb-1">
                                              09/15/23
                                            </p>
                                          </td>

                                          <td>
                                            <MDBBadge color="success" pill>
                                              Confirmée
                                            </MDBBadge>
                                          </td>
                                        </tr>
                                      </MDBTableBody>
                                    </MDBTable>
                                  </MDBCard>
                                </MDBCol>

                                <MDBContainer
                                  fluid
                                  className="my-5 text-center"
                                >
                                  <MDBCard className="mb-4 mt-4 p-4 ">
                                    <h4 className="mt-4 mb-5">
                                      <strong>Most rented cars</strong>
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
                                                    <span className="badge bg-primary ms-2">
                                                      New
                                                    </span>
                                                  </h5>
                                                </div>
                                              </div>
                                              <div className="hover-overlay">
                                                <div
                                                  className="mask"
                                                  style={{
                                                    backgroundColor:
                                                      "rgba(251, 251, 251, 0.15)",
                                                  }}
                                                ></div>
                                              </div>
                                            </a>
                                          </MDBRipple>
                                          <MDBCardBody>
                                            <a href="#!" className="text-reset">
                                              <h5 className="card-title mb-3">
                                                Car name
                                              </h5>
                                            </a>
                                            <a href="#!" className="text-reset">
                                              <p>10 Times</p>
                                            </a>
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
                                                    <span className="badge bg-success ms-2">
                                                      Eco
                                                    </span>
                                                  </h5>
                                                </div>
                                              </div>
                                              <div className="hover-overlay">
                                                <div
                                                  className="mask"
                                                  style={{
                                                    backgroundColor:
                                                      "rgba(251, 251, 251, 0.15)",
                                                  }}
                                                ></div>
                                              </div>
                                            </a>
                                          </MDBRipple>
                                          <MDBCardBody>
                                            <a href="#!" className="text-reset">
                                              <h5 className="card-title mb-3">
                                                Car name
                                              </h5>
                                            </a>
                                            <a href="#!" className="text-reset">
                                              <p>12 Times</p>
                                            </a>
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
                                                    <span className="badge bg-danger ms-2">
                                                      -10%
                                                    </span>
                                                  </h5>
                                                </div>
                                              </div>
                                              <div class="hover-overlay">
                                                <div
                                                  className="mask"
                                                  style={{
                                                    backgroundColor:
                                                      "rgba(251, 251, 251, 0.15)",
                                                  }}
                                                ></div>
                                              </div>
                                            </a>
                                          </MDBRipple>
                                          <MDBCardBody>
                                            <a href="#!" className="text-reset">
                                              <h5 className="card-title mb-3">
                                                Car name
                                              </h5>
                                            </a>
                                            <a href="#!" className="text-reset">
                                              <p>12 Times</p>
                                            </a>
                                          </MDBCardBody>
                                        </MDBCard>
                                      </MDBCol>
                                    </MDBRow>
                                  </MDBCard>
                                </MDBContainer>
                              </MDBRow>
                            </>
                          )}

                          {iscar == true && (
                            <>
                              <MDBCard className="mb-4 mt-4 p-4">
                                <h1
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ADD New Car
                                </h1>

                                <MDBRow className="mb-4 mt-4">
                                  <MDBCol>
                                    <MDBInput
                                      id="form6Example1"
                                      label="Car Brand"
                                      onChange={(e) => {
                                        setBrand(e.target.value);
                                        console.log(Brand);
                                      }}
                                    />
                                  </MDBCol>
                                  <MDBCol>
                                    <MDBInput
                                      id="form6Example2"
                                      label="Car Model"
                                      onChange={(e) => {
                                        setModel(e.target.value);
                                      }}
                                    />
                                  </MDBCol>
                                </MDBRow>
                                <MDBInput
                                  wrapperClass="mb-4"
                                  id="form6Example3"
                                  label="Serial Number"
                                  onChange={(e) => {
                                    setSnb(e.target.value);
                                  }}
                                />
                                <MDBInput
                                  wrapperClass="mb-4"
                                  id="form6Example3"
                                  label="Body"
                                  onChange={(e) => {
                                    setBody(e.target.value);
                                  }}
                                />
                                <MDBInput
                                  wrapperClass="mb-4"
                                  id="form6Example4"
                                  label="Seats"
                                  onChange={(e) => {
                                    setSeats(e.target.value);
                                  }}
                                />
                                <MDBInput
                                  wrapperClass="mb-4"
                                  id="form6Example5"
                                  label="Doors"
                                  onChange={(e) => {
                                    setDoors(e.target.value);
                                  }}
                                />
                                <MDBInput
                                  wrapperClass="mb-4"
                                  id="form6Example6"
                                  label="Fuel Type"
                                  onChange={(e) => {
                                    setFuelT(e.target.value);
                                  }}
                                />
                                <MDBInput
                                  wrapperClass="mb-4"
                                  id="form6Example6"
                                  label="Engine"
                                  onChange={(e) => {
                                    setEngine(e.target.value);
                                  }}
                                />
                                <MDBInput
                                  wrapperClass="mb-4"
                                  id="form6Example6"
                                  label="Year"
                                  onChange={(e) => {
                                    setYear(e.target.value);
                                  }}
                                />
                                <MDBInput
                                  wrapperClass="mb-4"
                                  id="form6Example6"
                                  label="Transmission"
                                  onChange={(e) => {
                                    setTrans(e.target.value);
                                  }}
                                />
                                <MDBInput
                                  wrapperClass="mb-4"
                                  id="form6Example6"
                                  label="Price"
                                  onChange={(e) => {
                                    setPrice(e.target.value);
                                  }}
                                />
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                  }}
                                >
                                  <MDBCheckbox
                                    wrapperClass=" justify-content-center mb-4"
                                    id="form6Example8"
                                    label="ABS"
                                    checked={ABS}
                                    onChange={() => setABS(!ABS)}
                                  />

                                  <MDBCheckbox
                                    wrapperClass=" justify-content-center mb-4"
                                    id="form6Example8"
                                    label="ESP"
                                    checked={ESP}
                                    onChange={() => setESP(!ESP)}
                                  />

                                  <MDBCheckbox
                                    wrapperClass=" justify-content-center mb-4"
                                    id="form6Example8"
                                    label="Radar Stationnement"
                                    checked={AIDE}
                                    onChange={() => setAIDE(!AIDE)}
                                  />
                                </div>

                                <div
                                  className="mb-4"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                  }}
                                >
                                  <Typography
                                    variant="overline"
                                    display="block"
                                    gutterBottom
                                  >
                                    photo principale de la voiture{" "}
                                  </Typography>

                                  <div className="App">
                                    <form onSubmit={formHandler}>
                                      <input
                                        type="file"
                                        className="input"
                                        onChange={() => {
                                          setimagepc(true);
                                        }}
                                      />
                                      {imagepc ? (
                                        <>
                                          <div>
                                            <button
                                              className="buttonIm"
                                              style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                              }}
                                              type="submit"
                                            >
                                              <UploadFileOutlined
                                                fontSize="meduim"
                                                sx={{ color: "black" }}
                                              />
                                              Upload
                                            </button>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </form>
                                    <hr />
                                    {errors2.imagePC && (
                                      <p className="error">{errors2.imagePC}</p>
                                    )}

                                    <h2>Uploading done {progress}%</h2>
                                  </div>
                                  {photo ? (
                                    <>
                                      <div className="Li">
                                        <div
                                          className="boxclose"
                                          onClick={() => {
                                            setimagePC("");
                                            setphoto(false);
                                          }}
                                        ></div>
                                        <img
                                          className="imgV"
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                          }}
                                          src={imagePC}
                                          alt=""
                                        />
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div
                                  className="mb-4"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                  }}
                                >
                                  <Typography
                                    variant="overline"
                                    display="block"
                                    gutterBottom
                                  >
                                    photo secondaire I{" "}
                                  </Typography>

                                  <div className="App">
                                    <form onSubmit={formHandler1}>
                                      <input
                                        type="file"
                                        className="input"
                                        onChange={() => {
                                          setimagepc1(true);
                                        }}
                                      />
                                      {imagepc1 ? (
                                        <>
                                          <div>
                                            <button
                                              className="buttonIm"
                                              style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                              }}
                                              type="submit"
                                            >
                                              <UploadFileOutlined
                                                fontSize="meduim"
                                                sx={{ color: "black" }}
                                              />
                                              Upload
                                            </button>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </form>
                                    <hr />
                                    {errors2.imagePC && (
                                      <p className="error">{errors2.imagePC1}</p>
                                    )}

                                    <h2>Uploading done {progress1}%</h2>
                                  </div>
                                  {photo1 ? (
                                    <>
                                      <div className="Li">
                                        <div
                                          className="boxclose"
                                          onClick={() => {
                                            setimagePC1("");
                                            setphoto1(false);
                                          }}
                                        ></div>
                                        <img
                                          className="imgV"
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                          }}
                                          src={imagePC1}
                                          alt=""
                                        />
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>


                                <div
                                  className="mb-4"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                  }}
                                >
                                  <Typography
                                    variant="overline"
                                    display="block"
                                    gutterBottom
                                  >
                                    photo secondaire II{" "}
                                  </Typography>

                                  <div className="App">
                                    <form onSubmit={formHandler2}>
                                      <input
                                        type="file"
                                        className="input"
                                        onChange={() => {
                                          setimagepc2(true);
                                        }}
                                      />
                                      {imagepc ? (
                                        <>
                                          <div>
                                            <button
                                              className="buttonIm"
                                              style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                              }}
                                              type="submit"
                                            >
                                              <UploadFileOutlined
                                                fontSize="meduim"
                                                sx={{ color: "black" }}
                                              />
                                              Upload
                                            </button>
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </form>
                                    <hr />
                                    {errors2.imagePC && (
                                      <p className="error">{errors2.imagePC}</p>
                                    )}

                                    <h2>Uploading done {progress2}%</h2>
                                  </div>
                                  {photo ? (
                                    <>
                                      <div className="Li">
                                        <div
                                          className="boxclose"
                                          onClick={() => {
                                            setimagePC2("");
                                            setphoto2(false);
                                          }}
                                        ></div>
                                        <img
                                          className="imgV"
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                          }}
                                          src={imagePC2}
                                          alt=""
                                        />
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>



                                <MDBBtn
                                  className="mb-4 mt-4"
                                  onClick={(e) => {
                                    addTheCar(e);
                                  }}
                                  block
                                  style={{
                                    width: "30%",
                                    marginLeft: "30%",
                                    backgroundColor: "#053d75",
                                  }}
                                >
                                  Add
                                </MDBBtn>
                              </MDBCard>

                              <MDBCard className="mb-4 mt-4 p-4">
                                <h1
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Edit car price
                                </h1>

                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                  }}
                                >
                                      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={serial}
          label="Age"
          onChange={(event)=>{setserial(event.target.value)}}
        >
          <MenuItem value={"9999"}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>

                                  <div>
                                    {" "}
                                    <MDBInput
                                      className="mt-2 "
                                      id="form6Example6"
                                      label="Price"
                                      value={price}
                                      onChange={(e)=>{setprice(e.target.value)}}

                                    />
                                  </div>
                                </div>

                                <MDBBtn
                                  className="mb-4 mt-4"
                                  type="submit"
                                  block
                                  style={{
                                    width: "30%",
                                    marginLeft: "30%",
                                    backgroundColor: "#053d75",
                                  }}


                                  onClick={()=>{Changep()}}
                                >
                                  Confirm
                                </MDBBtn>
                              </MDBCard>
                            </>
                          )}
                        </MDBContainer>
                      </section>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
        </div>
      )}
    </>
  );
}

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, addCar,changeprice })(Dashboard);

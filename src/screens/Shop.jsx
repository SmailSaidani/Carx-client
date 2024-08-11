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
  ContactPhoneOutlined,
  EmojiEvents,
  Favorite,
  FavoriteBorderOutlined,
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
import car1 from "../assets/bmw-m5.jpg"
import shopcover from "../assets/shopcover2.jpg";

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

import car7 from "../assets/hyundai-staria.jpg"



import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { GetCars } from "../actions/car";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Like, add,UnLike } from "../actions/like";






function Shop({GetCars ,Like,UnLike, car : {cars, loading},auth:{user}}) {
  console.log(cars)
  const [Cars, setCars]=useState(cars)

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

  //checkboxes

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  //slider
  function valuetext(value) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState([0, 999]);

  const handleChangeslider = (event, newValue) => {
    setValue(newValue);
  };





  // getting cars 


  useEffect(()=>{
    GetCars();

  },[GetCars])





const Car = ()=>{



  {cars.map((car)=>{
    <h1>{car.brand}</h1>
  })

}
}


//navigation

const navigate=useNavigate()

  //liking


  const LikeCar=()=>{

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
        class="bg-image shopcoverHeight"
        style={{
          backgroundImage: `url(${shopcover})`,
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
          CARS
        </h1>
      </div>

      <div>
        <Grid container style={{ marginTop: "5%" }}>
          <Grid xs={12} md={12} lg={11} container>
            <Grid xs={12} md={3} lg={3} container>
              <Grid xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                  style={{
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    padding: "4%",
                    width: "70%",
                    borderRadius: "20px",
                    border: "0.5px solid #e3dada",
                  }}
                >
                  <FormLabel style={{ textAlign: "left" }}>
                    Vehicule Type
                  </FormLabel>
               
                  <Car />
                 
                  <FormGroup style={{ marginTop: "2%" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={gilad}
                          onChange={handleChange}
                          name="gilad"
                          style={{ color: "#21BF18" }}
                        />
                      }
                      label="Gilad Gray"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={jason}
                          onChange={handleChange}
                          name="jason"
                          style={{ color: "#21BF18" }}
                        />
                      }
                      label="Jason Killian"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={antoine}
                          onChange={handleChange}
                          name="antoine"
                          style={{ color: "#21BF18" }}
                        />
                      }
                      label="Antoine Llorca"
                    />
                  </FormGroup>
                  <FormHelperText>Be careful</FormHelperText>
                </FormControl>






                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                  style={{
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    padding: "4%",
                    width: "70%",
                    borderRadius: "20px",
                    border: "0.5px solid #e3dada",
                  }}
                >
                  <FormLabel style={{ textAlign: "left" }}>
                    Vehicule Type
                  </FormLabel>
                  <FormGroup style={{ marginTop: "2%" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={gilad}
                          onChange={handleChange}
                          name="gilad"
                          style={{ color: "#21BF18" }}
                        />
                      }
                      label="Gilad Gray"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={jason}
                          onChange={handleChange}
                          name="jason"
                          style={{ color: "#21BF18" }}
                        />
                      }
                      label="Jason Killian"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={antoine}
                          onChange={handleChange}
                          name="antoine"
                          style={{ color: "#21BF18" }}
                        />
                      }
                      label="Antoine Llorca"
                    />
                  </FormGroup>
                  <FormHelperText>Be careful</FormHelperText>
                </FormControl>

                <Box
                  sx={{
                    width: 250,
                    width: "70%",
                    marginLeft: "15%",
                    padding: "5%",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    border: "0.5px solid #e3dada",
                    borderRadius: "20px",
                  }}
                >
                    <h6 style={{textAlign:"start"}}>
                        Price Range
                    </h6>
                   
                
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    style={{ marginTop: "2%" }}
                  >
                    <Grid item>
                      <AttachMoney sx={{ color: "#21BF18", fontSize: "4vh" }} />
                    </Grid>
                    <Grid item xs>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChangeslider}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="success"
                        min={0}
                        max={12000}
                      />
                       <Box style={{display:"flex",justifyContent:"space-between"}}>
                    <p
                    id="input-slider"
                    gutterBottom
                    style={{marginLeft:"5%"}}
                  >
                    Min Price

                  </p>
                  <p
                    id="input-slider"
                    gutterBottom
                  >
                    Max Price
                  </p>

                  
                    </Box>
                    </Grid>
                  </Grid>
                </Box>


              </Grid>




            </Grid>

            <Grid xs={12} md={9} lg={9} container style={{ textAlign: "center" }}>
                  { loading == false && cars.map((car)=>{
                    return(
                 
                    <Grid xs={12} md={4} lg={4}   style={{ textAlign: "center",padding:"2%" }}>
                  <MDBCard className="text-black" style={{ padding: "5px",border: "1px solid #e3dada" }}>
                      <MDBCardImage
                        src={car.ImgM}
                        position="top"
                        alt="Apple Computer"
                      />
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <h3 className="big"></h3>
                          


                        { (car.likes.filter(e => e._id === user._id).length > 0) ? (
                        <p className="small text-danger"><Favorite   color="none" onClick={()=>{UnLike(user._id,car._id);GetCars()}} /> {car.likes.includes(user._id)} {car.likes.length}
                        </p>):
                        <p className="small text-danger">
                        <FavoriteBorderOutlined   color="none" onClick={()=>{Like(user._id,car._id);GetCars()}} /> {car.likes.includes(user._id)} {car.likes.length}
                      </p>
                                     
                                     
                                     
                                     
                                     }

                        






                        </div>

                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="mb-0">
                            <PeopleAlt color="success" /> {car.Seats}
                          </h5>
                          <h5 className="mb-0">
                            <LocalGasStation color="success" /> {car.FuelType}
                          </h5>
                          <h5 className="mb-0">
                            <SensorDoor color="success" /> {car.Doors}
                          </h5>
                          <h5 className="mb-0">
                            <BuildCircle color="success" /> {car.Engin}
                          </h5>
                        </div>

                        <div class="d-flex justify-content-between ">
                          <h5 class="mb-0">
                            Disponible Pour
                            <h4>{car.Price} DA/J</h4>
                          </h5>


                        </div>
                        <div class="d-flex justify-content-between ">
                          <MDBBtn className="me-1" color="success" onClick={()=>{navigate(`/card/${car._id}`)}}>
                            Plus de details{" "}
                            <ArrowForwardIosOutlined
                              style={{ fontSize: "20px" }}
                            />
                          </MDBBtn>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </Grid>

)

                  })}
                  






             


                 
               
              </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}



Shop.propTypes={
GetCars:PropTypes.func.isRequired,
car:PropTypes.object.isRequired,
Like:PropTypes.func.isRequired,
auth:PropTypes.object.isRequired,
UnLike:PropTypes.func.isRequired,

}


const mapsStateToProps = state=>({
  car:state.car,
  auth:state.auth
})

export default connect(mapsStateToProps, {GetCars,Like,UnLike})(Shop);

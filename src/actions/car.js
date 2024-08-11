import { CARADD_SUCCESS,CARADD_FAIL, CHANGEP_SUCCESS, CHANGEP_FAIL,CARSLOAD_FAIL,CARSLOAD_SUCC, CARLOAD_SUCC, CARLOAD_FAIL, CARRENT_SUCC, CARRENT_FAIL } from "./types";
import axios from "axios";
import { setAlert } from "./alert";





export const changeprice = ({serial,price})=> async(dispatch)=>{
try {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({serial,price});
  const res = await axios.put(
    "http://localhost:5000/api/cars/changep",
    body,
    config
  );
  dispatch({
    type: CHANGEP_SUCCESS,
    payload: res.data,
  });

  console.log(res.data);


} catch (error) {
  const errors = error.response.data.errors;
  if (errors) {
    errors.forEach((error) => dispatch(setAlert(error.msg)));
  }
  dispatch({
    type: CHANGEP_FAIL,
  });
  console.error(error.response.data);
  
}
}






export const LikeCar = ({serial,user})=> async(dispatch)=>{
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const body = JSON.stringify({serial,user});
    const res = await axios.put(
      "http://localhost:5000/api/cars/like",
      body,
      config
    );
    dispatch({
      type: CHANGEP_SUCCESS,
      payload: res.data,
    });
  
    console.log(res.data);
  
  
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
    dispatch({
      type: CHANGEP_FAIL,
    });
    console.error(error.response.data);
    
  }
  }

export const addCar =
  ({Brand,Model,Snb,Body,Seats,Doors,FuelT,Engine,Year,Trans,Price,ABS,ESP,AIDE,imagePC,imagePC1,imagePC2}) =>
  async (dispatch) => {
    try {
        const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({Brand,Model,Snb,Body,Seats,Doors,FuelT,Engine,Year,Trans,Price,ABS,ESP,AIDE,imagePC,imagePC1,imagePC2});
      console.log(body)
      const res = await axios.post(
        "http://localhost:5000/api/cars",
        body,
        config
      );
      dispatch({
        type: CARADD_SUCCESS,
        payload: res.data,
      });

      console.log(res.data);
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg)));
      }
      dispatch({
        type: CARADD_FAIL,
      });
      console.error(error.response.data);
    }  
    }


export const GetCars =()=>async(dispatch)=>{
  try {

    const res = await axios.get('http://localhost:5000/api/cars')
    dispatch({
      type:CARSLOAD_SUCC,
      payload:res.data
    })
    
  } catch (error) {
    dispatch({
      type: CARSLOAD_FAIL,
    });
    console.error(error.response.data);
    
  }
}




export const GetCar =(ID)=>async(dispatch)=>{
  try {

    const res = await axios.get(`http://localhost:5000/api/cars/${ID}`)
    dispatch({
      type:CARLOAD_SUCC,
      payload:res.data
    })
    
  } catch (error) {
    dispatch({
      type: CARLOAD_FAIL,
    });
    console.error(error.response.data);
    
  }
}















    

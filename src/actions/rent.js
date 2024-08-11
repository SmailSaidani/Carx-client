import { CARADD_SUCCESS,CARADD_FAIL, CHANGEP_SUCCESS, CHANGEP_FAIL,CARSLOAD_FAIL,CARSLOAD_SUCC, CARLOAD_SUCC, CARLOAD_FAIL, CARRENT_SUCC, CARRENT_FAIL,CARRENTUSER_SUCC,CARRENTUSER_FAIL, CARUNRENTUSER_SUCC, CARUNRENTUSER_FAIL } from "./types";
import axios from "axios";
import { setAlert } from "./alert";




export const Rent =(user,ID)=>async(dispatch)=>{
    try {
      console.log("hello")
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const body = JSON.stringify({user,ID});
      const res = await axios.put(
        `http://localhost:5000/api/cars/rent/${ID}`,
        body,
        config
      );
      

      const res1 = await axios.put(
        `http://localhost:5000/api/profile/rent/${ID}`,
        body,
        config
      );
      dispatch({
        type: CARRENTUSER_SUCC,
        payload: res1.data,
      });
    
      console.log(res.data);
      console.log(res1.data);

    
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg)));
      }
      dispatch({
        type: CARRENT_FAIL,
      });
      console.error(error.response.data);
      
    }
  }




  export const UnRent =(user,ID)=>async(dispatch)=>{
    try {
      console.log("hello")
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const body = JSON.stringify({user,ID});
      const res = await axios.put(
        `http://localhost:5000/api/cars/unrent/${ID}`,
        body,
        config
      );
      

      const res1 = await axios.put(
        `http://localhost:5000/api/profile/unrent/${ID}`,
        body,
        config
      );
      dispatch({
        type: CARUNRENTUSER_SUCC,
        payload: res1.data,
      });



      const res3 = await axios.get(`http://localhost:5000/api/cars/${ID}`)
      dispatch({
        type:CARLOAD_SUCC,
        payload:res.data
      })
      console.log(res.data);
      console.log(res1.data);

    
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg)));
      }
      dispatch({
        type: CARUNRENTUSER_FAIL,
      });
      console.error(error.response.data);
      
    }
  }

  
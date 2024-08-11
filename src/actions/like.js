import { CARADD_SUCCESS,CARADD_FAIL, CHANGEP_SUCCESS, CHANGEP_FAIL,CARSLOAD_FAIL,CARSLOAD_SUCC, CARLOAD_SUCC, CARLOAD_FAIL, CARRENT_SUCC, CARRENT_FAIL,CARRENTUSER_SUCC,CARRENTUSER_FAIL, UPDATE_LIKES } from "./types";
import axios from "axios";
import { setAlert } from "./alert";




export const Like =(user,ID)=>async(dispatch)=>{
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const body = JSON.stringify({user,ID});
      const res = await axios.put(
        `http://localhost:5000/api/cars/like/${ID}`,
        body,
        config
      );
      dispatch({
        type: UPDATE_LIKES,
        payload: {ID, likes : res.data},
      });

      const res1 = await axios.put(
        `http://localhost:5000/api/profile/like/${ID}`,
        body,
        config
      );
      dispatch({
        type: UPDATE_LIKES,
        payload: res1.data,
      });


      
    const res3 = await axios.get('http://localhost:5000/api/cars')
    dispatch({
      type:CARSLOAD_SUCC,
      payload:res3.data
    })
    



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

  export const UnLike =(user,ID)=>async(dispatch)=>{
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const body = JSON.stringify({user,ID});
      const res = await axios.put(
        `http://localhost:5000/api/cars/unlike/${ID}`,
        body,
        config
      );
      dispatch({
        type: UPDATE_LIKES,
        payload: {ID, likes : res.data},
      });

      const res1 = await axios.put(
        `http://localhost:5000/api/profile/unlike/${ID}`,
        body,
        config
      );
      dispatch({
        type: UPDATE_LIKES,
        payload: res1.data,
      });


      
    const res3 = await axios.get('http://localhost:5000/api/cars')
    dispatch({
      type:CARSLOAD_SUCC,
      payload:res3.data
    })
    



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

  
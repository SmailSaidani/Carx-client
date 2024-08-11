import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import  Al from '@mui/material/Alert'
const Alert = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert =>(
  
          <Al  key={alert.id} severity="error">{alert.msg}</Al>

));

Alert.propTypes = {
alerts : PropTypes.array.isRequired,
}



const mapStateToProps = state => ({
    alerts : state.alert
})
export default connect (mapStateToProps)(Alert)


//warning.js
import React from 'react'
import * as Animatable from 'react-native-animatable'

const WarningPassword = ({isVisible}) => {
  return (
    isVisible && (
        <Animatable.Text
          style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginLeft: 8 }}
          duration={4000}
          animation="fadeInLeft"
        >
          Password must be at least 8 characters long
        </Animatable.Text>
  ));
}

export const WarningPhoneNumber = ({isVisible}) => {
  return (
    isVisible && (
        <Animatable.Text
          style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginLeft: 8 }}
          duration={4000}
          animation="fadeInLeft"
        >
         Phone number must be provided
        </Animatable.Text>));
}

export const WarningEmail = ({isVisible}) => {
    return (
      isVisible && (
          <Animatable.Text
            style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginLeft: 8 }}
            duration={4000}
            animation="fadeInLeft"
          >
           Invalid Email
          </Animatable.Text>));
  }

  export const WarningEmailEmpty = ({isVisible}) => {
    return (
      isVisible && (
          <Animatable.Text
            style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginLeft: 8 }}
            duration={4000}
            animation="fadeInLeft"
          >Email must be provided
          </Animatable.Text>));
  }

export default WarningPassword
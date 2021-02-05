import React, { Component } from 'react';
import Proptypes from 'prop-types';

 const Sum = (props) => {

    console.log(props);

    return (
        <h1>{props.a}+{props.b}={props.a +props.b}</h1>
    );
 }


 Sum.prototype = {
     a: Proptypes.number.isRequired,
     b: Proptypes.number.isRequired
 }
export default Sum;
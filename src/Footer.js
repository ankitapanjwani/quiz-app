import React, { Component } from 'react';

import './footer.css';
import Sum from './sum';
class  Footer extends Component {
   state ={
       a: 10,
       b: 20
   }
    render() { 
        return ( 
           
            <footer className="footer">
             <Sum a={this.state.a} b={this.state.b}/>
            @copyright Footer Cybage
            </footer>

         );
    }
}
 
export default Footer;


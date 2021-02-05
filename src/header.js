import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import './header.css';
import logo from'./assets/portfolio/kids.png';

function Header() {
  return (
         <React.Fragment>
            <>
            
               
               <section className="sectionheader">
               <img src={logo} className="logoImage" alt="BigCo Inc. logo"/>
               </section>
            </>
            
         </React.Fragment>
  );
}

export default Header;

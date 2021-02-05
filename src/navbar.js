import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button,Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import './header.css';



class Navigation extends Component{


   
    render(){
    return(
        <React.Fragment>
        <>
            <Navbar bg="dark" className="navcolor" variant="dark">
                <Navbar.Brand href="#home">Quiz App</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Catgeories</Nav.Link>
                <Nav.Link href="#features">Login</Nav.Link>
                <Nav.Link href="#pricing">SignUp</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button className="searchbtn">Search</Button>
                </Form>
            </Navbar>
            </>
            </React.Fragment>
    );
}
}

export default Navigation;
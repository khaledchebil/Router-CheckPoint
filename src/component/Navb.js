import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Navb = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand >Movie List Search</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to='/'>Home</Link></Nav.Link>
      <Nav.Link><Link to='/app'>Movies</Link></Nav.Link>
      <Nav.Link><Link to='/about'>About</Link></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navb

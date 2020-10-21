import React from 'react'
import {  Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='tc ma4'>
   <Card>
  <Card.Header>Information</Card.Header>
  <Card.Body>
    {/* <Card.Title>Special title treatment</Card.Title> */}
    <Card.Text>
      for further information, please contact our hub, in Tunis, Sousse and Sfax.. Tel: +216 ..... 
    </Card.Text>
    <Link to='/'>
    <Button variant="primary">Home</Button>
    </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default Footer

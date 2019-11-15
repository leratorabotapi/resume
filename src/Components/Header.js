import React from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import profile from '../Images/about.jpg'

const h4 = {
	fontSize: '18px',
	marginTop: '10%',
  };

  const h1 = {
	fontSize: '60px',
	paddingBottom: '5px',
  };

  const h2 = {
	fontSize: '22px',
	marginRight: '40%',
  };

function Header(props) {
  return (<header className="App-header">
<Container>	  
  <Row>
    <Col>
	<h4 style={h4} >Hello</h4>
	<h1 style={h1}>I'm Lerato</h1>
	<h2 style={h2}>Full Stack Web Developer and aspiring UX/UI Designer</h2>
	<Button className="button raised btn-light">Hire Me</Button>
	</Col>
    <Col><Image className="me" src={profile} width="450px" fluid /></Col>
  </Row>
</Container>
	  </header>);
}

export default Header;
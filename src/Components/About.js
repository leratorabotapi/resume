import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';


const p1 = {
	fontSize: '16px',
	marginRight: '20%',
  };

  const p = {
	fontSize: '18px',
	paddingBottom: '5px',
	marginRight: '20%',
  };

  const h2 = {
	fontSize: '48px',
	marginTop: '10%',
	paddingBottom: '10px',
  };

function Header(props) {

  return (<header className="App-about">
	  <Container>
  <Row>
    <Col>
	<h2 style={h2} >About Me</h2>
	<p style={p1}>Currently in Cape Town South Africa / University of Cape Town (2020)</p>
	</Col>
    <Col>
	<p style={p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	<Button className="button raised btn-light btn-space" href="https://github.com/leratorabotapi">View Works</Button>
	<Button className="button raised btn-light" href="#" >Download Resume</Button>
	</Col>
  </Row>
</Container>
	  </header>);
}

/* To be able to use the code that we have written in this module in a different module (i.e. JavaScript file),
then we have to export the code that we want to make available outside of this module. Below we export the function called 'Header'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default Header;
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
	<p style={p1}>Currently residing in Cape Town, South Africa</p>
	</Col>
    <Col>
	<p style={p}>I am continuously motivated and committed to learning and inspiring through my love for creating user experiences and products that not only push boundaries but try to redefine them. I believe in serving through leadership and being an asset to my colleagues through engagement and encouragement. I take initiative in my personal and professional life to be efficient at what I do and apply myself further to what I enjoy - and yield better results, regardless of the resources available. I am open to learning and I never shy away from engaging with my mistakes, to ultimately do better using those experiences.</p>
	<Button className="button raised btn-light btn-space" href="https://github.com/leratorabotapi">View Works</Button>
	<Button className="button raised btn-light" href="https://drive.google.com/file/d/12EHCRP3XVYWsbmPCDgbfmJkyUPTunQg9/view?usp=sharing">Download Resume</Button>
	</Col>
  </Row>
</Container>
	  </header>);
}

/* To be able to use the code that we have written in this module in a different module (i.e. JavaScript file),
then we have to export the code that we want to make available outside of this module. Below we export the function called 'Header'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default Header;
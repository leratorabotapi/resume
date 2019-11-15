import React from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';

import html from '../Images/icons/html-5.png'
import css from '../Images/icons/css3.png'
import javascript from '../Images/icons/javascript.png'
import bootstrap from '../Images/icons/bootstrap.png'
import react from '../Images/icons/react-native.png'
import npm from '../Images/icons/npm.png'
import node from '../Images/icons/nodejspng.png'
import material from '../Images/icons/material-ui.png'
import jquery from '../Images/icons/jquery.png'
import express from '../Images/icons/express1.png'
import Paragraph from './Paragraph';

function Header(props) {
  return (<header className="App-skills" fluid>
	  <Container fluid>
		  <Container>
			<Row>
				<h1>My Skills</h1>
				<br />
			</Row>

			<Row>
				<Paragraph />
			</Row>

		  <Row className="raised button strip">
			  <Col md="12"><h4>Programming Languages</h4></Col>
			  <Col><Image src= {html} width="75"
        height="75" /><p>HTML5</p></Col>
			  <Col><Image src= {css} width="75"
        height="75" /><p>CSS3</p></Col>
		      <Col><Image src= {javascript} width="75"
        height="75" /><p>JavaScript</p></Col>
		<Col><Image src= {jquery} width="75"
        height="75" /><p>Jquery</p></Col>
			  <Col><Image src= {bootstrap} width="75"
        height="75" /><p>Bootstrap</p></Col>
		<Col><Image src= {material} width="75"
        height="75" /><p>Materia-UI</p></Col>
			  <Col><Image src= {react} width="75"
        height="75" /><p>React JS</p></Col>
		<Col><Image src= {node} width="75"
        height="75" /><p>Node JS</p></Col>
		<Col><Image src= {express} width="120"
        height="75" /><p>Express JS</p></Col>
			  <Col><Image src= {npm} width="75"
        height="75" /><p>npm</p></Col>
		  </Row>
		  </Container>
	</Container>
	  </header>);
}

export default Header;
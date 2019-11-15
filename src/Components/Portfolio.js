import React from 'react';
import { Container } from 'react-bootstrap';
import Work from './Work'

function Header(props) {
  return (<header className="App-portfolio">
<Container>

	<h1>Work Experience</h1>
  <Work />
</Container>
	  </header>);
}

export default Header;
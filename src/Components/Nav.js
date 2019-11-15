/* This is an example of a functional component. We make this component functional instead
of stateful because we none of the data associated with this component changes over time.

Notice that we can use props to indicate the name of the person we want to welcome in the header component.
However, there is no way of dynamically changing this value in our app at this time. Therefore this component is functional.

Notice how the props 'name' and 'loggedIn' are passed through to this functional Component in App.js. */

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import nameLogo from '../Images/letter.png';

function Header(props) {
	/*Notice the use of the tenary/conditional operator below. If the value of props.loggedIn is true, then we say 'Hello' 
	to that user, else we say 'Please log in.' More about the tenary operator here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */
  return (<header>
	  <Navbar className="navbar" collapseOnSelect expand="lg" bg="anitiquewhite" variant="light">
	  <Navbar.Brand href="#home">
      <img
        src={nameLogo}
        width="35"
        height="35"
        className="d-inline-block align-top"
        alt="L"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    </Nav>
  </Navbar.Collapse>
</Navbar>
	  </header>);
}

/* To be able to use the code that we have written in this module in a different module (i.e. JavaScript file),
then we have to export the code that we want to make available outside of this module. Below we export the function called 'Header'.
Notice how we import this function in App.js. Every 'import' statement must match an 'export' statement in the module we want to expose. */
export default Header;
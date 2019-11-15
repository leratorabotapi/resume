/*The App component is the container for all other React components. By default the App component is rendered by calling ReactDOM.render() in the index.js file */

import React, {Component} from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Education from './Components/Education';
import './App.css';

/*Below we import all the Components we created in the 'Components' directory.
Remember that you can only import components, if you have added an export statement to the module
which defines the component. */
import Header from './Components/Header';
import Skills from './Components/Skills'

/*Notice how we add the <Header>, <Task> and <Timer>
components below. Notice that we also have a link to a stylesheet in this App.js component.
The reason for this is that we are using some components from React-Bootstrap.
https://react-bootstrap.github.io/getting-started/introduction/ */
class App extends Component {
  render() {
    return (
      <div className="App">
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
  crossorigin="anonymous"
/>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <footer></footer>
      </div>
    );
  }
}

//Notice that the App class of this module is exported. This is so that it can be imported and used in Index.js where the ReactDom.Render() method is called
//to render this App component.
export default App;
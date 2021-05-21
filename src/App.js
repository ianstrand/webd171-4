import React from 'react';
import './App.css';

import Navbarwith from './components/Navbar.js';
import Bodynav from './components/Body.js';
import Footer from './components/Footer.js';

const objects=[
  {link:"http://localhost:3000/#home", title:"Home"},
  {link:"http://localhost:3000/#page2", title:"Page 2"},
  {link:"http://localhost:3000/#page3", title:"Page 3"}
]

class App extends React.Component {

    render() {
      return (
		<React.Fragment>
		  <Navbarwith name="Ian Strand's Navbar" myobjects={objects} />
		  <Bodynav myobjects={objects} />
		  <Footer name="Ian Strand's Footer" myobjects={objects} />
		</React.Fragment>
		);
  	}
}

export default App;
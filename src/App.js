import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Books from './containers/Books/Books'
import Catergories from './containers/Categories/Catergories'


function App() {
  return (
    <div className="App">
		
		<Router>
		
			<Route name="home" exact path="/" component={Catergories} />   
			<Route name="books" exact path="/books/:topic" component={Books} />   
			
		</Router>
      
      {/* <Books /> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import RegisterUser from './Container/RegisterUser/RegisterUser';
import ListUser from './Container/ListUser/ListUser'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  	return (
		<BrowserRouter>
		  <div className="App">
		    <section className='outer-cont'>
		    	<Switch>
		    	  <Route path="/list-user"><ListUser /></Route>
		    	  <Route path="/"><RegisterUser /></Route>
		    	</Switch>
		    </section>
		  </div>
		</BrowserRouter>
  	);
}

export default App;

import React from 'react';
import './App.scss';
import Main from './components/Main/Main'
import SignIn from './components/SignIn/SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register/Register';

function App() {





  return (
    <div className="App">
      <div className="body">

    <Router>
      <Switch>

        <Route path='/main'>
          <Main />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/'>
          <SignIn />
        </Route>
         
      </Switch>
    </Router>


      </div>

    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Main from './components/Main/Main'
import SignIn from './components/SignIn/SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Feed from './components/Feed/Feed';
function App() {





  return (
    <div className="App">
      <div className="body">

    <Router>
      <Switch>

      <Route exact path='/'>
          <Main />
        </Route>

        <Route path='/feed'>
        <Feed username = "rayla" />
        </Route>

      <Route path='/signin'>
          <SignIn />
        </Route>
        
        <Route path="/profile/:username">
          <Profile />
        </Route>

        <Route path='/chat'>
          <Main />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>


         
      </Switch>
    </Router>


      </div>

    </div>
  );
}

export default App;

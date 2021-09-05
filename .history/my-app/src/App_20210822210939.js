import React from 'react'

// Components
import TopBar from './components/TopBar'
import Home from './pages/Home/Home'
import Single from './pages/Single/Single'
import Write from './pages/Write'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
// css
import './css/index.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/">
            <Home/>
        </Route>
        <Route path="/register">
            <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

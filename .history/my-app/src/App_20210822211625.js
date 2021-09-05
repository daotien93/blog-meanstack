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
  const user = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/register">
          {user ? <Home/> : <Register/>}
        </Route>
        <Route path="/login">
        {user ? <Home/> : <Login/>}
        </Route>
        <Route path="/write">
            <Write/>
        </Route>
        <Route path="/setting-user">
            <Settings/>
        </Route>
        <Route path="/post:postId">
            <Single/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
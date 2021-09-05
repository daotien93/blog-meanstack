import React from 'react'

// Components
import TopBar from './components/TopBar'
import Home from './pages/Home/Home'

// css
import './css/index.css'
import Single from './pages/Single/Single'
import Write from './pages/Write'

function App() {
  return (
    <>
      <TopBar />
      <Write/>
    </>
  );
}

export default App;

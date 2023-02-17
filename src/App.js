// import { Route, Routes } from 'react-router-dom';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './screens/Home.js';
import About from './screens/About.js';
import Projects from './screens/Projects.js';
import Articles from './screens/Articles.js';

const App = () => {
  return (
    <div className="App_Outer">
      <div className="App_Inner1">Roshni Prasad </div>
      <img src="https://avatars.githubusercontent.com/u/84218269?v=4" width="200px" align="left" border="3"></img>

      <BrowserRouter>
        <div className="App_Inner2">
          <div className="App_Inner3">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route exact path="/Projects" element={<Projects />} />
              <Route path="/Articles" element={<Articles />} />
            </Routes>
          </div>
          <Header />
        </div>
      </BrowserRouter>

    </div>
  )
}


export default App;


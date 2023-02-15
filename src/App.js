// import { Route, Routes } from 'react-router-dom';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './screens/Home.js';
import About from './screens/About.js';

const App = () => {
  return (
    <div className="App_Outer">
      <div className="App_Inner1">Roshni Prasad </div>
      

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App;


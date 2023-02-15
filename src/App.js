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
      <div className="App_Inner2">Energetic and passionate 21 years old college student, currently pursuing computer science and engineering in Muthoot Institute Of Technology and Science, who wish to see herself as a software engineer.</div>

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


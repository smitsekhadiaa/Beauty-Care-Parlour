import './App.css';
import React from 'react';
import Home from './Home';
import Main from './Main';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Main/> */}
      {/* <Home/> */}
      <BrowserRouter> 
        <Routes>

          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/" element={<Main/>} />


        </Routes>
      </BrowserRouter>
     
    </div> 
  );
}

export default App;

import './scss/app.scss';
import React  from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Products from './components/Products';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar/>
      <div className="store">
      <Products/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

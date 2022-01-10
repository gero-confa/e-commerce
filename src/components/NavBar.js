import React  from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import logo from "../assets/images/store-svgrepo-com.svg";
import cart from "../assets/images/cart-svgrepo-com.svg";
import user from "../assets/images/user-svgrepo-com.svg";


export default function NavBar() {
  return (
    <> 
      <div>

      {/* <Router>
        <Routes>
          <Route path="/">
            <h2>home</h2>
          </Route>
          <Route path="/acerca">
            <h2>acerca</h2>
          </Route>
          <Route path="/conctacto">
            <h2>Contacto</h2>
          </Route>
        </Routes>
      </Router> */}

        <nav>
          <div>
            <img src={logo} alt="Logo" className="logo"></img>
          </div>
          <div>
            <ul>
              <li>

              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
          <div>
            <img src={cart} className="navIcon" alt="Cart"></img>
            <img src={user} className="navIcon" alt ="Login"></img>
          </div>
        </nav>
      </div>
    </>
  )
}

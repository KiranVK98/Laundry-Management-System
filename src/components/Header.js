import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Header.css";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Services from "./Services";
import Login from "./login.components";
import Register from "./register.components";
import AuthService from "../Services/auth.services";
import DashEmp from "./DashEmp";
import DashManager from "./DashManager";
import DashUser from "./DashUser";
import DashAdmin from "./DashAdmin";
import ManageEmployee from "./ManageEmployee";
import ManageEquipment from "./ManageEquipment";
import ManageVendor from './ManageVendor';
import ManageStoreLocation from './ManageStoreLocation';

class Header extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showDashAdmin: false,
      showDashManager: false,
      showDashUser: false,
      showDashEmp: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showDashUser: user.roles.includes("ROLE_USER"),
        showDashManager: user.roles.includes("ROLE_MANAGER"),
        showDashEmp: user.roles.includes("ROLE_EMPLOYEE"),
        showDashAdmin: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const {
      currentUser,
      showDashAdmin,
      showDashEmp,
      showDashManager,
      showDashUser,
    } = this.state;

    return (
      <Router>
        <div>
          <nav className="Nav">
            <div>
              <img src="./images/logo_new.png" />

              <li>
                <Link to="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" activeClassName="active">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us</Link>
              </li>
              <li>
                  <Link to={"/Login"}>
                    Login
                  </Link>
                </li>

                <li>
                  <Link to={"/Register"}>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <a href= "https://dxp9406uta.wordpress.com/">Blog</a>
                </li>

              {showDashUser && (
                <li className="nav-item">
                  <Link to={"/DashUser"} className="nav-link">
                    DashUser
                  </Link>
                </li>
              )}

              {showDashAdmin && (
                <li className="nav-item">
                  <Link to={"/DashAdmin"} className="nav-link">
                    DashAdmin
                  </Link>
                </li>
              )}

              {showDashEmp && (
                <li className="nav-item">
                  <Link to={"/DashEmp"} className="nav-link">
                    DashEmp
                  </Link>
                </li>
              )}
              {showDashManager && (
                <li className="nav-item">
                  <Link to={"/DashManager"} className="nav-link">
                    DashManager
                  </Link>
                </li>
              )}
            </div>
          </nav>

          <div>
            <Switch>
              <Route exact path={["/", "/Home"]} component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/ContactUs" component={ContactUs} />
              <Route exact path="/Services" component={Services} />
              <Route exact path="/AboutUs" component={AboutUs} />
              <Route exact path="/ContactUs" component={ContactUs} />
              <Route path="/DashUser" component={DashUser} />
              <Route path="/DashEmp" component={DashEmp} />
              <Route path="/DashManager" component={DashManager} />
              <Route path="/DashAdmin" component={DashAdmin} />
              <Route path="/ManageEmployee" component={ManageEmployee} />
              <Route path="/ManageVendor" component={ManageVendor} />
              <Route path="/ManageEquipment" component={ManageEquipment} />
              <Route path="/ManageStoreLocation" component={ManageStoreLocation} />

            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Header;

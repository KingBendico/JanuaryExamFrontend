import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem} from "react-bootstrap";
import Login from "./login";
import CreateContact from "./createContact"
import EditContact from "./editContact"
import AllContact from "./allContacts"
import DeleteContact from "./deleteContact"
import Find from "./findContact"
import Home from "./home";
import Readme from "./readMe";
import facade from "./apiFacade";
import ValidateRoleSite from "./validateRoleSite";
import AdminSite from "./adminSite";
import Hotels from "./hotels";
import Booking from "./booking";

const NavBarIO = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Header loggedIn={loggedIn} />
        <div>
          <Content setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </div>
      </Router>
    </>
  );
};


const Header = (props) => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            Benjamins eksamensopgave (januar)
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavItem href="/">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </NavItem>

              <NavItem href="/Readme">
                <Nav.Link as={Link} to="/Readme">
                  Readme
                </Nav.Link>
              </NavItem>   
   
              <ValidateRoleSite loggedIn={props.loggedIn} />
            </Nav>

            <Nav>
              <NavItem href="/Login">
                <Nav.Link as={Link} to="/Login">
                  <IsLoggedIn loggedIn={props.loggedIn} />
                </Nav.Link>
              </NavItem>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

const Content = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Readme" component={Readme} />
      <Route path="/CreateContact" component={CreateContact} />
      <Route path="/Contacts" component={AllContact} />
      <Route path="/Contact" component={Find} />
      <Route path="/EditContact" component={EditContact} />
      <Route path="/DeleteContact" component={DeleteContact} />
      <Route path="/Hotels" component={Hotels} />
      <Route path="/Booking" component={Booking} />
      <Route path="/AdminSite" component={AdminSite} />
    
      <Route path="/Login">
        <Login setLoggedIn={props.setLoggedIn} loggedIn={props.loggedIn} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Switch>
  );
};

const NoMatch = () => {
  return <p>There was no match</p>;
};

const IsLoggedIn = (props) => {
  if (props.loggedIn) {
    const userName = facade.getUserName();
    console.log("IsLoggedIn(), ", userName);
    return <>{userName}</>;
  } else {
    return <>Login</>;
  }
};

export default NavBarIO;
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem} from "react-bootstrap";
import Login from "./login";
import AddCourse from "./addCourse"
import EditCourse from "./editCourse"
import Home from "./home";
import About from "./about";
import facade from "./apiFacade";
import ValidateRoleSite from "./validateRoleSite";
import AdminSite from "./adminSite";
import Courses from "./Courses";


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

              <NavItem href="/About">
                <Nav.Link as={Link} to="/About">
                  About
                </Nav.Link>
              </NavItem>   

              <NavItem href="/Courses">
              <Nav.Link as={Link} to="/Courses">
                          Courses
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
      <Route path="/About" component={About} />
      <Route path="/AddCourse" component={AddCourse} />
      <Route path="/EditCourse" component={EditCourse} />
      <Route path="/Courses" component={Courses} />
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

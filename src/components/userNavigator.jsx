import React from "react";
import { NavDropdown, NavItem, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const UserNavigator = () => {
  return (
  <Nav>
    
{/* 
    <NavDropdown title="Contact" id="basic-nav-dropdown">
    <NavDropdown.Item as={Link} to="/CreateContact">
     Create Contact
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/Contacts">
      All Contacts
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/Contact">
      Find Contact
    </NavDropdown.Item>
   <NavDropdown.Item as={Link} to="/EditContact">
   Edit Contact
 </NavDropdown.Item>
 <NavDropdown.Item as={Link} to="/DeleteContact">
  Delete Contact
 </NavDropdown.Item>
 </NavDropdown> */}


<NavItem href="/Courses">
<Nav.Link as={Link} to="/Courses">
  Courses
</Nav.Link>
</NavItem>

 </Nav>
 
  );
};




export default UserNavigator;

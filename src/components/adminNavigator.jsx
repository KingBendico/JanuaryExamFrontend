import React from "react";
import { NavDropdown, NavItem, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminNavigator = () => {
  return (
     <Nav>
    <NavItem href="/AdminSite">
      <Nav.Link as={Link} to="/AdminSite">
        Admin
      </Nav.Link>
    </NavItem>

    <NavItem href="/Courses">
    <Nav.Link as={Link} to="/Courses">
  Courses
  </Nav.Link>
  </NavItem>
 
    <NavDropdown title="Course admin tools" id="basic-nav-dropdown">
    <NavDropdown.Item as={Link} to="/AddCourse">
     Add Course
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/Contacts">
      Add Class
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/Contact">
      Edit Existing Courses
    </NavDropdown.Item>
   <NavDropdown.Item as={Link} to="/EditContact">
      Add New Teachers
 </NavDropdown.Item>
 <NavDropdown.Item as={Link} to="/DeleteContact">
      Classes Offered
 </NavDropdown.Item>
 </NavDropdown> 

 
</Nav>

  );
};


export default AdminNavigator;

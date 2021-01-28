import React from "react";
import { NavDropdown, NavItem, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminNavigator = () => {
  return (
     <Nav>
 
    <NavDropdown title="Course admin tools" id="basic-nav-dropdown">
    <NavDropdown.Item as={Link} to="/AddCourse">
     Add Course
    </NavDropdown.Item>
    <NavDropdown.Item as={Link} to="/AddClass">
      Add Class ((not fully working!!))
    </NavDropdown.Item>
   <NavDropdown.Item as={Link} to="/EditCourse">
     Edit Existing Courses (not fully working!!)
 </NavDropdown.Item>
 <NavDropdown.Item as={Link} to="/ShowClasses">
      Classes Offered (not fully working!!)
 </NavDropdown.Item>
 </NavDropdown> 

 
</Nav>

  );
};


export default AdminNavigator;

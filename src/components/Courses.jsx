import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import facade from "./apiFacade"
import {AllCourses} from "../sites";


const url = AllCourses;
const Courses = () => {
  return (

    <CoursesTable />

  );
  
};

function CoursesTable() {


  const [getCourses, setAllCourses] = useState([]);


  

  useEffect(() => {
    fetchCourses()
}, []);


  const fetchCourses = () => {
    fetch(url, facade.makeOptions("GET", true))
      .then((res) => res.json())
      .then((data) => {
        setAllCourses(data);       
      });
  };
  

  return (
   
      <Container>
        <h2>List of Courses</h2>
       <div>
          <Table striped bordered hover size="sm"> 
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Description</th>

              
                </tr>
              </thead>
              <tbody>
                {getCourses.all &&
                  getCourses.all.map((element) => {
                    return (
                      <tr key={element.id}>

                        <td>{element.courseName}</td>
                        <td>{element.description}</td>
                    
                        
                        
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
            </div>

     
      </Container>
 
  );
}



export default Courses;

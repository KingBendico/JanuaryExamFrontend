import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import { Form, Button } from "react-bootstrap";

const AddCourse = () => {
  
    const initialValue = {
      courseName: "",
      description: "",
    };
    const [course, setCourse] = useState(initialValue);
  
    const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      setCourse({...course,[name]: value});
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      window.alert(JSON.stringify(course));
      facade.addCourse(course.courseName,course.description);
    }
  return (
  <div class="container">
  <div class="row justify-content-center">
  <div class="col-5">
      <h2>Add new course</h2>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Course Name</Form.Label>
      <Form.Control name="courseName" placeholder="Course Name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Course Description</Form.Label>
      <Form.Control name="description" placeholder="Course Description" />
      </Form.Group>
      <Button variant="dark" type="submit">Add Course</Button>
      </Form>
      <p>{JSON.stringify(course)}</p>
      </div>
      </div>
      </div>
  );}

  export default AddCourse;
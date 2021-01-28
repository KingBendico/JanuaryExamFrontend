import React, { useEffect, useState } from "react";
import {GetCourseUrl} from "../sites";
import facade from "./apiFacade";
import { Form, Button } from "react-bootstrap";

const url = GetCourseUrl;
const EditCourse = () => {
  const initialValue = {
    courseName: "",
    description: "",
  };

    const [course, setCourse] = useState({});
    const [find, setFind] = useState("");
    const [submit, setSubmit] = useState("");
    const [editcourse, setEditCourse] = useState(initialValue)
    
    
    
    useEffect(() => {
        getCourse()
    }, [submit]);

const getCourse = async() => {
        await fetch(url+submit, facade.makeOptions("GET", true))
            .then((res) => res.json())
            .then((data) => {
                setCourse(data);
    })};
    

    const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      setFind(value)
    };

    const handleEditChanges = (event) => {
      const target = event.target;
      const value = target.value;
      const courseName = target.courseName;
      setEditCourse({...editcourse,[courseName]: value});
    };

    const handleEditSubmit = (event) => {
      event.preventDefault();
      window.alert(JSON.stringify(editcourse));
      facade.editCourse(submit, editcourse.courseName, editcourse.description);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmit(find)
    }

  return (
    <div class="container">
    <div class="row justify-content-center">
    <div class="col-5">
      <h2>Find Course by Name</h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicCourse">
      <Form.Label>Course</Form.Label>
      <Form.Control name="courseName" placeholder="Enter Course" onChange={handleChange}/>
      </Form.Group>
      <Button variant="dark" type="submit" >Find Course</Button>
      </Form>
      <br></br>
      <Courses
      course={course}/>
     
      <h2>Edit Course</h2>
      <Form onChange={handleEditChanges} onSubmit={handleEditSubmit}>
      <Form.Group controlId="formBasicCourse">
      <Form.Label>Course Name</Form.Label>
      <Form.Control name="courseName" placeholder="Enter Course Name" />
      </Form.Group>
      <Form.Group controlId="formBasicCourse">
      <Form.Label>Course Description</Form.Label>
      <Form.Control name="description" placeholder="Enter Description" />
      </Form.Group>
      <Button variant="dark" type="submit">Edit Course</Button>
      </Form>
      {/* <p>{JSON.stringify(editcourse)}</p> */}
      </div>
      </div>
      </div>
  );
};


const Courses = ({course}) => {
    return(

        <div>
            <h1>course</h1>
        <ul><li>{course.courseName}</li> <li>{course.description}</li></ul>
        </div>
    )
}

export default EditCourse;

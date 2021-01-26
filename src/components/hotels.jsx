import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import facade from "./apiFacade"
import {AllHotels} from "../sites";


const url = AllHotels;
const Hotels = () => {
  return (

    <HotelTable />

  );
  
};

function HotelTable() {


  const [getHotels, setAllHotels] = useState([]);


  
  const searchForm = () => {
    return (
      <div>
          <br />
        <h5>Search for hotels: </h5>
        <input id="inp_User" type="text"></input>
        <button id="btn_User">Search</button>
        <p id="txt_User"></p>
      </div>
    );
  };
  

  useEffect(() => {
    fetchHotels()
}, []);


  const fetchHotels = () => {
    fetch(url, facade.makeOptions("GET", true))
      .then((res) => res.json())
      .then((data) => {
        setAllHotels(data);       
      });
  };
  

  return (
   
      <Container>
        <h2>List of Hotels</h2>
        {searchForm()}
       <div>
          <Table striped bordered hover size="sm"> 
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Price</th>
                  <th>URL</th>
              
                </tr>
              </thead>
              <tbody>
                {getHotels.all &&
                  getHotels.all.map((element) => {
                    return (
                      <tr key={element.id}>

                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>{element.phone}</td>
                        <td>{element.address}</td>
                        <td>{element.price}</td>
                        <td>{element.url}</td>
                        
                        
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
            </div>

     
      </Container>
 
  );
}



export default Hotels;

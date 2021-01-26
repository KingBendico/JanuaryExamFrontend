import React, { useState, useEffect } from "react";
import facade from "./apiFacade";
import { Form, Button } from "react-bootstrap";


function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <>
    <br></br>
    <div class="container">
        <div class="row justify-content-center"> 
        <div class="col-5">       
      <h2>Login</h2>
      <form onChange={onChange}>
        <input type="text" placeholder="User Name" id="username" />
        <input type="password" placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
    </div>
    </div>
    <br></br>
    <AddUser/>
    </>

  );
}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...");

  useEffect(() => {
    facade.fetchData().then((data) => {
      setDataFromServer(data.msg);
    });
  }, []);

  return (
    <div>
      <br></br>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
      <br></br>
    </div>
  );
}

const AddUser = () => {
  
    const initialValue = {
      fname: "",
      password: ""
    };
    const [user, setUser] = useState(initialValue);

    const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      setUser({...user,[name]: value});
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      window.alert(JSON.stringify(user));
      facade.addUser(user.fname,user.password);
    }
  return (
    <div class="container">
    <div class="row justify-content-center"> 
    <div class="col-5">       
      <h2>Add New User</h2>
      <Form onChange={handleChange} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control name="fname" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit">Add Me</Button>
      </Form>
      
      </div>
      </div>
      </div>
    //  <p>{JSON.stringify(user)}</p>

  );
};

function LoginComplete(props) {
  //const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    props.setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => props.setLoggedIn(true));
  };

  return (
    <div>
      {!props.loggedIn ? (
        <LogIn login={login} />
      ) : (   
        <div class="container">
        <div class="row justify-content-center"> 
        <div class="col-5">        
       <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>
        </div>
        </div>
      )}
    </div>
    
  );
}
export default LoginComplete;

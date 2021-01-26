import React, { useState } from "react";
import facade from "./apiFacade";
import { AdminUrlUserCount } from "./../sites";

const url = AdminUrlUserCount;

const AdminSite = () => {
  const [count, setCount] = useState("");
  return (
    <>
    <br></br>
     <div class="container">
        <div class="row justify-content-center"> 
        <div class="col-3">     
      <h4>Antal brugere: {count}</h4>
      <button
        onClick={() =>
          fetch(url, facade.makeOptions("GET", true))
            .then((res) => res.json())
            .then((data) => setCount(data))
        }
      >Hent antal bruger</button>
      </div>
      </div>
      </div>
    </>
  );
};

export default AdminSite;

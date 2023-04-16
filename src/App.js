import React, { Component } from "react"

import { Form } from 'react-bootstrap';
import { useState } from 'react'
import "./App.css"
import 'firebase/database'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { FirebaseApp } from "firebase/app";
import { FirebaseError } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBwhUWme1hEWohS5tmEkb-zJyleAOgtAoo",
  authDomain: "bookcollection-6abfa.firebaseapp.com",
  projectId: "bookcollection-6abfa",
  storageBucket: "bookcollection-6abfa.appspot.com",
  messagingSenderId: "1090454406698",
  appId: "1:1090454406698:web:511a457a445411f4fca553",
  measurementId: "G-N6NEW9TXSP",
  databaseURL:"https://bookcollection-6abfa-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const db = getDatabase();
  const handleSubmit = (event) => {
    event.preventDefault();
    
  }
 
  
  return (
    <form style ={{textAlign:"center",marginTop:"5vh"}}onSubmit={handleSubmit}>
      <label>Enter Book name:
      <input 
        type="text" 
        name="bookname" 
        value={inputs.bookname || ""} 
        onChange={handleChange}
      />
      </label><br /><br />
      <label>Enter Publisher name:
      <input 
        type="text" 
        name="pubname" 
        value={inputs.pubname || ""} 
        onChange={handleChange}
      />
      </label><br /><br />
      <label>Enter Publisher age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <br /><br />
        <label>Enter Publisher Date:
        <input 
          type="date" 
          name="date" 
          value={inputs.date || ""} 
          onChange={handleChange}
        />
        </label><br /><br />
        <input type="submit" />
    </form>
  )
}
export default MyForm

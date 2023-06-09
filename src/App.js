import "./App.css";
import RegistrationForm from "./Registration"
import Login from "./Login";
import Profile from "./Profile";
import { ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import UserForm from "./Form";





function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9292/users");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const API_BASE_URL = "http://localhost:9292"; // Replace with your actual API base URL
  
  // Simulating a user registration
  function registerUser(email, password) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous registration process
      setTimeout(() => {
        const registeredUserName = "123456"; // ID of the registered user
        resolve(registeredUserName);
      }, 2000); // Simulating a 2-second delay
    });
  }

  function loginUser(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const loggedInUserName = "123456"; // ID of the logged-in user
        resolve(loggedInUserName);
      }, 2000); // Simulating a 2-second delay
    });
  }

  async function retrieveUserData(email, password) {
    try {
      const registeredUserId = await registerUser(username, password);
      console.log("User registered with email:", registeredUserId);

      const loggedInUserId = await loginUser(username, password);
      console.log("User logged in with email:", loggedInUserId);

      const userData = await fetchData(loggedInUserId);
      console.log("User data:", userData);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const username = "anitagalina21@gmail.com";
  const password = "password123";
  retrieveUserData(username, password);

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <div className="App">
            <Route exact path="/">
              <RegistrationForm />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/Form">
              <UserForm />
            </Route>
          </div>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Registration'
import Login from './Login'
import Profile from "./Profile";
import { ChakraProvider } from "@chakra-ui/react";


import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Select
} from "@chakra-ui/react";


function App() {

  const [show, setShow] = useState(false);
  return (
    <ChakraProvider>
      <div className="App">
        <RegistrationForm />
        <Login />
        <Profile />
        <FormControl>
          <FormLabel>Water Supply</FormLabel>
          <Select placeholder="Have you received water this week?">
            <option>Yes</option>
            <option>No</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Electricity Blackout</FormLabel>
          <Select placeholder="Are you currently experiencing a power outage?">
            <option>Yes</option>
            <option>No</option>
          </Select>
        </FormControl>
      </div>
    </ChakraProvider>
  );
}








export default App;


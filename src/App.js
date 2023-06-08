import logo from "./logo.svg";
import "./App.css";
import RegistrationForm from "./Registration";
import Login from "./Login";
import Profile from "./Profile";
import { ChakraProvider, Input } from "@chakra-ui/react";

import { useState } from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

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
          <Select
            placeholder="Have you received water this week?"
            onChange={() => setShow(!show)}
          >
            
            <option>Yes</option>
            <option>No</option>
      
          </Select>
        </FormControl>
        {show && (
          <FormControl>
            <Input placeholder="Please provide a brief description" />
          </FormControl>
        )}
        <FormControl>
          <FormLabel>Power Outage</FormLabel>
          <Select
            placeholder="Are you currently experiencing a power outage?"
            onChange={() => setShow(!show)}
          >
            <option>Yes</option>
            <option>No</option>
          </Select>
        </FormControl>
        {show && (
          <FormControl>
            <Input placeholder="Please provide a brief description" />
          </FormControl>
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;

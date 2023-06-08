
import React from 'react'
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

import { useState } from "react";
export const Form = () => {
     const [show, setShow] = useState(false);
  return (
    <div>
      Form
      <FormControl>
        <FormLabel>Water Supply</FormLabel>
        <Select
          placeholder="Have you received water this week?"
          onChange={() => setShow(!show)}
        >
          <option>No</option>
          <option>Yes</option>
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
  );
}

   
 
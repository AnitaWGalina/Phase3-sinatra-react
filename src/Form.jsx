
// import React from 'react'
// import { FormControl, FormLabel, Select } from "@chakra-ui/react";

// import { useState } from "react";
// export const Form = () => {
//      const [show, setShow] = useState(false);
//   return (
//     <div>
//       Form
//       <FormControl>
//         <FormLabel>Water Supply</FormLabel>
//         <Select
//           placeholder="Have you received water this week?"
//           onChange={() => setShow(!show)}
//         >
//           <option>No</option>
//           <option>Yes</option>
//         </Select>
//       </FormControl>
//       {show && (
//         <FormControl>
//           <Input placeholder="Please provide a brief description" />
//         </FormControl>
//       )}
//       <FormControl>
//         <FormLabel>Power Outage</FormLabel>
//         <Select
//           placeholder="Are you currently experiencing a power outage?"
//           onChange={() => setShow(!show)}
//         >
//           <option>Yes</option>
//           <option>No</option>
//         </Select>
//       </FormControl>
//       {show && (
//         <FormControl>
//           <Input placeholder="Please provide a brief description" />
//         </FormControl>
//       )}
//     </div>
//   );
// }

   
 
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./Form.css";


const UserForm = () => {
  const [receivedWater, setReceivedWater] = useState("");
  const [powerOutage, setPowerOutage] = useState("");
  const [waterDescription, setWaterDescription] = useState("");



    const handleSubmit = (e) => {
      e.preventDefault();

      fetch("http://localhost:9292/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        receivedWater: receivedWater,
        powerOutage: powerOutage,
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          history.push("/RegistrationForm");
        });
    };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    console.log("Form submitted:", {
      receivedWater,
      powerOutage,
      waterDescription,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="receivedWater">
          Have you received water this week?
        </label>
        <select
          id="receivedWater"
          value={receivedWater}
          onChange={(e) => setReceivedWater(e.target.value)}
          required
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label htmlFor="powerOutage">
          Are you currently experiencing a power outage?
        </label>
        <select
          id="powerOutage"
          value={powerOutage}
          onChange={(e) => setPowerOutage(e.target.value)}
          required
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {receivedWater === "no" && (
        <div>
          <label htmlFor="waterDescription">Please describe in detail:</label>
          <textarea
            id="waterDescription"
            value={waterDescription}
            onChange={(e) => setWaterDescription(e.target.value)}
            required
          />
        </div>
      )}
      {powerOutage === "yes" && (
        <div>
          <label htmlFor="powerOutage">Please describe in detail:</label>
          <textarea
            id="powerOutage"
            value={powerOutage}
            onChange={(e) => setPowerOutage(e.target.value)}
            required
          />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

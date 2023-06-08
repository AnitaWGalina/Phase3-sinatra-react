import React, { useState } from "react";
import  "./Profile.css";

const UserProfile = () => {
  const [name] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [dateOfBirth] = useState("1990-01-01");
  const [location, setLocation] = useState("New York");
  const [country, setCountry] = useState("United States");
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform save logic for updated email, location, and country
    setEditMode(false);
  };

  const handleCancelClick = () => {
    // Reset the form values and exit edit mode
    setEmail("anitag@example.com");
    setLocation("New York");
    setCountry("United States");
    setEditMode(false);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong>{" "}
        {editMode ? (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          email
        )}
      </p>
      <p>
        <strong>Date of Birth:</strong> {dateOfBirth}
      </p>
      <p>
        <strong>Location:</strong>{" "}
        {editMode ? (
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        ) : (
          location
        )}
      </p>
      <p>
        <strong>Country:</strong>{" "}
        {editMode ? (
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        ) : (
          country
        )}
      </p>
      {editMode ? (
        <div>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Edit Profile</button>
      )}
    </div>
  );
};

export default UserProfile;

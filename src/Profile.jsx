import React, {useState, useMemo, useCallback, useContext} from "react";
import './Profile.css';
import { useState } from "react";
import Group from "./Group";
import Colorbox from "./Colorbox";

import { months, calcButtonTextColor } from "../tools";
import RegistrationForm from "./Registration";

export default function EditableUserProfile({ stored, startEditCallback }) {
  console.log();

  const buttonStyle = {
    backgroundColor: stored.color,
    color: calcButtonTextColor(stored.color),
  };

  return (
    <div>
      <Group>
        <h2>Name:</h2> {stored.name}
      </Group>
      <Group>
        <h2>Date of Birth:</h2> {months.getShortName(stored.month)} {stored.day}
      </Group>
      <Group>
        <h2>Email address</h2>{stored.emailaddress}
      </Group>
      <Group>
        <h2>Country</h2>{stored.emailaddress}
      </Group>
      <Group>
        <h2>Location</h2>{stored.emailaddress}
      </Group>
      <Group>
        <h2>Change Password</h2>{stored.password}
      </Group>
    
    
  <Group>
        <button style={buttonStyle} onClick={startEditCallback}>
          Edit
        </button>
      </Group>
    </div>
  );
}
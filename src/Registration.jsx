import React, { useState } from "react";
import "./Registration.css";
function RegistrationForm() {
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="DOB">
          <label className="form__label" for="DOB">
            DOB{" "}
          </label>
          <input
            type="text"
            name=""
            id="DOB"
            className="form__input"
            placeholder="Date of Birth"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
          />
        </div>
        <div className="Country">
          <label className="form__label" for="Country">
            Country{" "}
          </label>
          <input
            className="form__input"
            type="country"
            id="country"
            placeholder="Country"
          />
        </div>
        <div className="Location">
          <label className="form__label" for="Location">
            Location{" "}
          </label>
          <input
            type="text"
            name=""
            id="Location"
            className="form__input"
            placeholder="Location"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default RegistrationForm;

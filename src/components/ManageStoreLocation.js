import React from "react";
import "./ManageEmployee.css";

function ManageStoreLocation() {
  return (
    <div class="container">
      <div class="button1">
        <a href="/DashAdmin">
          <input type="button" value="Back" />
        </a>
      </div>
      <div class="title">Store Registration</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Store Name</span>
              <input type="text" placeholder="Enter store name" required />
            </div>
            <div class="input-box">
              <span class="details">Store Address</span>
              <input type="text" placeholder="Enter store address" required />
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input type="text" placeholder="Enter store number" required />
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageStoreLocation;

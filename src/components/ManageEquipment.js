import React from "react";
import "./ManageEmployee.css";

function ManageEquipment() {
  return (
    <div class="container">
      <div class="button1">
        <a href="/DashAdmin">
          <input type="button" value="Back" />
        </a>
      </div>
      <div class="title">Equipment Registration</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Equipment Type</span>
              <input type="text" placeholder="Enter equipment type" required />
            </div>
            <div class="input-box">
              <span class="details">Equipment Manufacturing Date</span>
              <input
                type="text"
                placeholder="Enter equipment manufacturing date"
                required
              />
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

export default ManageEquipment;

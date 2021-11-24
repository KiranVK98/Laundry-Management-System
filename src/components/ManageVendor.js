import React from "react";
import './ManageEmployee.css'

function ManageVendor() {
    return (
        <div class="container">
            <div class="button1">
                <a href="/DashAdmin">
                    <input type="button" value="Back"/> 
                </a>    
            </div>
            <div class="title">Vendor Registration</div>
            <div class="content">
              <form action="#">
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Vendor</span>
                        <input type="text" placeholder="Enter vendor name" required/>
                      </div>
                      <div class="input-box">
                        <span class="details">Vendor Contact Number</span>
                        <input type="text" placeholder="Enter vendor contact number" required/>
                      </div>
                      <div class="input-box">
                        <span class="details">Email</span>
                        <input type="text" placeholder="Enter vendor email" required/>
                      </div>
                </div>      
                <div class="button">
                  <input type="submit" value="Register"/>
                </div>
              </form>
            </div>
          </div>
    )
}

export default ManageVendor;
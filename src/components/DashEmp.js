import React from "react";
import './Dash.css'

function DashEmp() {
  return (
    <section id="DashEmp">
      <div class="sidebar">
        <div class="logo-details">
          <span class="logo_name">InstaWash</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#" class="active">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="links_name">Manage Orders</span>
            </a>
          </li>
          <li>
            <a href="/Login">
              <span class="links_name">Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"></i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search..." />
            <i class="bx bx-search"></i>
          </div>
          <div class="profile-details">
            <span class="admin_name">Employee</span>
            <i class="bx bx-chevron-down"></i>
          </div>
        </nav>

        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Orders for today</div>
                <div class="number">20</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bx bx-edit-alt user two"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Available Equipment</div>
                <div class="number">150</div>
                <div class="indicator">
                  <i class="bx bx-down-arrow-alt down"></i>
                  <span class="text">Available Today</span>
                </div>
              </div>
              <i class="bx bxs-washer user three"></i>
            </div>
          </div>
          <div class="sales-boxes">
            <div class="recent-sales box">
              <div class="title">Orders Queue</div>
              <div class="sales-details">
                <ul class="details">
                  <li class="topic">Date</li>
                  <li>
                    <a href="#">13 Oct 2021</a>
                  </li>
                  <li>
                    <a href="#">13 Oct 2021</a>
                  </li>
                  <li>
                    <a href="#">12 Oct 2021</a>
                  </li>
                  <li>
                    <a href="#">11 Oct 2021</a>
                  </li>
                  <li>
                    <a href="#">10 Oct 2021</a>
                  </li>
                  <li>
                    <a href="#">10 Oct 2021</a>
                  </li>
                  <li>
                    <a href="#">10 Oct 2021</a>
                  </li>
                </ul>
                <ul class="details">
                  <li class="topic">Customer</li>
                  <li>
                    <a href="#">Alex Roderigez</a>
                  </li>
                  <li>
                    <a href="#">David Smith</a>
                  </li>
                  <li>
                    <a href="#">Peter Parker</a>
                  </li>
                  <li>
                    <a href="#">Diana Mitchell</a>
                  </li>
                  <li>
                    <a href="#">Martin Paw</a>
                  </li>
                  <li>
                    <a href="#">Doe Alex</a>
                  </li>
                  <li>
                    <a href="#">Aiana Lexa</a>
                  </li>
                  <li>
                    <a href="#">Rexel Mags</a>
                  </li>
                  <li>
                    <a href="#">Tiana Loths</a>
                  </li>
                </ul>
                <ul class="details">
                  <li class="topic">Services Required</li>
                  <li>
                    <a href="#">Wash,Fold</a>
                  </li>
                  <li>
                    <a href="#">Wash,Fold,Iron</a>
                  </li>
                  <li>
                    <a href="#">Iron</a>
                  </li>
                  <li>
                    <a href="#">Dryclean</a>
                  </li>
                  <li>
                    <a href="#">Dryclean</a>
                  </li>
                  <li>
                    <a href="#">Iron</a>
                  </li>
                  <li>
                    <a href="#">Wash,Iron</a>
                  </li>
                  <li>
                    <a href="#">Iron</a>
                  </li>
                  <li>
                    <a href="#">Wash,Iron</a>
                  </li>
                </ul>
                <ul class="details">
                  <li class="topic">Order Status</li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Returned</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Returned</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                  <li>
                    <a href="#">Pending</a>
                  </li>
                  <li>
                    <a href="#">Delivered</a>
                  </li>
                </ul>
                <ul class="details">
                  <li class="topic">Total</li>
                  <li>
                    <a href="#">$56.56</a>
                  </li>
                  <li>
                    <a href="#">$44.95</a>
                  </li>
                  <li>
                    <a href="#">$65.33</a>
                  </li>
                  <li>
                    <a href="#">$101.98</a>
                  </li>
                  <li>
                    <a href="#">$24.55</a>
                  </li>
                  <li>
                    <a href="#">$12.88</a>
                  </li>
                  <li>
                    <a href="#">$164.66</a>
                  </li>
                  <li>
                    <a href="#">$23.53</a>
                  </li>
                  <li>
                    <a href="#">$46.52</a>
                  </li>
                </ul>
              </div>
              <div class="button">
                <a href="#">See All</a>
              </div>
            </div>

            <div class="top-sales box">
              <div class="title">Top Services</div>
              <ul class="top-sales-details">
                <li>
                  <a href="#">
                    <span class="product">Wash</span>
                  </a>
                  <span class="price">$10</span>
                  <span class="weight">10lbs</span>
                  <span class="time">2D</span>
                </li>
                <li>
                  <a href="#">
                    <span class="product">Fold </span>
                  </a>
                  <span class="price">$3</span>
                  <span class="weight">10lbs</span>
                  <span class="time">2D</span>
                </li>
                <li>
                  <a href="#">
                    <span class="product">Iron</span>
                  </a>
                  <span class="price">$12</span>
                  <span class="weight">10lbs</span>
                  <span class="time">3D</span>
                </li>
                <li>
                  <a href="#">
                    <span class="product">Dry Clean</span>
                  </a>
                  <span class="price">$18</span>
                  <span class="weight">10lbs</span>
                  <span class="time">5D</span>
                </li>
                <li>
                  <a href="#">
                    <span class="product">Stain Clean</span>
                  </a>
                  <span class="price">$8</span>
                  <span class="weight">10lbs</span>
                  <span class="time">3D</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default DashEmp;

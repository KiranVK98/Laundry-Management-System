import React from "react";
import "./Dash.css";

function DashUser() {
  return (
    <section id="DashUser">
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
            <span class="admin_name">User</span>
            <i class="bx bx-chevron-down"></i>
          </div>
        </nav>

        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="dropdown">
                <button class="dropbtn">Select Services</button>
                <div class="dropdown-content">
                  <a href="#">Wash</a>
                  <a href="#">Fold</a>
                  <a href="#">Iron</a>
                  <a href="#">Dry clean</a>
                </div>
              </div>
            </div>
            <div class="box-calender">
              <div class="month">
                <ul>
                  <li class="prev">&#10094;</li>
                  <li class="next">&#10095;</li>
                  <li>
                    October
                    <br />
                    <span>2021</span>
                  </li>
                </ul>
              </div>

              <ul class="weekdays">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
              </ul>

              <ul class="days">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>
                  <span class="active">17</span>
                </li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
              </ul>
            </div>
          </div>

          <div class="sales-boxes">
            <div class="recent-sales box">
              <div class="title">Subscribe and Save</div>
              <input
                type="text"
                class="textbox"
                placeholder="Enter First Name Here!"
              />
              <input
                type="text"
                class="textbox"
                placeholder="Enter Last Name Here!"
              />
              <input type="textarea" class="textbox" placeholder="Comments!" />
              <a href="#" class="button1">
                Submit
              </a>
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

export default DashUser;

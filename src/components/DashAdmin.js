import React from "react";
import './Dash.css'

function DashAdmin() {
    return (
        <section id ="DashAdmin">
            <div class="sidebar">
            <div class="logo-details">
            <span class="logo_name">InstaWash</span>
            </div>
            <ul class="nav-links">
                <li>
                <a href="#" class="active">
                    <i class='bx bx-grid-alt' ></i>
                    <span class="links_name">Dashboard</span>
                </a>
                </li>
                <li>
                <a href="/ManageEmployee">
                    <span class="links_name">Manage Employees</span>
                </a>
                </li>
                <li>
                <a href="/ManageEquipment">
                    <span class="links_name">Manage Equipment</span>
                </a>
                </li>
                <li>
                <a href="/ManageStoreLocation">
                    <span class="links_name">Manage Store Locations</span>
                </a>
                </li>
                <li>
                <a href="/ManageVendor">
                    <span class="links_name">Manage Vendors</span>
                </a>
                </li>
                <li>
                    <a href="/Charts">
                    <span class="links_name">Charts</span>
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
                    <i class='bx bx-menu sidebarBtn'></i>
                    <span class="dashboard">Dashboard</span>
                </div>
                <div class="search-box">
                    <input type="text" placeholder="Search..."/>
                    <i class='bx bx-search' ></i>
                </div>
                <div class="profile-details">
                    <span class="admin_name">Admin</span>
                    <i class='bx bx-chevron-down' ></i>
                </div>
                </nav>

                <div class="home-content">
                <div class="overview-boxes">
                    <div class="box">
                    <div class="right-side">
                        <div class="box-topic">Total Orders</div>
                        <div class="number">40,876</div>
                        <div class="indicator">
                        <i class='bx bx-up-arrow-alt'></i>
                        <span class="text">Up from yesterday</span>
                        </div>
                    </div>
                    <i class='bx bx-edit-alt user' ></i>
                    </div>
                    <div class="box">
                    <div class="right-side">
                        <div class="box-topic">Total Customers</div>
                        <div class="number">38,876</div>
                        <div class="indicator">
                            <i class='bx bx-up-arrow-alt'></i>
                        <span class="text">Up from yesterday</span>
                        </div>
                    </div>
                    <i class='bx bxs-user user two' ></i>
                    </div>
                    <div class="box">
                    <div class="right-side">
                        <div class="box-topic">Total Employees</div>
                        <div class="number">$12,876</div>
                        <div class="indicator">
                        <i class='bx bx-up-arrow-alt'></i>
                        <span class="text">At present</span>
                        </div>
                    </div>
                    <i class='bx bx-user user three'></i>
                    </div>
                    <div class="box">
                    <div class="right-side">
                        <div class="box-topic">Total Equipment</div>
                        <div class="number">11,086</div>
                        <div class="indicator">
                        <i class='bx bx-down-arrow-alt down'></i>
                        <span class="text">Down From Today</span>
                        </div>
                    </div>
                    <i class='bx bxs-washer user four' ></i>
                    </div>
                </div>

                <div class="sales-boxes">
                    <div class="recent-sales box">
                    <div class="title">Recent Orders</div>
                    <div class="sales-details">
                        <ul class="details">
                        <li class="topic">Date</li>
                        <li><a href="#">13 Oct 2021</a></li>
                        <li><a href="#">13 Oct 2021</a></li>
                        <li><a href="#">12 Oct 2021</a></li>
                        <li><a href="#">11 Oct 2021</a></li>
                        <li><a href="#">10 Oct 2021</a></li>
                        <li><a href="#">10 Oct 2021</a></li>
                        <li><a href="#">10 Oct 2021</a></li>
                        </ul>
                        <ul class="details">
                        <li class="topic">Customer</li>
                        <li><a href="#">Alex Roderigez</a></li>
                        <li><a href="#">David Smith</a></li>
                        <li><a href="#">Peter Parker</a></li>
                        <li><a href="#">Diana Mitchell</a></li>
                        <li><a href="#">Martin Paw</a></li>
                        <li><a href="#">Doe Alex</a></li>
                        <li><a href="#">Aiana Lexa</a></li>
                        <li><a href="#">Rexel Mags</a></li>
                        <li><a href="#">Tiana Loths</a></li>
                    </ul>
                    <ul class="details">
                        <li class="topic">Order Status</li>
                        <li><a href="#">Delivered</a></li>
                        <li><a href="#">Pending</a></li>
                        <li><a href="#">Returned</a></li>
                        <li><a href="#">Delivered</a></li>
                        <li><a href="#">Pending</a></li>
                        <li><a href="#">Returned</a></li>
                        <li><a href="#">Delivered</a></li>
                        <li><a href="#">Pending</a></li>
                        <li><a href="#">Delivered</a></li>
                    </ul>
                    <ul class="details">
                        <li class="topic">Total</li>
                        <li><a href="#">$56.56</a></li>
                        <li><a href="#">$44.95</a></li>
                        <li><a href="#">$65.33</a></li>
                        <li><a href="#">$101.98</a></li>
                        <li><a href="#">$24.55</a></li>
                        <li><a href="#">$12.88</a></li>
                        <li><a href="#">$164.66</a></li>
                        <li><a href="#">$23.53</a></li>
                        <li><a href="#">$46.52</a></li>
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
    )
}

export default DashAdmin;

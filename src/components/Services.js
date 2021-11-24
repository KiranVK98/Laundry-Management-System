import React from "react";
import '../Services.css';

function Services() {
    return (
       <section id = "Services">
            <div class="upper_card">
            <h2><span>Our Services </span></h2>
            <div class="img_p">
            <p><span>We strive to ensure quality wash fold, on time delivery and reliable service for your laundry needs. A dedicated team is on hand to maintain quality standard and to seek for continuous improvements. We offer a premium personalized service that you can completely customize. We have many brand name product options available, including hypoallergenic detergent. If you have a special request, just let us know. We are happy to cater to your laundry needs.</span></p>
            </div>
            <div class="img">
            <img src="./images/serv_pic.jpg" alt="services" />
            </div>
            </div>
            <div class="res">
                <div class="containe">
                <div class="row">
                <div class="column">
                    <div class="card">
                    <img src="./images/laundry.jpg" alt="Laundry"/>
                    <div class="container">
                        <h2>Wash & Fold</h2>
                        <p>Do you remember life before InstaWash laundry? The average American loses 10 hours of their week to laundry! Between sorting, treating stains, switching loads, drying, folding, and hanging laundry it can seem like a real pain. Let InstaWash Laundry Services in do it for you.</p>
                        <a href="login.html"><button class="button">Schedule a pickup</button></a>
                        <a href="login.html"><button class="button">Schedule a delivery</button></a>
                    </div>
                    </div>
                </div>
                
                <div class="column">
                    <div class="card">
                    <img src="./images/dry_clean.jfif" alt="Laundry"/>
                    <div class="container">
                        <h2>Dry Cleaning</h2>
                        <p>InstaWash Laundry makes it simple to fit dry cleaning into your busy schedule. Simply place your dirty dry cleaning into your bag, schedule a pickup, and let us take care of all the work. You can pick the clothes yourself or have it delivered to your doorstep</p>
                        <a href="login.html"><button class="button">Schedule a pickup</button></a>
                        <a href="login.html"><button class="button">Schedule a delivery</button></a>
                    </div>
                    </div>
                </div>


                    <div class="column">
                    <div class="card">
                    <img src="./images/ironing.jpg" alt="Laundry"/>
                    <div class="container">
                        <h2>Ironing</h2>
                        <p>InstaWash Laundry offers ironing services in addition to washing and dry cleaning, we offer the option of delivery or you could pick the clothes yourself at your comfort! With InstaWash ironing has never been easier!!</p>
                        <a href="login.html"><button class="button">Schedule a pickup</button></a>
                        <a href="login.html"><button class="button">Schedule a delivery</button></a>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>

       </section>    
    )
}

export default Services;


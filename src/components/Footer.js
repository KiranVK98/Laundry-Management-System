import React from "react";

function Footer() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          <img src="logo_new.png" />
        </h3>

        <p class="footer-links">
          <a href="/Home" class="link-1">
            Home
          </a>

          <a href="/Services">Services</a>

          <a href="/AboutUs">About Us</a>

          <a href="/ContactUs">Contact Us</a>
        </p>

        <p class="footer-company-name">Instawash © 2021</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>501 Summit Ave</span> Arlington, Texas
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@instawash.com">support@instawash.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          We offer efficient services in the laundry business at affordable
          prices, accesable to all.
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

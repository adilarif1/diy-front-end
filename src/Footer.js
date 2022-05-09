import React from 'react';


function Footer(/*props*/) {
  return (
    <footer>
       <div class="footer-dark">
          
              <div class="container">
                  <div class="row">
                      <div class="col-sm-6 col-md-3 item">
                          <h3>Services</h3>
                          <ul>
                              <li><a href="#">In-store services</a></li>
                              <li><a href="#">Tool & equipment hire</a></li>
                              <li><a href="#">DIY bulk delivery</a></li>
                          </ul>
                      </div>
                      <div class="col-sm-6 col-md-3 item">
                          <h3>About</h3>
                          <ul>
                              <li><a href="#">Company</a></li>
                              <li><a href="#">Team</a></li>
                              <li><a href="#">Careers</a></li>
                          </ul>
                      </div>
                      <div class="col-md-6 item text">
                          <h3>DIY</h3>
                          <p>Shop for everything you need to complete your home and garden project. Order online for 1hr Click+Collect, or free home delivery on orders over £50</p>
                      </div>
                      <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                  </div>
                  <p class="copyright">DIY © 2022</p>
              </div>
          </div>
    </footer>
  );
}

export default Footer;
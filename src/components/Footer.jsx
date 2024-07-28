import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src="/img/logo.png" alt="logo" />
              </a>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@example.com</span>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Hic solutasetp</h4>
              <ul>
                <li>
                  <a href="#">Molestiae accusamus iure</a>
                </li>
                <li>
                  <a href="#">Excepturi dignissimos</a>
                </li>
                <li>
                  <a href="#">Suscipit distinctio</a>
                </li>
                <li>
                  <a href="#">Dilecta</a>
                </li>
                <li>
                  <a href="#">Sit quas consectetur</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3 footer-links">
              <h4>Nobis illum</h4>
              <ul>
                <li>
                  <a href="#">Ipsam</a>
                </li>
                <li>
                  <a href="#">Laudantium dolorum</a>
                </li>
                <li>
                  <a href="#">Dinera</a>
                </li>
                <li>
                  <a href="#">Trodelas</a>
                </li>
                <li>
                  <a href="#">Flexo</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div>
              © Copyright{" "}
              <strong>
                <span>RDX Redaction</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ */}
              Designed by <a href="https://bootstrapmade.com/">Mohamed Abdallah BEDJEGHA</a>
            </div>
          </div>
          <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a href="">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="">
              <i className="bi bi-facebook" />
            </a>
            <a href="">
              <i className="bi bi-instagram" />
            </a>
            <a href="">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

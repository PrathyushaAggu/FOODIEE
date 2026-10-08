import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Savour</h3>
            <p className="footer-description">
              Connecting you with passionate home makers who serve authentic, home-cooked meals.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">For Customers</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">For Home Makers</h4>
            <ul className="footer-links">
              <li><a href="#">Become a Home Maker</a></li>
              <li><a href="#">Partner Portal</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Savour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


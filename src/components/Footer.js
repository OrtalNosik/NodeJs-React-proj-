import React from 'react';
import '../style/Footer.css';
import { FiInfo, FiAlertTriangle, FiMail, FiBookOpen, FiStar } from 'react-icons/fi';


function Footer() {

  const handleSelectChange = (event) => {
    window.location.href =  event.target.value  ;
  }
  return (
    <div data-testid="footer">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h1>
                <select onChange={handleSelectChange}>
                    <option value="">מידע <FiInfo className="category-icon" /> </option>
                    <option value="/about-us">מי אנחנו ? </option>
                    <option value="/warning">חמישה תמרורי אזהרה</option>
                    <option value="/articles">מאמרים עבורך </option>
                    <option value="/tips">טיפים</option>

               </select>
              </h1> 
            </div>
            <div className="col-lg-3 col-md-6">
              <h1>
                צור קשר
                <FiMail className="category-icon" />
              </h1>
              <ul>
                <li>
                  <a href="mailto:team2107@gmail.com">team2107@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

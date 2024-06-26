import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* header */}
      <div className="footer-header">
        <div className="image"></div>
        <div className="donate-icons">
          <div className="icons">
            <a
              href="https://www.instagram.com/parikrantifoundation/?igsh=c2Y2MWN1ZWJqNHpi"
              className="icon"
              target="_blank"
            >
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/parikrantifoundation/"
              className="icon"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/ParikrantiFoundation/"
              className="icon"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
              </svg>
            </a>

            <a
              href="https://x.com/ParikrantiF?s=08"
              className="icon"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"></path>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@parikrantifoundation"
              className="icon"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* header */}

      <div className="footer-container">
        <div className="footer-section">
          <h4>PARIKRANTI FOUNDATION</h4>
          <p>This is a Non-Government Organization.</p>
        </div>
        <div className="footer-section">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>
              {" "}
              <a href="/" target="_blank">
                THE UNITED SOCIAL FEDERATION
              </a>
            </li>

            <li>
              {" "}
              <a href="/" target="_blank">
                THE SOCIAL PANCHAYAT
              </a>
            </li>

            <li>
              <a href="/" target="_blank">
                THE X FUNDAMENTALS
              </a>
            </li>

            <li>
              <a href="/" target="_blank">
                IDEA AND STRATEGY
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              {" "}
              <a href="/home">Home </a>
            </li>

            <li>
              <a href="/getInvolved">Get Involved </a>
            </li>

            <li>
              {" "}
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="/idea">Idea And strategy </a>
            </li>

            <li>
              {" "}
              <a href="/donation">Donation </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CONTACT</h4>
          <ul>
            <li>
              <li>
                <svg
                  className="icon2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                EH-81, SCHEME NO. 54, VIJAY NAGAR,
              </li>
              <li>NEAR BAPAT SQUARE, INDORE (452010), MADHYA PRADESH</li>
            </li>
            <li>
              <svg
                className="icon2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
              </svg>
              <a href="mailto:parikrantifoundation@gmail.com" target="_blank">
                parikrantifoundation@gmail.com
              </a>
            </li>
            <li>
              <svg
                className="icon2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
              </svg>
              <a href="mailto:admin@parikrantifoundation.org" target="_blank">
                admin@parikrantifoundation.org
              </a>
            </li>
            <li>
              <svg
                className="icon2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
              </svg>
              6267785438 / 7225999084
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p id="copyright">Copyright</p>
      </div>
    </footer>
  );
}

export default Footer;

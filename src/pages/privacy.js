import * as React from "react"
import { Link } from "gatsby"
import { FaLink } from "react-icons/fa";
import Seo from "../components/seo"
// import icon from "../images/Icon-Black.png"
import { RiQrCodeLine } from 'react-icons/ri';




const Privacy = () => (
  <div className="terms-page">
    <Seo title="Privacy Policy" />

    <div className="terms-container">
      <Link className="title-terms" to="/">
        <h1>ScanSaver</h1>
        <div className="link-icon-terms"><RiQrCodeLine/></div>
      </Link>
      <div className="terms-text">
        <p>
        The ScanSaver Beta Program is a voluntary program through which users may use a pre-release version of our mobile application (the “ScanSaver App”) and provide feedback. The ScanSaver App is owned and operated by Sheprd Technologies Inc. (“Licensor”). Your use of the ScanSaver App and the ScanSaver Beta Program is subject to our <Link className="terms-links" to="/terms/">Terms of Service</Link> and <Link className="terms-links" to="/privacy/">Privacy Policy</Link>.
        </p>
        <h2>Privacy Policy</h2>

        <p>Using the ScanSaver App and participating in the program may involve the collection and use of data by ScanSaver as outlined below. Capitalized terms have the meaning assigned to them in our Terms of Service.</p>

        <p>To help us improve the ScanSaver App, we may collect and process diagnostic, technical, and usage logs and information from the device that is running the ScanSaver App. Data includes general analytics data, various unique device identifiers, various unique system or hardware identifiers, details about hardware and operating system specifications, performance statistics, the use of peripherals, and — if Location Services is enabled — certain location information. None of the information that is collected identifies you personally. We may share these diagnostic, technical, and usage logs and information with partners and third-party developers for purposes of allowing them to improve their products and services that operate on or in connection with the ScanSaver App.</p>

        <p>In addition to the information that you provide to us when you register for a user account, we collect information about the URLs, titles and content of the web pages and other information you save to the ScanSaver App. The types of information we collect includes your browser type, device type, time zone, language, and other information related to the manner in which you access the ScanSaver App. We also collect information about your use of the ScanSaver App so that we can provide our services.</p>

        <p>We use the information collected from you in order to provide and improve our services. Although we strive to maintain the confidentiality of the personal information of our users, we may be required to release personal information if we have a good faith belief that disclosure is necessary or appropriate under applicable law. We will keep your information only for as long as we need it to provide you services, manage our business or as required by law or contract.</p>
        <p>We use the following third-party Service Providers to monitor and analyze use of the ScanSaver App:
          <ul>
            <li><b>Google Analytics: </b>
            Google Analytics is an analytics service offered by Google that tracks and reports traffic. We use Google Analytics to help us monitor and improve the ScanSaver App. For more information on the privacy practices of Google, please visit the <a className="terms-links" href={'https://policies.google.com/privacy?hl=en'}>Google Privacy Terms web page</a>.
            </li>
            <li><b>Firebase: </b>
            Firebase is an analytics service provided by Google. We use Firebase to help us monitor and improve the ScanSaver App. For more information on what type of information Firebase collects, please visit the <a className="terms-links" href={'https://policies.google.com/privacy?hl=en'}>Google Privacy Terms web page</a>.
            </li>
          </ul>
        </p>
        <p>Please note this Privacy Policy may change from time to time. If you have any questions please contact us <a key="email" href={'mailto:team@linklater.app'}>here</a>.
        </p>
      </div>

    </div>

    <div className="footer-container">
      <div className="footer-choices">

        <div className="footer-buttons">
          <Link className="footer-links" to="/">home</Link>
          <Link className="footer-links" to="/terms/">terms</Link>
        </div>

        <div className="copyright">
          <p>© {new Date().getFullYear()} • ScanSaver</p>
        </div>


      </div>


      </div>


  </div>
)

export default Privacy

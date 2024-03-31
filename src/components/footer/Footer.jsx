import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-whitesmoke" id="map">
      <div className="container">
        <div className="footer-content py-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="uppercase font-bold text-xl sm:text-2xl lg:text-3xl sm:text-start text-center mb-4 font-lora">
              Yeshua New Life
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249.2272254576922!2d85.30913120182586!3d27.67563198695175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1984019cf53f%3A0x2951eca0301687e8!2sYeshua%20new%20life!5e0!3m2!1sen!2snp!4v1700392781764!5m2!1sen!2snp"
              width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg text-dark uppercase font-semibold font-lora">
                The Yeshua Church
              </p>
              <ul className="mt-4 space-y-4 font-normal">
                <li>
                  <Link to="/about" className="text-gray hover:text-dark">
                    Our beliefs
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray hover:text-dark">
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray hover:text-dark">
                    Pastors, Elders & Deacons
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray hover:text-dark">
                    About Church
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg text-dark uppercase font-semibold font-lora">
                Ministries
              </p>
              <ul className="mt-4 space-y-4 font-normal">
                <li>
                  <Link to="/event" className="text-gray hover:text-dark">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/branch" className="text-gray hover:text-dark">
                    Branches
                  </Link>
                </li>
                <li>
                  <Link to="/article" className="text-gray hover:text-dark">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link to="/donate" className="text-gray hover:text-dark">
                    Contribute
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg text-dark uppercase font-semibold font-lora">
                Contact Us
              </p>
              <ul className="mt-4 space-y-4 font-normal flex items-center flex-col sm:items-start">
                <li>
                  <div
                    className="flex items-center justify-center gap-x-4"
                  >
                    <FaEnvelope />
                    <span className="flex-1 text-gray hover:text-dark">
                      yeshuanewlife.com
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex items-center justify-center gap-x-4"
                  >
                    <FaPhone />
                    <span className="flex-1 text-gray hover:text-dark">
                      +977 987700562200
                    </span>
                  </div>
                </li>
                <li>
                  <div
                    className="flex items-center justify-center gap-x-4"
                  >
                    <FaMapMarkerAlt />
                    <address className="flex-1 text-gray hover:text-dark not-italic">
                      Lamachaur Marg, Lalitpur
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg text-dark uppercase font-semibold font-lora">
                Our Fellowship
              </p>
              <ul className="mt-4 space-y-4 font-normal">
                <li>
                  <span className="text-gray hover:text-dark">
                    Saturday: 10AM - 1PM
                  </span>
                </li>
                <li>
                  <span className="text-gray hover:text-dark">
                    Wendesday: 6PM - 7PM
                  </span>
                </li>
                <li>
                  <span className="text-gray hover:text-dark">
                    &copy; Yeshua New Life
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

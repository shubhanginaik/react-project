import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <div className="logoName">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ marginLeft: "100px" }}
          >
            Visionova
          </motion.span>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/shubhangi-naik/" target="blank">
            <img src="/favicon-linkedin.png" alt="LinkedIn" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/shubhanginaik" target="blank">
            <img src="/favicon-github.png" alt="LinkedIn" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

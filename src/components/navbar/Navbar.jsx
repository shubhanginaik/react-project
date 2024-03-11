import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ShubTech Atelier
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="LinkedIn" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="LinkedIn" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="LinkedIn" />
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

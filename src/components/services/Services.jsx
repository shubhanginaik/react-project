import "./services.scss";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          Crafting Pixel-perfect Experience for the
          <br />
          Digital World
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            Transforming <b> Designs </b> into
          </h1>
        </div>
        <div className="title">
          <h1>
            Seamless <b> Digital </b> Experiences
          </h1>
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <div className="title">
            <p>para1</p>
          </div>
        </div>
        <div className="box">
          <div className="title">
            <p>para2</p>
          </div>
        </div>
        <div className="box">
          <div className="title">
            <p>para3</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

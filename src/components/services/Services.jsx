import { useRef } from "react";
import "./services.scss";
import { color, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //animate="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Crafting Pixel-perfect Experience for the
          <br />
          Digital World
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            Transforming
            <motion.b whileHover={{ color: "orange" }}> Designs </motion.b> into
          </h1>
        </div>
        <div className="title">
          <h1>
            Seamless
            <motion.b whileHover={{ color: "orange" }}> Digital </motion.b>
            Experiences
          </h1>
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="title">
            <h2>Branding</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            adipisci excepturi dicta nulla dolor laudantium reprehenderit
            officia labore consequuntur fugit fugiat, eaque voluptatibus sit
            praesentium unde voluptates provident, natus cupiditate.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="title">
            <h2>Branding</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nemo molestiae modi, tenetur aperiam fugiat, totam autem accusantium
            sed pariatur maxime voluptate veritatis sit harum eum unde alias
            similique tempore!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="title">
            <h2>Branding</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
            maxime magnam magni voluptas dolores dicta nam! Quasi ratione labore
            et amet explicabo aut cupiditate nisi eveniet, rerum, odit impedit.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="title">
            <h2>Branding</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
            maxime magnam magni voluptas dolores dicta nam! Quasi ratione labore
            et amet explicabo aut cupiditate nisi eveniet, rerum, odit impedit.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

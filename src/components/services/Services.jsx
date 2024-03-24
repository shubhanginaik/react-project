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
            <h2>Version Control System </h2>
          </div>
          <p>
            Effectively utilise feature such as branching merging and pull
            requests. Github, Gitlab, Gerrit.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="title">
            <h2>Software Development</h2>
          </div>
          <p>
            Well versed with software development practices such as Agile
            methodologies, Scrum. Ability to work in cross functional teams. I
            have experience in writting clean, maintaible code, conducting code
            reviews, and refactoring code to improve performance and scalabilty.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="title">
            <h2>Testing Frameworks and Tools</h2>
          </div>
          <p>
            Expertise in design and write tests using Jest, GoogleTest, Pytest.
            Understanding of basics of Selenium, Mocha. I Have ISTQB
            certification and Learning Java with Selenium Udemy certification.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <div className="title">
            <h2>Continuous Integration / Continuous Deployment (CI/CD)</h2>
          </div>
          <p>
            Understanding of CI/CD pipeline automate the process of testing
            building, and deploying code changes.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

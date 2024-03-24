import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React speed Game",
    img: "././speedgame.png",
    desc: "Interesting speed game app with gradually increasing speed and sounds. TechStack: React hooks",
  },
  {
    id: 2,
    title: "RestAPI Pokemon App",
    img: "././game.png",
    desc: "Data fetching from API's and use of usestate, useEffect, flex. TechStack: React, CSS3, HTML5",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "././food.png",
    desc: "Use of Fetch API and the FetchWrapper, DOM (selection, events, etc.), JSON, Async await",
  },
  {
    id: 4,
    title: "Vanilla JS Rat in a Maze",
    img: "././image1.png",
    desc: "Finding paths from rat to the cheese. React JS, Material UI and Backtracking algorithm from Data structure",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      <section className="itemsSection">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </section>
    </div>
  );
};

export default Portfolio;

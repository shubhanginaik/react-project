import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Vanilla JS Portfolio",
    img: "https://images.pexels.com/photos/6533092/pexels-photo-6533092.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quam labore? Dolore molestias hic doloribus, magni eos veritatis minima sunt odio fugit possimus adipisci, laborum repellendus ratione, reprehenderit quae eum.",
  },
  {
    id: 2,
    title: "React Game App",
    img: "https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quam labore? Dolore molestias hic doloribus, magni eos veritatis minima sunt odio fugit possimus adipisci, laborum repellendus ratione, reprehenderit quae eum.",
  },
  {
    id: 3,
    title: "React Dashboard for Customer Survey Form",
    img: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quam labore? Dolore molestias hic doloribus, magni eos veritatis minima sunt odio fugit possimus adipisci, laborum repellendus ratione, reprehenderit quae eum.",
  },
  {
    id: 4,
    title: "React E-commerce App",
    img: "https://images.pexels.com/photos/13798414/pexels-photo-13798414.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quam labore? Dolore molestias hic doloribus, magni eos veritatis minima sunt odio fugit possimus adipisci, laborum repellendus ratione, reprehenderit quae eum.",
  },
  {
    id: 5,
    title: "Vanilla JS Rat in a Maize App",
    img: "https://images.pexels.com/photos/1267051/pexels-photo-1267051.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quam labore? Dolore molestias hic doloribus, magni eos veritatis minima sunt odio fugit possimus adipisci, laborum repellendus ratione, reprehenderit quae eum.",
  },
  {
    id: 6,
    title: "React Reast API Pokeman",
    img: "https://www.pexels.com/photo/pokemon-go-application-on-smartphone-screen-163042/",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, quam labore? Dolore molestias hic doloribus, magni eos veritatis minima sunt odio fugit possimus adipisci, laborum repellendus ratione, reprehenderit quae eum.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

function Portfolio() {
  return (
    <div className="portfolio">
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <Link to="/shop">Shop Now </Link>
    </div>
  );
};

export default Home;

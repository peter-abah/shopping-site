import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-[7.5vw] py-32">
      <h2 className="mb-20 text-5xl text-center">Welcome</h2>
      <Link className="block w-fit mx-auto text-2xl px-4 py-2 border-b border-solid" to="/shop">Shop Now </Link>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center px-[7.5vw] py-20">
      <h2 className="text-center text-5xl mb-12">Thanks for Shopping</h2>
      <Link className="text-2xl border-b pb-2 px-2" to="/">Home</Link>
    </div>
  );
};

export default ThankYou;

import Item from "./Item";
import getItems from "../../data";

const Shop = () => {
  const items = getItems();

  return (
    <div className="flex flex-wrap justify-center px-[7.5vw] py-4">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Shop;

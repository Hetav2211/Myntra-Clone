import { useSelector } from "react-redux";
import Bagitem from "../components/Bagitem";
import BagSummary from "../components/BagSummary";
const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <Bagitem item={item} key={item.id}/>
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;

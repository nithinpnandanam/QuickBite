import ItemList from "./ItemList";
import arrowDown from "../assets/icons/down-arrow.png"
const RestaurantCategory = ({ data,showItem,setshowIndexx }) => {
  // props = { data:{@type: value1, title: value2, itemCards: value3} }
  // {data} = { data:{@type: value1, title: value2, itemCards: value3} }
  const handleClick = () => {
    setshowIndexx()
  };

  return (
    <div className="p-4 shadow-lg mb-4 rounded bg-gray-100 ">
      <div className="flex justify-between " onClick={handleClick}>
        <span className="font-medium">
          {data.title} ({data.itemCards.length})
        </span>
        <div className="w-8">
          <img src={arrowDown} alt="Down arrow" />
        </div>
      </div>
      <div>
        {showItem && <ItemList menuDetails={data.itemCards}/>}
        {/* {menuDetails:[{},{},{},{},{}]} */}
      </div>
    </div>
  );
};
export default RestaurantCategory;

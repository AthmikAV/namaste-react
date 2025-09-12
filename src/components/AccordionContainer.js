import { useState } from "react";
import AccordianItems from "./AccordionItems";

const AccordianContainer = ({ card , showItem ,setItemIndex}) => {

  const itemList = card?.card?.card?.itemCards || [];

  const handleClick = () => {
    setItemIndex();
  }

  return (
    // main container
    <div
      className="w-8/12 mb-3 flex flex-col rounded-xl bg-white px-5 py-2 shadow-md cursor-pointer transform transition-transform"
      onClick={() => handleClick()}

    >
      {/* title container */}
      <div className="flex justify-between">
        <p className="font-semibold text-gray-700">
          {card?.card?.card?.title} ({card?.card?.card?.itemCards.length})
        </p>
        <span className="text-lg">{showItem ? "⬇️" : "⬆️"}</span>
      </div>
      {/* item container */}
      {showItem ? (
        <div>
          {itemList.map((item) => (
            <AccordianItems
              key={item?.card?.info?.id || Math.random()}
              element={item}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default AccordianContainer;

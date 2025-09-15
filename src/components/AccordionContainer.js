import { useState } from "react";
import AccordianItems from "./AccordionItems";

const AccordianContainer = ({ card, showItem, setItemIndex }) => {
  const itemList = card?.card?.card?.itemCards || [];

  const handleClick = () => {
    setItemIndex();
  };

  return (
    <div className="w-full md:w-8/12 mb-3 flex flex-col rounded-xl bg-white px-5 py-2 shadow-md">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <p className="font-semibold text-gray-700">
          {card?.card?.card?.title} ({itemList.length})
        </p>
        <span
          className={`transform transition-transform duration-300 ${
            showItem ? "rotate-180" : "rotate-0"
          }`}
        >
          ⬇️
        </span>
      </div>

      {/* Collapsible Items */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          showItem ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {itemList.map((item) => (
          <AccordianItems
            key={item?.card?.info?.id || item?.card?.info?.name}
            element={item}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordianContainer;

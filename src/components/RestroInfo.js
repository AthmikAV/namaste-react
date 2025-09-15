import useRestromenue from "../utils/useRestromenue";
import { useParams } from "react-router-dom";
import InnerShimmer from "./InnerShimmer";
import AccordianContainer from "./AccordionContainer";
import { useState } from "react";

const RestroInfo = () => {
  const { resId } = useParams();
  const json = useRestromenue(resId);

  const [ItemIndex, setItemIndex] = useState(0);

  const categories =
    json?.data?.cards
      ?.find((c) => c.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => {
        return (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }) || [];

  return (
    <div
      className="
        flex flex-col 
        items-center justify-center 
        gap-4 pt-6 
        w-full px-3

        md:max-w-2xl md:mx-auto
        lg:max-w-4xl
      "
    >
      {categories.map((item, index) => (
        <AccordianContainer
          key={index}
          card={item}
          showItem={index === ItemIndex}
          setItemIndex={() =>
            setItemIndex((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestroInfo;

import useRestromenue from "../utils/useRestromenue";
import { useParams } from "react-router-dom";
import InnerShimmer from "./InnerShimmer";
import AccordianContainer from "./AccordionContainer";
import { useState } from "react";

const RestroInfo = () => {
  const { resId } = useParams();
  const json = useRestromenue(resId);

  const [ItemIndex,setItemIndex] = useState(0)


   const categories = json?.data?.cards
  ?.find((c) => c.groupedCard)
  ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>{
    return(
      category?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  }) || [];


return (
  <div className="flex justify-center items-center flex-col gap-4 pt-9">
    {categories.map((item, index) => {
      return <AccordianContainer key={index} card={item} showItem = {index === ItemIndex? true : false} setItemIndex={() =>
      setItemIndex(prev => (prev === index ? null : index))
    }/>
    })}
  </div>
)



};

export default RestroInfo;

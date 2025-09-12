import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, deliveryTime, locality } = resData.card.card.info;

  return (
    <div className="res-card bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img
        alt={name}
        className="w-full h-48 object-cover rounded-t-2xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-400">• {deliveryTime} min</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{locality}</p>
      </div>
    </div>
  );
};


// HOC for Promoted Card
export const PromotedCard = (RestroCard) => {
  return (props) => {
    return (
      <div className="relative">
        {/* Promoted Badge */}
        <span className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-yellow-400 
                        text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
          ⭐ Promoted
        </span>

        {/* Wrapped Component */}
        <RestroCard {...props} />
      </div>
    );
  };
};


export default RestroCard;

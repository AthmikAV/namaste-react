const AccordianItems = ({ element }) => {
  const { name, description, imageId } = element?.card?.info || {};
  const price =
    (element?.card?.info?.price || element?.card?.info?.defaultPrice || 0) / 100;
  const rating = element?.card?.info?.ratings?.aggregatedRating?.rating;

  return (
    <div className="flex justify-between items-start py-4 px-4 border-b last:border-none hover:bg-gray-50 transition-colors">
      {/* Text Info */}
      <div className="flex flex-col gap-1 max-w-[70%]">
        <p className="text-gray-900 font-semibold text-base truncate">{name}</p>
        {rating && (
          <p className="text-yellow-500 font-medium text-sm">⭐ {rating}</p>
        )}
        <p className="text-gray-700 font-medium text-sm">₹{price}</p>
        {description && (
          <p className="text-gray-500 text-sm line-clamp-2">{description}</p>
        )}
      </div>

      {/* Image & Centered Button */}
      <div className="relative w-28 h-28">
        {imageId && (
          <img
            className="w-full h-full rounded-lg object-cover transition-transform duration-200 hover:scale-105"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
            alt={name || "Food item"}
          />
        )}

        {/* Floating ADD Button */}
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold px-6 py-1 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
          ADD
        </button>
      </div>
    </div>
  );
};

export default AccordianItems;

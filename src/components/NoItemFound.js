const NoItemFound = ({ query }) => {
  return (
    <div
      className="
        flex flex-col items-center justify-center 
        py-10 sm:py-16 px-4 
        text-center
      "
    >
      {/* Icon */}
      <div className="text-5xl sm:text-6xl mb-4">🍽️</div>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
        No items found
      </h1>

      {/* Message */}
      <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-sm sm:max-w-md">
        Sorry for the inconvenience! We couldn’t find 
        <span className="font-medium text-gray-800"> {query}</span>.  
        Our team will try to add this item soon.
      </p>

      {/* Suggestion */}
      <p className="mt-1 text-xs sm:text-sm text-gray-500 max-w-sm">
        Try searching for another dish or explore top-rated restaurants.
      </p>
    </div>
  );
};

export default NoItemFound;

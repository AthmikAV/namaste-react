const NoItemFound = ({ query }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {/* Icon */}
      <div className="text-5xl mb-4">🍽️</div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800">
        No items found
      </h1>

      {/* Message */}
      <p className="mt-2 text-gray-600 max-w-md">
        Sorry for the inconvenience! We couldn’t find Item 
        Our team will try to add this item soon.
      </p>

      {/* Suggestion */}
      <p className="mt-1 text-sm text-gray-500">
        Try searching for another dish or explore top-rated restaurants.
      </p>
    </div>
  );
};

export default NoItemFound;

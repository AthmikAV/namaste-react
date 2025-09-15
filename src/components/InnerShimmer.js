const InnerShimmer = () => {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="
              flex justify-between items-center
              bg-white rounded-lg shadow-sm 
              p-4 animate-pulse 
              w-full max-w-md sm:max-w-2xl mx-auto
            "
          >
            {/* Text Section */}
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            </div>

            {/* Image + Button Section */}
            <div className="flex flex-col items-center gap-2 ml-4">
              <div className="h-16 w-16 bg-gray-200 rounded-md"></div>
              <div className="h-6 w-12 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default InnerShimmer;

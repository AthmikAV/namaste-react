const InnerShimmer = () => {
  // Show 6 shimmer cards
  return (
    <div className="menu-container">
      {Array(6)
        .fill("")
        .map((_, index) => (
          <div key={index} className="menuitem-card shimmer-card">
            <div className="menuitem-details">
              <div className="shimmer-line shimmer-name"></div>
              <div className="shimmer-line shimmer-price"></div>
              <div className="shimmer-line shimmer-rating"></div>
            </div>
            <div className="menuitem-image-section">
              <div className="shimmer-image"></div>
              <div className="shimmer-btn"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default InnerShimmer;

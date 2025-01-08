
import "./Shimmer.css"; // Import the CSS for shimmer effect

const ShimmerCard = () => {
  return (
    <div className="shimmer-card  ">
      <div className="shimmer-image"></div>
      <div className="shimmer-text shimmer-title"></div>
      <div className="shimmer-text shimmer-subtitle"></div>
      <div className="shimmer-text shimmer-location"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container  w-3/4 mx-auto  ">
      {Array(6) // Number of cards
        .fill(0)
        .map((_, index) => (
          <ShimmerCard  key={index} />
        ))}
    </div>
  );
};

export default Shimmer;

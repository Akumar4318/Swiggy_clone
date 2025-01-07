import { CloudinaryURL } from "../Utils/Link";
import ratingImg from "../assets/Restautants/asset 67.svg";

const Card = ({ name, img, time, area, rating, cuisines = [] }) => {
  return (
    <div className="card-container flex flex-col items-center bg-white shadow-lg rounded-3xl overflow-hidden w-full max-w-[330px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <div className="card-image relative w-full h-[200px]">
        <img
          src={`${CloudinaryURL}${img}`}
          alt={name || "Restaurant"}
          className="object-cover w-[280px]  h-[200px] rounded-3xl"
        />
      </div>

      <div className="card-info p w-full p-2 ">
        {/* Restaurant Name */}
        <h2 className="font-semibold text-lg text-gray-800 truncate">{name || "Restaurant Name"}</h2>

        {/* Rating and Time */}
        <div className="rating flex  items-center gap-2 mt-2 text-sm text-gray-600">
          <img src={ratingImg} alt="Rating" className="w-5 h-5" />
          <p>{rating || "N/A"} - {time || "N/A"}</p>
        </div>

        {/* Cuisines */}
        <p className="cuisines text-sm text-gray-500 mt-2">
          {cuisines.length > 0 ? cuisines.join(", ") : "No Cuisines"}
        </p>

        {/* Area */}
        <p className="area text-sm text-gray-500 mt-1">{area || "N/A"}</p>
      </div>
    </div>
  );
};

export default Card;

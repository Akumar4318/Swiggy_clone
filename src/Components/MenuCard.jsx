import veg from '../assets/vegNonveg/veg.png';
import nonveg from '../assets/vegNonveg/nonveg.jpg';
import { CloudinaryURL } from '../Utils/Link';


const MenuCard = ({ name, isveg, desc, price, imageid }) => {

  return (
    <>
      <div className="flex items-start justify-between p-4 mx-2 border-b border-gray-300">
        {/* Left Section */}
        <div className="flex flex-col gap-2 w-2/3">
          <div className="flex items-center gap-2">
            <img
              src={isveg === 'VEG' ? veg : nonveg}
              alt={isveg === 'VEG' ? 'Vegetarian' : 'Non-Vegetarian'}
              className="w-5 h-5"
            />
            <h1 className="font-gilory text-lg text-gray-800">{name}</h1>
          </div>
          <h2 className="font-gilorysemiBold text-md text-gray-700">₹{price}</h2>
          <p className="font-gilorymedium text-sm text-gray-600 opacity-80">{desc.length>170 ? desc.slice(0,170)+'...':desc}</p>
        </div>

        {/* Right Section */}
        <div className="relative w-1/3 flex-shrink-0">
          <img
            src={CloudinaryURL + imageid}
            alt={name}
            className="rounded-xl object-cover w-full h-24"
          />
          <button className="absolute bottom-[-25px] right-[4rem] w-[118px] h-[38px] px-3 py-1 text-[#1ba672] border border-green-600 rounded-xl font-giloryExtraBold bg-white shadow-lg">
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuCard;

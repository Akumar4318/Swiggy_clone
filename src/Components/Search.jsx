import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";
import SuggestionBox from "./SuggestionBox";
import { CloudinaryURL } from "../Utils/Link";
import SearchCraousel from "./SearchCraousel";

const Search = () => {
  // State for carousel data
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  // Fetch carousel data
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=28.6489049&lng=77.271046"
      );
      const result = await response.json();
      setData(result.data.cards[1].card.card.gridElements.infoWithStyle.info);
    };
    fetchDetails();
  }, []);

  // Fetch suggestions based on user input
  useEffect(() => {
    if (!query.trim()) {
      setSuggestion([]);
      return;
    }

    const getAllData = async () => {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.6489049&lng=77.271046&str=${query}&trackingId=undefined&includeIMItem=true`
      );
      const result = await response.json();
      setSuggestion(result.data.suggestions);
    };
    getAllData();
  }, [query]);

  return (
    <div>
      <Navbar />
      <div className="w-3/4 mt-[48px] mb-[16px] mx-auto px-[256px]">
        {/* Search Bar */}
        <div className="border flex items-center justify-center rounded-md p-1">
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            className="w-[100%] p-4 font-gilory focus:outline-none focus:ring-0"
            placeholder="Search for restaurants"
          />
          <CiSearch className="w-[30px] h-[30px] mr-5" />
        </div>

        {/* Carousel */}
        {query.trim() === "" && (
          <div className="mt-8 cursor-pointer">
            <p className="font-Novabold text-[20px]">Popular Cuisines</p>
            <div className="flex overflow-x-auto space-x-4 mx-2 mt-3 no-scrollbar">
              {data &&
                data.map((item, index) => (
                  <SearchCraousel
                    key={index}
                    img={CloudinaryURL + item.imageId}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Suggestions */}
        <div className=" flex flex-col gap-4 rounded mt-3">
          {suggestion &&
            suggestion.map((item, index) => (
              <SuggestionBox
                key={index}
                name={item.text}
                subCategory={item.subCategory}
                img={CloudinaryURL + item.cloudinaryId}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

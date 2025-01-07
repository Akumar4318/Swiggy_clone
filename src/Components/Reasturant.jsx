import { useEffect, useState } from "react";
import { API } from "../Utils/Link";
import Navbar from "./Navbar";
import Craousel from "./Craousel";
import TopRestaurants from "./TopRestaurants";
import RestINcity from "./RestINcity";

const Reasturant = () => {
  const [apiData, setApiData] = useState(null); // Full API data
  const [restaurants, setRestaurants] = useState([]); // Restaurants for infinite scroll
  const [page, setPage] = useState(1); // Track current page
  const [loading, setLoading] = useState(false); // Track loading state

  // Fetch initial API data and the first page of restaurants
  const getApiData = async (pageNum = 1) => {
    if (loading) return; // Prevent multiple fetches
    setLoading(true);

    try {
      const response = await fetch(`${API}?page=${pageNum}`); // Adjust the API for pagination if required
      const data = await response.json();
      setApiData(data);

      // Extract restaurants from the API response
      const newRestaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurants((prev) => [...prev, ...newRestaurants]); // Append new restaurants
      setPage(pageNum + 1); // Increment the page number
    } catch (error) {
      console.error("Error fetching API data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle infinite scroll
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 100
    ) {
      getApiData(page); // Fetch the next page
    }
  };

  useEffect(() => {
    getApiData(); // Fetch the initial data
    window.addEventListener("scroll", handleScroll); // Attach scroll event listener

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <Navbar />
      <div className="mx-[169px] mt-5">
        {console.log(apiData)}

        <Craousel
          data={apiData?.data?.cards[0]?.card?.card?.imageGridCards?.info || []}
        />
        <hr className="w-[80vw] mx-auto opacity-20 mt-5" />
        <p className="font-giloryExtraBold text-[24px] mt-[32px] mb-[12px]">
          {apiData?.data?.cards[1]?.card?.card?.header?.title || ""}
        </p>
        <TopRestaurants
          data={
            apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
          }
        />
        <hr className="w-[80vw] mx-auto mt-10 opacity-20" />
        <RestINcity data={restaurants} />

        {loading && <p className="text-center mt-4">Loading more restaurants...</p>}
      </div>
    </div>
  );
};

export default Reasturant;

import { useEffect, useState } from "react"
import { API, CloudinaryURL } from "../Utils/Link"
import Navbar from "./Navbar"
import Craousel from "./Craousel";
import TopRestaurants from "./TopRestaurants";
import RestINcity from "./RestINcity";
import Shimmer from "./Shimmer";


const Reasturant = () => {
 
  const[apiData,setApiData]=useState();

  async function getApiData() {

      let response=await fetch(API);
      let data=await response.json();
     setApiData(data)
    
     

  }

  useEffect(()=>{

       getApiData();

  },[])


 

  return (
    <div>
        <Navbar/> 
        
        {
          apiData ? (<div className="mx-[169px] mt-5 ">
            <Craousel data={apiData ? apiData.data.cards[0].card.card.imageGridCards.info:[]}/>
            <hr className="w-[80vw] mx-auto  opacity-20 mt-5" />
            <p className="font-giloryExtraBold text-[24px]  mt-[32px] mb-[12px]">{apiData ? apiData.data.cards[1].card.card.header.title :''}</p>
            <TopRestaurants data={apiData ? apiData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants:[]}/>
            <hr className="w-[80vw] mx-auto mt-10 opacity-20"/>
            <RestINcity data={apiData ? apiData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants:[]}/></div>
            ):(<Shimmer/>)
        }
        

        
        
    </div>
  )
}

export default Reasturant
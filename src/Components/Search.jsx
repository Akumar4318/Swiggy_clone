import { useEffect, useState } from "react";
import Navbar from "./Navbar"
import { CiSearch } from "react-icons/ci";
import SuggestionBox from "./SuggestionBox";
import { CloudinaryURL } from "../Utils/Link";

const Search = () => {

  
const[query,setQuery]=useState('');
const[suggestion,setSuggestion]=useState([])

useEffect(()=>{
  const getalldata= async ()=>{
    let response=await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.6489049&lng=77.271046&str=${query}&trackingId=undefined&includeIMItem=true`)
    
    let data=await response.json();
    console.log(data)
    setSuggestion(data.data.suggestions)
    
  }
 getalldata()
},[query])
  return (
    <div>
        <Navbar/>
        <div className="w-3/4  mt-[48px] mb-[16px] mx-auto px-[256px]">
            <div className="  border flex items-center justify-center  rounded-md p-1">
            <input onChange={(e)=>{
              if(e.target.value==""){
                setSuggestion([])
              }
              setQuery(e.target.value)
            }} type="text" className=" w-[100%]   p-4 font-gilory  focus:outline-none focus:ring-0   " placeholder='search for restaurants' />
            <CiSearch  className="w-[30px] h-[30px]  mr-5"/>
            </div>
           <div className="overflow-hidden flex flex-col gap-4 rounded mt-3">
           {
           suggestion ? (suggestion.map((item,index)=>{
            
            return <SuggestionBox key={index} name={item.text} subCategory={item.subCategory} img={CloudinaryURL +item.cloudinaryId}/>
           })):([])
           }
           </div>
           
        </div>
    </div>
  )
}

export default Search
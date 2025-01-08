import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import Card from "./Card"
import Shimmer from "./Shimmer"

const CraouselRest = () => {
    const{id}=useParams()
    const[data,setData]=useState([])
    const[details,setDetails]=useState({})
     const[isLoading,setIsLoading]=useState(true)

    useEffect(()=>{

        const getalldata=async()=>{
            let response=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6489049&lng=77.271046&collection=${id}&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
            let data=await response.json()
         
            setData(data.data.cards.slice(3))
            setDetails(data.data.cards[0].card.card)
            setIsLoading(false)
            
            
        }
        getalldata();
    },[])
  return (
    <div>

        <Navbar/>

       {
        isLoading ?(<Shimmer/>):(<div className="w-3/4  mx-auto">
          <div className="mt-[60px] mb-[30px] ml-[16px] p-2">
          <h1 className="font-Novabold text-[40px] ">{details.title}</h1>
          <p className="font-NovaRegular text-[14px] opacity-50">{details.description }</p>
          <p className="font-giloryExtraBold text-[24px] mt-5">{details.count} to explore </p>
          </div>
          <div className="grid grid-cols-4 gap-4 p-2">
          
           {
             details ? (  
               data && data.map((item,index)=>{
                 
                   return (
                     <Card key={index} name={item.card.card.info.name} rating={item.card.card.info.avgRating} header={item.card.card.info.aggregatedDiscountInfoV3 ? item.card.card.info.aggregatedDiscountInfoV3.header: ''} subheader={item.card.card.info.aggregatedDiscountInfoV3 ? item.card.card.info.aggregatedDiscountInfoV3.subHeader: ''} area={item.card.card.info.areaName} img={item.card.card.info.cloudinaryImageId} time={item.card.card.info.sla.slaString} id={item.card.card.info.id} cuisines={item.card.card.info.cuisines}/>
                   )
    
               })):(<Shimmer/>)
           }
          </div>
          </div>)
       }
      

    </div>
  )
}

export default CraouselRest
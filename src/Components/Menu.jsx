import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


import logo from '../assets/Restautants/asset 67.svg'
import Navbar from "./Navbar"

const Menu = () => {
const[menuData,setMenuData]=useState()
 const{id}=useParams() 
 useEffect(()=>{
    
    const getdata = async()=>{
        const response=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6489049&lng=77.271046&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
    const data=await response.json();
    setMenuData(data.data)
    console.log(data.data)
    }
    getdata()
 },[])


  return (
    <div>
        <Navbar/>
        <div className="w-[800px] mx-auto mt-10 ">
        <h1 className="font-giloryExtraBold text-[24px] py-4">{menuData ? menuData.cards[0].card.card.text:[]}</h1>
        <div className="mt-2 w-full  px-4 pb-4  gap-2 shadow-inner rounded-3xl bg-[#f1efef] border-gray-300">
            <div className="flex flex-col gap-y-3 p-3 border bg-white rounded-3xl">
                <div className="flex gap-x-2 font-giloryExtraBold">
                    <img src={logo} alt="" />
                    <span>{menuData ?menuData.cards[2].card.card.info.avgRating:[]}</span>
                    <span>{menuData ? menuData.cards[2].card.card.info.totalRatingsString:[]}</span>
                    <span>{menuData ?  menuData.cards[2].card.card.info.costForTwoMessage:[]}</span>

                    
                </div>
                <p className="hover:text-lightOrange font-giloryExtraBold cursor-pointer">{menuData ? menuData.cards[2].card.card.info.cuisines:[]}</p>

                <div className="flex gap-x-3   w-[30%]   p-2">
                    <div className="flex flex-col items-center">
                        <div className="w-[5px] h-[5px] rounded-full bg-black"></div>
                        <div className="w-[1px] h-[30px] bg-black"></div>
                        <div className="w-[5px] h-[5px] rounded-full bg-black"></div>
                    </div>
                    <div>
                    <div className="flex gap-x-2">
                    <p className="font-gilory ">Outlet</p> 
                    <p className="opacity-50 text-sm">{menuData ? menuData.cards[2].card.card.info.areaName:[]}</p>
                    </div>
                    <p className="text-sm font-giloryExtraBold">{menuData ? menuData.cards[2].card.card.info.sla.slaString:[]}</p>
                    </div>
                    </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Menu
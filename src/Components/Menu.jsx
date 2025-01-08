import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import deals from '../assets/deals/deal-of-day.avif'
import flat from '../assets/deals/flat.avif'
import { CiSearch } from "react-icons/ci";
import logo from '../assets/Restautants/asset 67.svg'
import Navbar from "./Navbar"
import SubMenu from "./SubMenu";
import Search from "./Search";
import Loader from "./Loader";


const Menu = () => {
const[menuData,setMenuData]=useState()
 const{id}=useParams() 
 const navSearch=useNavigate()
 const[isLoading,setIsLoading]=useState(true)
 
 useEffect(()=>{
    
    const getdata = async()=>{
        const response=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6489049&lng=77.271046&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
    const data=await response.json();
    setMenuData(data.data)
     setIsLoading(false)
    }
    getdata()
 },[])


  return (
    <div>
        <Navbar/>
        
       {
        isLoading ? (<Loader/>):( <div className="w-[800px] mx-auto mt-10 ">
        

            {/* rating card and outlet */}
            <div>
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
    
            {/* deals for you */}
            <h1 className="font-giloryExtraBold text-[24px] mt-8  mb-4">
                    Deals for you 
                </h1>
    
            <div className=" flex gap-10 ">
                
    
                <div className="border rounded-3xl border-opacity-25 p-4 w-[360px] h-[77px]">
                    <div className="flex gap-x-4 items-center">
                    <img src={deals} alt="" className="w-[50px] h-[50px]" />
                   <div className="flex flex-col">
                   <p className="font-giloryExtraBold">Item At rs79</p>
                   <p className="opacity-30 uppercase">on select ITEMS</p>
                   </div>
                    </div>
                </div>
    
                
                <div className="border rounded-3xl border-opacity-25 p-4 w-[327px] h-[77px]">
                    <div className="flex gap-x-4 items-center">
                    <img src={flat} alt="" className="w-[50px] h-[50px]" />
                   <div className="flex flex-col">
                   <p className="font-giloryExtraBold">Flat Rs 300 OFF</p>
                   <p className="opacity-30 uppercase">on select ITEMS</p>
                   </div>
                    </div>
                </div>
             </div>
    {/* menu bar */}
    
                <div className="pt-8 pb-4 flex items-center justify-center h-[71px] ">
                    <p>
                        MENU
                    </p>
                </div>
     {/* menu Input */}
    
    <button onClick={()=>{
        navSearch('/Search')
    }} className="flex items-center justify-center w-full h-[47px] font-GilorysemiBold text-[#dd3] opacity-20 bg-black rounded-xl gap-4 hover:opacity-35">
        Search for Dishes   <p className='text-[#dd3] text-[30px] w-[5px] '> <CiSearch /> </p>
    </button>
    
    
    
    {/* SUbmenu */}
    
    {
        menuData ? (menuData.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(1,-2).map((item,index)=>{
    
            return(
               <SubMenu key={index} title={item.card.card} items={item.card.card} />
    
            )
        })):([])
    }
     
    
    
            </div>
             )

       }
         

    </div>
  )
}

export default Menu
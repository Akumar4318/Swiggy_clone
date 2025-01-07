import { useState } from "react";
import { CiGps } from "react-icons/ci";

const Sidebar = () => {

        const[isShow,setIsShow]=useState(false)

        function clickHandler(){
            setIsShow(true)
            console.log(isShow)
        }
        


  return (
    
         <div className="w-[40%] border h-lvh ">
            <div className="pl-[188px] pr-[40px] scroll-auto scroll-pr-1 ">
            
                <button className="flex h-[61px]   items-end  text-xl mb-[31px]" onClick={clickHandler}>X</button>
               
                    <input className="border border-[#282c3f] border-opacity-50 h-[50px] w-full font-gilory mb-5 shadow-md" placeholder="    Search for area,streetname.." type="text" />
                
                <div className="p-5 border  border-[#282c3f] flex gap-3 h-[85px] w-full shadow-md ">
                   <div className="text-2xl">
                    <button><CiGps /></button>
                   </div>
                   <div className="flex flex-col ">
                    <p className="font-gilory cursor-pointer hover:text-darkOrange">Get current location</p>
                    <p className="font-giloryLight opacity-50">using GPS</p>
                   </div>
                </div>
            </div>

         </div>
    
  )
}

export default Sidebar
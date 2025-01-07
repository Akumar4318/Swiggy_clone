import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import MenuCard from "./MenuCard";

const SubMenu = ({ title, items }) => {
  const [showmenu, setShowmenu] = useState(false);
  const [showSubmenu, setshowSubMenu] = useState(false); 

  const toggleSubmenu = (index) => {
    setshowSubMenu((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };

  return (
    <div className="  gap-4 p-3 mt-5">
       <div className="bg-[#282c3f] opacity-25 rounded w-full h-[15px]"> </div>
      <div className="  mt-2 ">
        <div
          onClick={() => setShowmenu(!showmenu)}
          className="font-giloryExtraBold cursor-pointer text-[18px]   flex justify-between items-center px-3"
        >

          {title.title} {showmenu ? (<IoIosArrowUp/>):(<IoIosArrowDown/>)}
        </div>
       
        {showmenu && (
          <div >
            {items.itemCards &&
              items.itemCards.map((item, index) => (
              <div key={index}>
                 <MenuCard name={item.card.info.name} isveg={item.card.info.itemAttribute.vegClassifier} desc={item.card.info.description} price={item.card.info.price ? item.card.info.price/100:item.card.info.defaultPrice/100} imageid={item.card.info.imageId}/> 

                
                
              </div>
              
              ))}

            {items.categories &&
              items.categories.map((item, index) => (
                <div key={index}>
                  <p
                    onClick={() => toggleSubmenu(index)}
                    className="cursor-pointer font-gilory  flex gap-y-3 p-3 justify-between items-center"
                  >
                    {item.title}-({item.itemCards.length}) 
                  </p>
                  <div className="bg-[#282c3f] opacity-25 rounded w-full h-[1px]">

                  </div>

                  {showSubmenu[index] && (
                    <div className="p-2">
                      {item.itemCards &&
                        item.itemCards.map((subItem, subIndex) => (
                         <div key={subIndex}>
                             <MenuCard name={subItem.card.info.name} isveg={subItem.card.info.itemAttribute.vegClassifier} desc={subItem.card.info.description} price={subItem.card.info.defaultPrice/100} imageid={subItem.card.info.imageId}/>

                             
                         </div>
                        ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubMenu;

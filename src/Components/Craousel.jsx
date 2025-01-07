import { CloudinaryURL } from "../Utils/Link"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Craousel = ({data}) => {
  
    // let data=props.data

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />, // Custom next button
    prevArrow: <CustomPrevArrow />,
      };
    
    return (
        <>
        
        <h2 className='text-[24px] font-giloryExtraBold flex justify-end gap-x-[900px] '>What's on your mind? 
            <div className="w-[75px] h-[33px] flex items-center justify-center gap-2">
        
        </div>
        </h2>
        
        <div  style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none", 
        }} className=''>
            <Slider {...settings}>
            {data && data.map((item) => {
                return <img key={item.id} className='h-[250px] w-[360px]' src={CloudinaryURL + item.imageId} />
            })}
            </Slider>
        </div>

     
        </>
      )
}


const CustomNextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-[-19px] right-[1px] transform -translate-y-1/2 z-10 w-[31px] h-[33px] justify-center items-center bg-[#02060c] bg-opacity-5 hover:bg-opacity-15 rounded-full flex cursor-pointer"
        onClick={onClick}
      >
        <GoArrowRight  className="w-[15px] h-[15px]" />
      </div>
    );
  };
  
  // Custom Previous Button
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-[-19px] left-[1170px] transform -translate-y-1/2 z-10 w-[31px] h-[33px] justify-center items-center bg-[#02060c] bg-opacity-5 hover:bg-opacity-15 rounded-full flex cursor-pointer"
        onClick={onClick}
      >
        <GoArrowLeft  className="w-[15px] h-[15px]" />
      </div>
    );
  };
  

export default Craousel
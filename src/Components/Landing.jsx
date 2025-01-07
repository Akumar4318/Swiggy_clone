
import logo from '../assets/Landing/logo.png'
import leftimg from '../assets/Landing/left.png'
import rightimg from '../assets/Landing/right.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import c1 from '../assets/Landing/c1.png'
import c2 from '../assets/Landing/c2.png'
import c3 from '../assets/Landing/c3.png'
import c4 from '../assets/Landing/c4.png'
import { MdArrowOutward } from "react-icons/md";
import { Route,Routes,NavLink, useNavigate } from 'react-router-dom';
import SwiggyCorporate from './SwiggyCorporate';
import Restautants from './Reasturant';

const Landing = () => {

    const nav=useNavigate()
    const navCard=useNavigate()
    const navInsta=useNavigate()
    const navDineout=useNavigate()
    const navGenie=useNavigate()

  return (
    <div  className="bg-[#ed5325] h-auto   ">

       <div>
       <div className='flex justify-between  py-[32px] px-[157px]'>
            <img src={logo} alt=""  className='w-[159px] h-[47px]'/>

        <div className='flex text-[#ffff] items-center gap-6'>
           <NavLink to='/swiggycorporate'><p className=' font-giloryBlack '>Swiggy Corporate</p></NavLink>
           <p className='font-semibold cursor-pointer font-giloryBlack' onClick={()=>{
            nav("/swiggycorporate")
           }} >Partner with us</p>
          <div  className='py-[12px] px-[16px] rounded-xl w-[149px] h-[53px] border  border-white  font-giloryBlack flex'>
          <button className='flex items-center gap-x-2'>Get the App <MdArrowOutward  className=''/></button>
          </div>
           <button className='py-[12px] px-[16px] rounded-xl w-[130px] h-[50px]  font-giloryBlack bg-black'>Sign in</button>
        </div>

        </div>
       </div>
        

        <div className='relative w-full  py-[64px]'>
            <img src={leftimg} alt="" className='h-[450px] w-[250px] left-0 absolute top-[100px] z-50' />
            <div>
                <p className='text-[48px] text-white font-bold text-center font-gilory'>Order food & groceries. Discover <br/>     best restaurants. Swiggy it!</p>

            </div>

            <div className='pt-[24px] flex items-center justify-center gap-x-10'>
                {/* for location */}
                <div className='flex  rounded-xl  gap-x-2 w-[301px] h-[59px] bg-white items-center  px-3'> 
                    <p className='text-[#ff5200] w-[5px]'><FaLocationDot /></p>

                    <input type="text" name="" id="" placeholder='Enter you location' className='bg-white border-none font-giloryLight text-gray-500 ml-3' />

                    <p className='text-black text-[20px] w-[5px]'> <FaChevronDown /></p>
                     </div>

                {/* for search items */}

                <div className='flex  rounded-lg  gap-x-2  2 w-[500px] h-[59px] bg-white items-center  px-3 justify-around  '>  

                <input type="text" name="" id="" placeholder='Search for restaurant, item or more' className='bg-white font-giloryLight text-gray-500 ml-3 w-[276px] h-[24px] ' />

                <p className='text-black text-[30px] w-[5px] '> <CiSearch /> </p>
                                </div>
            </div>
            <img   src={rightimg} alt=""  className='h-[450px] w-[250px] right-0 absolute top-[120px] z-50' />

            
        </div>


        <div className='h-[405px] flex justify-center relative '>

            <img src={c1} alt="" className='z-100 p-3 cursor-pointer' onClick={()=>{
                navCard("/Restautants")
            }} />
            <img src={c2} alt="" className=' p-3 cursor-pointer'  onClick={()=>[
                navInsta('/instamart')
            ]} />
            <img src={c3} alt=""  className=' p-3 cursor-pointer'  onClick={()=>[
                navDineout('/dineout')
            ]}/>
            <img src={c4} alt="" className='z-100  cursor-pointer  p-3'  onClick={()=>[
                navGenie('/genie')
            ]} />

        </div>
       




       
    </div>
  )
}

export default Landing
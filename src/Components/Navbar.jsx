import React, { useState } from 'react';
import logo from '../assets/Restautants/logo.svg';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import corporate from '../assets/Restautants/Corporate1.svg';
import search from '../assets/Restautants/search.svg';
import offers from '../assets/Restautants/offer.svg';
import Help from '../assets/Restautants/help.svg';
import signin from '../assets/Restautants/signIn.svg';
import cart from '../assets/Restautants/cart.svg';
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState('Other');

  const navsearch = useNavigate();
  const navHelp = useNavigate();
  const navswiggyCorporate = useNavigate();
  const navOffer = useNavigate();
  const navCart = useNavigate();
  const navApp=useNavigate()

  return (
    <div>
      <div className='shadow-lg'>
        <div className='flex ml-40 p-2 items-center gap-x-10 mt-4'>
          <NavLink to='/'>
            <img src={logo} alt="" className='transition-all duration-200 hover:scale-110' />
          </NavLink>

          <button className='flex gap-3 items-center hover:text-darkOrange cursor-pointer'>
            <div className='flex items-center gap-x-5'>
              <span className='font-gilory '>{currentSection}</span>
              {currentSection === 'Other' && (
                  
                  <div>
                    <FaChevronDown />
                  </div>
               
              )}
            </div>
          </button>

          <div className='flex justify-end h-14 items-center w-[80%]'>
            <ul className='flex gap-x-12 h-full'>
              <div onClick={() => navswiggyCorporate('/SwiggyCorporate')} className='flex h-full gap-x-2 items-center justify-center hover:text-darkOrange cursor-pointer'>
                <img src={corporate} alt="" className='w-[19px] h-[19px]' />
                <li className='font-gilory'>Swiggy Corporate</li>
              </div>
              <div onClick={() => navsearch('/Search')} className='flex h-full items-center justify-center hover:text-darkOrange cursor-pointer gap-x-2'>
                <img src={search} alt="" className='w-[19px] h-[19px]' />
                <li className='font-gilory'>Search</li>
              </div>
              <div onClick={() => navOffer('/Offers')} className='flex items-center justify-center gap-x-2 hover:text-darkOrange cursor-pointer h-full'>
                <img src={offers} alt="" className='w-[19px] h-[19px]' />
                <li className='font-gilory'>Offers</li>
              </div>
              
              <div onClick={() => {
                setCurrentSection('Help'); 
                navHelp('/Help'); 
              }} className='flex h-full items-center justify-center gap-x-2 hover:text-darkOrange cursor-pointer'>
                <img src={Help} alt="" className='w-[19px] h-[19px]' />
                <li className='font-gilory'>Help</li>
              </div>
              <div className='flex h-full items-center justify-center gap-x-2 hover:text-darkOrange cursor-pointer'>
                <img src={signin} alt="" className='w-[19px] h-[19px]' />
                <li className='font-gilory'>Sign</li>
              </div>
              <div onClick={() => navCart('/Cart')} className='flex h-full items-center justify-center gap-x-2 hover:text-darkOrange cursor-pointer'>
                <img src={cart} alt="" className='w-[19px] h-[19px]' />
                <li className='font-gilory'>Cart</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

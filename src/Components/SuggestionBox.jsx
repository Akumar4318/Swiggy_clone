
import React from 'react'

const SuggestionBox = ({name,img,subCategory}) => {
  return (
    <div >
       <div className='flex gap-x-3 mt-4 h-[91px] ' >
       <img src={img} alt="" className="w-[112px] h-[112px] rounded-lg" />
      <div className='flex flex-col mt-7'>
      <p className='font-NovaRegular'>{name}</p>
      <p className='font-NovaRegular opacity-50'>{subCategory}</p>
      </div>
       </div>
    </div>
  )
}

export default SuggestionBox
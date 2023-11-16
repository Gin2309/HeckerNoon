import React, { useState } from "react"
function Drawer({ isOpen }) {
  return (
    <div className='relative'>
      <div
        className={`absolute right-0 h-[450px] w-[550px] bg-white shadow-lg transform ${
          isOpen ? "translate-x-0 " : "translate-x-full"
        } transition-transform duration-300 ease-in-out `}>
        <div className='p-4 h-[500px] '>
          <div className='flex'>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className='relative  border-dashed border-[3px] w-[520px] h-[170px]'>
            <label
              for='img'
              className='absolute inset-0 h-full flex flex-col justify-center uppercase content-center text-center text-[#aaa] cursor-pointer'>
              <div className='text-[20px] '>
                Click to upload{" "}
                <span className='font-bold'>featured image</span>
              </div>
              <div className='text-[14px] p-[10px]'>
                recommended size (1400X600)
              </div>
              <div className='text-[14px] p-[10px]'>max file size (5mb)</div>
              <input
                className='hidden p-[10px] w-full'
                type='file'
                name=''
                id='img'
              />
            </label>
          </div>

          <div className='pt-[10px]'>
            <label className='font-bold'>Tags</label>
            <div className='flex justify-between '>
              <input
                type='text'
                placeholder='Add Tag...'
                className='w-3/4 placeholder:text-[18px] placeholder:font-bold focus:outline-none bg-[#eeeeee] pt-[8px] pr-[80px] pb-[8px] pl-[15px] mt-[5px] mb-[5px]'
              />
              <div className='text-[16px] text-[#aaa]'> 0 of 8</div>
            </div>
          </div>
          <div className='flex flex-col pt-[10px]'>
            <label className='font-bold'>Category</label>
            <select
              className="'w-[320px] text-[#aaa] font-bold placeholder:text-[18px] placeholder:text-bold focus:outline-none bg-[#eeeeee] pt-[8px] pr-[80px] pb-[8px] pl-[15px] mt-[5px] mb-[5px]"
              name='category'
              id=''>
              <option value='0'>Choose Category</option>
              <option value='1'>Programming</option>
              <option value='2'>Finance</option>
              <option value='3'>Science</option>
              <option value='4'>Data-Science</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Drawer

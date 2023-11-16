import React from "react"
import { useState } from "react"
import { Drawer } from "../components"

function Write() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='block box-border bg-white  '>
        <div className='h-[40px] '>
          <ul className=' bg-[#f5f5f5] flex items-center  h-[40px]  text-[13px] font-[900] uppercase w-full justify-end text-[#007700] '>
            <li className='mr-[25px] hover:bg-[#007700] hover:text-[#00BB00] p-[10px] cursor-pointer'>
              save
            </li>
            <li className='mr-[25px] hover:bg-[#007700] hover:text-[#00BB00] p-[10px] cursor-pointer'>
              preview
            </li>
            <div className=''></div>
            <li
              className='mr-[25px] hover:bg-[#007700] hover:text-[#00BB00] p-[10px] cursor-pointer '
              onClick={toggleDrawer}>
              story setting
            </li>
          </ul>
          <Drawer isOpen={isOpen} />
        </div>
        <div className=' flex justify-center w-full pt-0 my-[100px] mr-auto ml-50px'>
          <form action='submit' className='h-[200px] w-[60%] '>
            <textarea
              type='text'
              name=''
              id=''
              placeholder='Title'
              className='overflow-hidden resize-none text-[36px] font-bold placeholder:text-[36px] placeholder:font-[700] placeholder:text-gray- p-[8px] h-[66px] w-full focus:outline-none'
            />
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Write something nice'
              className='focus:outline-none w-full resize-none  p-[8px]'
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Write

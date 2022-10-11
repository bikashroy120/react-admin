import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navber = () => {
  return (
    <div className="navbar w-full flex h-[55px] border-b border-gray-200">
      <div className="wrapper flex items-center justify-between px-5 w-[100%] ">
        <div className="search border border-gray-200 p-[3px]">
          <input type="text" placeholder="Search..." className=' outline-none border-none bg-transparent'/>
          <SearchOutlinedIcon />
        </div>
        <div className="items flex items-center justify-center gap-7 ">
          <div className="item flex items-center ">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item relative">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter absolute -top-[5px] -right-[5px] bg-red-600 w-5 h-5 text-[13px] text-white rounded-full flex items-center justify-center">1</div>
          </div>
          <div className="item relative ">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter absolute -top-[5px] -right-[5px] bg-red-600 w-5 h-5 text-[13px] text-white rounded-full flex items-center justify-center">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar w-[30px] h-[30px] rounded-full"
            />
          </div>
        </div>
      </div>
  </div>
  )
}

export default Navber
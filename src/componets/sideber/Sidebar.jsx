import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';
import './sideber.css'

const Sidebar = () => {
  return (
    <div className=' flex-[1] min-h-screen  border-r border-gray-200'>
      <div className=''>
          <h2 className='py-2 text-center text-[25px] text-[#6439ff]'>lamadmin</h2> 
          <hr />
          <ul className='mt-3 ml-5 sidber'>
            <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <p className="title mt-3 text-[15px]">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2 text-[18px]'>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
                <StoreIcon className="icon" />
                <span>Products</span>
              </li>
            </Link>
            <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
            <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </li>
            <p className="title mt-3 text-[15px]">USEFUL</p>
            <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title mt-3 text-[15px]">SERVICE</p>
            <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>
            <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
            <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </li>
            <p className="title mt-3 text-[15px]">USER</p>
            <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
            <li className='p-1 cursor-pointer hover:bg-[#ece8ff] flex items-center justify-start gap-2'>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
            
           
          </ul>
      </div>
    </div>
  )
}

export default Sidebar
import React from 'react'
import Navber from '../../componets/navber/Navber'
import Sidebar from '../../componets/sideber/Sidebar'
import Weizect from '../../componets/weizect/Weizect'



const Home = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className=" flex-[6]">
        <Navber />
        <div className="px-4 flex gap-4 mt-4">
          <Weizect type="user" />
          <Weizect type="order" />
          <Weizect type="earning" />
          <Weizect type="balance" />
        </div>
      </div>
    </div>
  )
}

export default Home
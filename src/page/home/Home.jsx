import React from 'react'
import Sidebar from '../../componets/sideber/Sidebar'


const Home = () => {
  return (
    <div className='flex bg-red-500'>
      <Sidebar />
      <div className=" flex-[6]">
        contaoner
      </div>
    </div>
  )
}

export default Home
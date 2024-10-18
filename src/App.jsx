import React from 'react'
import Scene from './components/Scene'

const App = () => {
  return (
    <div className=' h-screen w-full'>
      <Scene />

      <div className=' absolute h-full w-full top-0 left-0 pointer-events-none overflow-hidden'>
        <div className=' sm:h-full sm:w-1/2 p-10 h-fit w-full '>
          <h1 className=' text-white mt-[10vw] sm:text-[5vw] text-[6vh] font-medium tracking-tighter leading-none'>FIGHT FOR</h1>
          <h1 className=' text-white sm:text-[5vw] text-[6vh] font-medium tracking-tighter leading-none'>PEACE</h1>
          <button className=' px-5 py-2 rounded-md sm:mt-10 mt-5 font-semibold  bg-white'>Explore more</button>
        </div>
      </div>
    </div>
  )
}

export default App
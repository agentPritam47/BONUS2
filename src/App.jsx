import React from 'react'
import Scene from './components/Scene'

const App = () => {
  return (
    <div className=' h-screen w-full'>
      <Scene />

      <div className=' absolute h-full w-full top-0 left-0 pointer-events-none'>
        <div className=' h-full w-1/2 p-10'>
          <h1 className=' text-white mt-[10vw] text-[5vw] font-medium tracking-tighter leading-none'>FIGHT FOR</h1>
          <h1 className=' text-white text-[5vw] font-medium tracking-tighter leading-none'>PEACE</h1>
          <button className=' px-5 py-2 rounded-md mt-10 font-semibold  bg-white'>Explore more</button>
        </div>
      </div>
    </div>
  )
}

export default App
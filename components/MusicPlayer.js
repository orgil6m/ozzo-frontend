import React from 'react'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const MusicPlayer = () => {
  return (
    <div className='fixed w-screen h-24 bottom-0 bg-neutral-800 border-t border-gray-400 flex'>
      <div className='w-1/4 '>

      </div>
      <div className='w-2/4 flex justify-center items-center'> 
        <div className="relative pt-1 w-2/3">
          {/* <input className="rounded-lg overflow-hidden appearance-none bg-neutral-700 h-1 w-full " type="range" min="1" max="1000" step="1" /> */}
          <div className='relative w-full h-1 bg-neutral-700 rounded-full'>
            <div className='absolute '>

            </div>
          </div>
        </div>
      </div>
        <div className='w-1/4 '>
      </div>
    </div>
  )
}

export default MusicPlayer
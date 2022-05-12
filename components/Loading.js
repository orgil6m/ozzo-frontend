import React from 'react'

function Loading() {
  return (
    <div className='fixed inset-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center z-50'>
       <div className=" h-10 rounded-md  transition-all duration-300 ease-in-out  flex justify-center items-center">
          <div className="w-10 h-10 border-4 rounded-full animate-spin" role="status" 
          style={{"borderColor": 'rgb(239 68 68) transparent rgb(239 68 68) transparent'}}>
          </div>
      </div>
    </div>
  )
}

export default Loading
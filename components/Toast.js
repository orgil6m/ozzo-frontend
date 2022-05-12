import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Toast({msg, icon, color, hide}) {
  return (
    <AnimatePresence>
        <motion.div className='fixed right-10 top-12 z-50' initial="pageInitial" animate="pageAnimate"  variants={{
          pageInitial: {
            scale : 0.8
          },
          pageAnimate: {
            scale : 1
          },
        }}>
            <div className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-md " role="alert">
                <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${color} rounded-lg`}>
                  {icon}
                </div>
                <div className="mx-3 text-sm font-normal"> 
                  {msg.msg}
                </div>
                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 rounded-lg p-1.5 focus:ring-0 hover:bg-gray-100 inline-flex h-8 w-8  " data-dismiss-target="#toast-success" aria-label="Close" onClick={hide}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" >
                        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                    </svg>
                </button>
            </div>
        </motion.div>
    </AnimatePresence>
  )
}

export default Toast
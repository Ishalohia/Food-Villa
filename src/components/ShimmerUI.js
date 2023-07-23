import React from 'react'

const ShimmerUI = () => {
  return (
    <>
        <div className="flex flex-wrap justify-center gap-10 w-auto">
          {Array(10).fill(" ").map((e, index)=>
            (<div key={index} className="w-48 h-48 bg-gray-100 border border-gray-300 "></div>)
          )}
        </div>
    </>
  )
}

export default ShimmerUI


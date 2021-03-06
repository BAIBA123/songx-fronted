import React from 'react'

export default function Project () {
  const list = new Array(6).fill('')
  return (
    <div className="flex flex-wrap">
      {list.map((item, index) => {
        return (
          <div className="w-1/2 md:w-1/4 xl:w-1/6 mb-4 px-2" key={index}>
            <div className="sk h-32 mb-2 md:h-24 xl:h-20"></div>
            <p className="sk h-4 w-3/4 mb-2"></p>
            <p className="sk h-4 w-1/2 mb-2"></p>
          </div>
        )
      })}
    </div>
  )
}

import React from 'react'

export default function List () {
  const list = new Array(15).fill('')
  return (
    <div className="flex flex-wrap">
      {list.map((item, index) => {
        return (
          <div className="w-1/2 md:w-1/4 xl:w-1/5 px-2 mb-8" key={index}>
            <div className="sk h-32 w-full mb-2"></div>
            <p className="sk h-4 mb-2"></p>
            <p className="sk h-4 w-1/2"></p>
          </div>
        )
      })}
    </div>
  )
}

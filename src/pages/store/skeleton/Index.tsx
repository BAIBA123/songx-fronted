import React from 'react'

export default function List () {
  const list = new Array(15).fill('')
  return (
    <div className="flex flex-wrap">
      {list.map((item, index) => {
        return (
          <div className="w-1/2 md:w-1/4 lg:w-1/5 mb-4 px-2" key={index}>
            <div className="sk h-32 w-full mb-2"></div>
            <p className="sk h-4 mb-2"></p>
            <p className="flex justify-between">
              <span className="sk h-4 w-1/4"></span>
              <span className="sk h-4 w-1/2"></span>
            </p>
          </div>
        )
      })}
    </div>
  )
}

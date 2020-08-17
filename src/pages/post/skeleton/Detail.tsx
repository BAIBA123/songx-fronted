import React from 'react'

export default function Detail () {
  return (
    <div className="flex">
      <div className="left max-w-800px w-full">
        <div className="sk h-48 md:h-72 xl:h-80 w-full rounded-md mb-10"></div>

        <div className="flex mb-10">
          <div className="sk h-10 w-10 rounded-full mr-2 flex-shrink-0"></div>
          <div className="w-full">
            <p className="sk h-4 w-1/6 mb-2"></p>
            <p className="sk h-4 w-1/2"></p>
          </div>
        </div>

        <div className="sk h-10 w-1/3 mb-2"></div>

        <div className="flex w-full mb-10">
          <span className="sk w-8 h-4 rounded-lg mr-2"></span>
          <span className="sk w-8 h-4 rounded-lg"></span>
        </div>

        <div className="sk h-64 mb-10 rounded-md"></div>
      </div>

      <div className="right"></div>
    </div>
  )
}

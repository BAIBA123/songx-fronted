import React from 'react'

export default function Post () {
  const list: number[] = [1, 1, 1, 1, 1]

  const ele = list.map((item, index) => {
    return (
      <div className="flex w-full md:w-1/2 xl:w-1/3 mb-8" key={index}>
        <div className="w-1/5">
          <div className="sk h-4 mb-2 w-3/4"></div>
          <div className="sk h-4 w-1/2"></div>
        </div>
        <div className="w-4/5">
          <div className="flex mb-2">
            <div className="sk h-10 w-16 mr-2"></div>
            <div className="w-full">
              <p className="sk h-4 w-3/4 mb-2"></p>
              <p className="sk h-4 w-1/6"></p>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="sk h-10 w-16 mr-2"></div>
            <div className="w-full">
              <p className="sk h-4 w-3/4 mb-2"></p>
              <p className="sk h-4 w-1/6"></p>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="sk h-10 w-16 mr-2"></div>
            <div className="w-full">
              <p className="sk h-4 w-3/4 mb-2"></p>
              <p className="sk h-4 w-1/6"></p>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="sk h-10 w-16 mr-2"></div>
            <div className="w-full">
              <p className="sk h-4 w-3/4 mb-2"></p>
              <p className="sk h-4 w-1/6"></p>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="sk h-10 w-16 mr-2"></div>
            <div className="w-full">
              <p className="sk h-4 w-3/4 mb-2"></p>
              <p className="sk h-4 w-1/6"></p>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="flex flex-wrap">
      {ele}
    </div>
  )
}

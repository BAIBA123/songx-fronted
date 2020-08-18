import React from 'react'

export default function Link () {
  const list = new Array(6).fill('')

  return (
    <div className="flex flex-wrap">
      {list.map((item, index) => {
        return (
          <div className="w-1/4 md:w-1/6 xl:w-1/12 mb-4" key={index}>
            <div className="sk h-20 w-20 rounded-full mb-2 mx-auto"></div>
            <p className="sk h-4 w-1/2 block mx-auto"></p>
          </div>
        )
      })}
    </div>
  )
}

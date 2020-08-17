import React from 'react'

export default function Note () {
  return (
    <div>
      <div className="md:hidden">
        <p className="sk h-4 w-1/2 mb-2"></p>
        <p className="sk h-16 mb-8"></p>
        <div className="flex">
          <p className="sk w-1/6 h-20 mr-2"></p>
          <div className="w-full">
            <p className="sk h-4 w-1/2 mb-2"></p>
            <p className="sk h-4 w-1/4"></p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex" style={{ height: '178px' }}>
        <div className="sk w-32 h-40 mr-10"></div>
        <div className="w-full">
          <p className="sk h-4 w-1/6 mb-2"></p>
          <p className="sk h-16 mb-8"></p>
          <p className="sk h-4 mb-2 w-1/5"></p>
          <p className="sk h-4 w-1/12"></p>
        </div>
      </div>
    </div>
  )
}

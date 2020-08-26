import React from 'react'

export default function NotFound () {
  return (
    <div
      className="bg-white pt-40 pb-48 bg-contain bg-no-repeat bg-center text-center"
      style={{ backgroundImage: 'url(' + require('../../../public/pics/404.png') + ')' }}>
      <h1 className="mb-8 text-6xl flex justify-center">
        <span className="border-double text-gray-700 h-24 w-24 border-4 -mx-1 bg-white leading-24 font-kxzd">肆</span>
        <span className="border-double text-gray-700 h-24 w-24 border-4 -mx-1 bg-white leading-24 font-kxzd rounded-full">零</span>
        <span className="border-double text-gray-700 h-24 w-24 border-4 -mx-1 bg-white leading-24 font-kxzd">肆</span>
      </h1>
      <p className="text-gray-500 text-xl font-din">404 Page Not Found</p>
      <p className="text-gray-500 text-sm">页面不存在，或正在建设中。</p>
    </div>
  )
}

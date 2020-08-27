import React from 'react'
import { Tooltip } from 'antd'

export default function Footer () {
  return (
    <div className="border-t py-4">
      <div className="box-base flex flex-wrap items-center md:px-8 pt-8">
        <div className="w-full md:w-1/2 xl:w-1/3 mb-6">
          <img className="block mx-auto md:mx-0" src="/logo.png" alt=""/>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 text-center md:text-right xl:text-center mb-6 text-lg">
          <Tooltip placement="top" title="暂时还不能告诉你">
            <a href="1"><i className="text-gray-600 hover:text-gray-800 iconfont icon-weibo px-2"></i></a>
          </Tooltip>
          <Tooltip placement="top" title="暂时还不能告诉你">
            <a href="1"><i className="text-gray-600 hover:text-gray-800 iconfont icon-weixin px-2"></i></a>
          </Tooltip>
          <Tooltip placement="top" title="暂时还不能告诉你">
            <a href="1"><i className="text-gray-600 hover:text-gray-800 iconfont icon-qq px-2"></i></a>
          </Tooltip>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 text-center md:text-left xl:text-right mb-6 text-xs">
          <p className="text-gray-500">偶尔有干净的潘西路过</p>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { Tooltip } from 'antd';

export default () =>  {
  
  return (
    <div className="border-t py-4">
      <div className="flex flex-wrap items-center px-4 md:px-8 max-w-1200px mx-auto pt-8">
        <div className="w-full md:w-1/2 xl:w-1/3 mb-6">
          <img className="block mx-auto md:mx-0" src="/logo.png" alt=""/>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 text-center md:text-right xl:text-center mb-6">
          <Tooltip placement="top" title="bilibili">
            <a href="1"><i className="text-gray-600 hover:text-gray-800 iconfont icon-weibo px-2 text-lg"></i></a>
          </Tooltip>
          <Tooltip placement="top" title="weixin">
            <a href="1"><i className="text-gray-600 hover:text-gray-800 iconfont icon-weixin px-2 text-lg"></i></a>
          </Tooltip>
          <Tooltip placement="top" title="qq">
            <a href="1"><i className="text-gray-600 hover:text-gray-800 iconfont icon-qq px-2 text-lg"></i></a>
          </Tooltip>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 text-center md:text-left xl:text-right mb-6 text-xs">
          <p className="text-gray-500">点燃你的狂热</p>
        </div>
      </div>
    </div>
  )
}
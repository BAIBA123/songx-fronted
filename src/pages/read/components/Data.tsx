import React, {useState, useEffect} from "react";
import { Progress } from 'antd';

export default function Data (){
  return (
    <div className="mb-12">
      <div className="flex">
        <div className="w-1/3 mx-1 py-6 bg-blue-500 rounded-md text-center mb-4">
          <p className="text-3xl font-medium text-white">100</p>
          <p className="text-sm text-white">已购</p>
        </div>
        <div className="w-1/3 mx-1 py-6 bg-orange-500 rounded-md text-center mb-4">
          <p className="text-3xl font-medium text-white">50</p>
          <p className="text-sm text-white">已读</p>
        </div>
        <div className="w-1/3 mx-1 py-6 bg-green-500 rounded-md text-center mb-4">
          <p className="text-3xl font-medium text-white">10</p>
          <p className="text-sm text-white">推荐</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 border border-gray-400 rounded-md py-4 mx-0 md:mx-2 flex pl-8 mb-4 md:mb-0">
          <Progress type="dashboard" percent={75} width={50} />
          <div className="ml-8 font-din">
            <p className="text-lg">完成比：5.85%</p>
            <p className="text-xs text-gray-600">统计自 2014 年 3 月始</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 border border-gray-400 rounded-md py-4 mx-0 md:mx-2 flex pl-8">
          <Progress type="dashboard" percent={5} width={50} strokeColor="green" />
          <div className="ml-8 font-din">
            <p className="text-lg">推荐比：5.85%</p>
            <p className="text-xs text-gray-600">统计自 2014 年 3 月始</p>
          </div>
        </div>
      </div>
    </div>
  )
}
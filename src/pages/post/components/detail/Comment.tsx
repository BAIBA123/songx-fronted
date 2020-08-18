import React from 'react'
import { Popover } from 'antd'
// import {} from 'ant-design/icons'

import emojis from '../../../../utils/configs/emoji'

export default function Comment () {
  const emojiClick = (name: string) => {
    console.log(name)
  }

  const content = emojis.map((item) => {
    return (
      <img
        key={item.name}
        className="h-6 w-6"
        src={`/pics/emoji/${item.src}`}
        onClick={() => emojiClick(item.name)}
        alt=""
      />
    )
  })

  return (
    <div className="bg-gray-100 border rounded-lg p-4">
      <div className="flex justify-between mb-2">
        <span>评论内容</span>
        <Popover placement="topRight" content={<div className="flex flex-wrap w-56 h-56 overflow-auto">{content}</div>} trigger="click">
          <i className="h-6 w-6 bg-blue-600"></i>
        </Popover>
      </div>
      <textarea className="h-16 border w-full rounded-md mb-4 p-2"></textarea>
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <p className="mb-2">昵称</p>
          <input type="text" className="w-full border h-8 rounded-md" />
        </div>
        <div className="w-1/2 pl-2">
          <p className="mb-2">邮箱</p>
          <input type="text" className="w-full border h-8 rounded-md" />
        </div>
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="remember" className="mr-1" />
        <label htmlFor="remember">记住我</label>
        <button className="ml-auto border py-2 px-3 rounded bg-blue-600 text-white">
          发表评论
        </button>
      </div>
    </div>
  )
}

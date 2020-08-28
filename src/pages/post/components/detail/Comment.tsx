import React from 'react'
import { Popover } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
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
    <div className="bg-gray-100 border rounded-lg p-4 text-sm">
      <div className="flex justify-between mb-2">
        <span>评论内容</span>
        <Popover
          placement="topRight"
          content={
            <div className="flex flex-wrap w-56 h-56 overflow-auto">
              {content}
            </div>
          }
          trigger="hover"
        >
          <SmileOutlined className="text-xl cursor-pointer hover:text-blue-500" />
        </Popover>
      </div>
      <textarea className="h-16 border w-full rounded-md mb-2 p-2"></textarea>
      <div className="mb-4 flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-2 mb-2">
          <p className="mb-2">昵称</p>
          <input type="text" className="w-full border h-8 rounded-md" />
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
          <p className="mb-2">邮箱</p>
          <input type="text" className="w-full border h-8 rounded-md" />
        </div>
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="remember" className="mr-1" />
        <label htmlFor="remember">记住我</label>
        <button className="ml-auto border py-1 px-2 rounded bg-blue-600 text-white">
          发表评论
        </button>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Popover, message } from 'antd'
import http from '../../../../utils/http/index'
import { SmileOutlined } from '@ant-design/icons'
import emojis from '../../../../utils/configs/emoji'

interface CommentProps {
  postId: string;
}

export default function Comment (props: CommentProps) {
  const { postId } = props
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [comments, setComments] = useState([{ name: '', date: '', content: '' }])

  const getComments = async () => {
    const res: any = await http.get('rest/comment', { params: { postId } })
    handleComments(res)
    setComments(res)
    setContent('')
    setName(window.localStorage.getItem('s-name') || '')
    setEmail(window.localStorage.getItem('s-email') || '')
  }

  // 处理评论中的表情字符
  const handleComments = (comments: any) => {
    const arr = []
    const pattern = /\[e-[a-zA-Z]*\]/g
    for (const item of comments) {
      item.content = item.content.replace(/[<>/]/g, '')
      console.log(item.content)
      const emojiList = item.content.match(pattern)
      if (!emojiList) {
        arr.push(item)
      } else {
        for (const val of emojiList) {
          for (const v of emojis) {
            if (`${v.name}` === val) {
              item.content = item.content.replace(/\[e-[a-zA-Z]*\]/, `<img class="inline-block h-6 w-6" src="/pics/emoji/${v.src}" alt="">`)
            }
          }
          arr.push(item)
        }
      }
    }
    console.log(arr)
  }

  // 选择表情
  const emojiClick = (name: string) => {
    setContent(content + name)
  }

  // 获取内容、昵称、邮箱
  const handleChange = (e: any) => {
    const name = e.target.name
    const val = e.target.value
    switch (name) {
      case 'name':
        setName(val)
        break
      case 'email':
        setEmail(val)
        break
      default:
        setContent(val)
        break
    }
  }

  const submit = async () => {
    if (name && email && content) {
      await http.post('api/comment', {
        postId,
        name,
        email,
        content
      })
      getComments()
      window.localStorage.setItem('s-name', name)
      window.localStorage.setItem('s-email', email)
    } else {
      message.error('请填写必填项！！！')
    }
  }

  useEffect(() => {
    getComments()
  }, [])

  const html = emojis.map((item) => {
    return (
      <img
        key={item.name}
        className="h-6 w-6 cursor-pointer"
        src={`/pics/emoji/${item.src}`}
        onClick={() => emojiClick(item.name)}
        alt=""
      />
    )
  })

  return (
    <div>
      {comments.map((item, index) => {
        return (
          <div className="flex mb-8" key={index}>
            <div className="h-10 w-10 rounded-full">
              <img src={`/pics/avator/${Math.ceil(Math.random() * 10)}.jpg`} className="h-full" alt=""/>
            </div>
            <div className="flex-grow ml-4 px-4 py-3 bg-gray-100 rounded-lg">
              <p className="flex">
                <span className="mb-1">{item.name}：</span>
                <span className="ml-auto font-din text-gray-400">
                  {moment(item.date).format('YYYY-MM-DD HH:MM:SS')}
                </span>
              </p>
              <div className="text-base text-black" dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
          </div>
        )
      })}
      <div className="bg-gray-100 border rounded-lg p-4 text-sm">
        <div className="flex justify-between mb-2">
          <span>评论内容<sup className="text-red-500">*</sup></span>
          <Popover
            placement="topRight"
            content={
              <div className="flex flex-wrap w-56 h-56 overflow-auto">
                {html}
              </div>
            }
            trigger="hover"
          >
            <SmileOutlined className="text-xl cursor-pointer hover:text-blue-500" />
          </Popover>
        </div>
        <div className="relative">
          <textarea
            className="h-16 border w-full rounded-md mb-2 p-2 resize-none"
            name="content"
            value={content}
            maxLength={100}
            onChange={() => handleChange(event)}
          ></textarea>
          <span className={`absolute bottom-0 right-0 font-din m-2 mb-4 ${content.length === 100 ? 'text-red-500 ' : 'text-gray-500 '}`}>{content.length}/100</span>
        </div>
        <div className="mb-4 flex flex-wrap">
          <div className="w-full md:w-1/2 md:pr-2 mb-2">
            <p className="mb-2">昵称<sup className="text-red-500">*</sup></p>
            <input
              name="name"
              onChange={() => handleChange(event)}
              className="w-full border h-8 rounded-md pl-2"
              value={name}
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2">
            <p className="mb-2">邮箱<sup className="text-red-500">*</sup></p>
            <input
              name="email"
              onChange={() => handleChange(event)}
              className="w-full border h-8 rounded-md pl-2"
              value={email}
            />
          </div>
        </div>
        <div className="flex items-center">
          {/* <input type="checkbox" id="remember" className="mr-1" /> */}
          {/* <label htmlFor="remember">记住我</label> */}
          <button
            onClick={submit}
            className="ml-auto border py-1 px-2 rounded bg-blue-600 text-white"
          >
            发表评论
          </button>
        </div>
      </div>
    </div>
  )
}

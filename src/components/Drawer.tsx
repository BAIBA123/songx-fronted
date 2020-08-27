import React, { useState, useEffect } from 'react'

import moment from 'moment'
import { message } from 'antd'
import '../style/css/animate.css'
import Copy from 'copy-to-clipboard'
import http from '../utils/http/index'
import { CSSTransition } from 'react-transition-group'

interface IBook {
  _id: string;
  pic: string;
  name: string;
  author: string;
}

interface drawerProps {
  bookInfo: IBook;
  showDrawer: boolean;
  toggleDrawer: Function;
}

export default function Drawer (props: drawerProps) {
  const { showDrawer, bookInfo } = props
  const [noteList, setNoteList] = useState([{ date: null, content: '' }])

  const toggleDrawer = (e: any) => {
    e.target.id === 'drawerMask' && props.toggleDrawer(false)
  }

  const getNoteList = async (_id: string) => {
    const res: any = await http.get('/rest/note', {
      params: { book_id: _id }
    })
    setNoteList(res)
  }

  const copy = (content: string) => {
    Copy(content)
    message.success({
      type: 'success',
      content: '复制成功'
    })
  }

  useEffect(() => {
    bookInfo._id && getNoteList(bookInfo._id)
  }, [bookInfo])

  return (
    <CSSTransition
      in={showDrawer}
      timeout={300}
      classNames="drawer"
      unmountOnExit // 退出时卸载,移除元素
    >
      <div
        key="one"
        id="drawerMask"
        onClick={toggleDrawer}
        className="drawer-mask fixed inset-0 z-50"
        style={{ backgroundColor: 'rgba(0,0,0,.4)' }}
      >
        <div className="scrollbar drawer-box absolute top-0 bottom-0 left-0 w-4/5 md:w-1/2 bg-white overflow-y-scroll">
          <div className="px-4 py-8 xl:px-12">
            <div className="flex mb-8">
              <div className="max-w-32 w-1/5 mr-4 flex-shrink-0">
                <img src={bookInfo.pic} className="shadow rounded" alt="" />
              </div>
              <div className="w-4/5">
                <p className="text-lg text-gray-700 truncate mb-1">
                  {bookInfo.name}
                </p>
                <p className="text-sm text-gray-500">{bookInfo.author}</p>
              </div>
            </div>
            {noteList.map(item => {
              return (
                <div
                  key={item.content}
                  className="border-b border-gray-300 border-dashed py-3"
                >
                  <div className="flex items-center w-full mb-4 text-gray-600">
                    <span className="text-xs text-gray-500 font-din">{moment(item.date).format('YYYY/MM/DD HH:MM:SS')}</span>
                    <i onClick={() => copy(item.content)} className="cursor-pointer rounded iconfont icon-copy ml-auto mr-2 px-1 hover:bg-gray-300"></i>
                    <i className="cursor-pointer rounded iconfont icon-share px-1 hover:bg-gray-300"></i>
                  </div>
                  <p>{item.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

import React, { useState, useEffect, useCallback } from 'react'

import { message } from 'antd'
import moment from 'moment'
import Copy from 'copy-to-clipboard'
import NoteSkele from '../skeleton/Note'
import http from '../../../utils/http/index'

export default function Note () {
  const [loading, setLoading] = useState(true)
  const [disabled, setDisabled] = useState(false)
  const [noteActive, setNoteActive] = useState(false)
  const [note, setNote] = useState({
    date: null,
    pic: '',
    book: '',
    author: '',
    content: ''
  })
  const [style, setStyle] = useState({ backgroundImage: '' })

  const getNote = useCallback(async () => {
    setNoteActive(true)
    setLoading(true)
    setDisabled(true)
    setStyle({ backgroundImage: '' })
    const res: any = await http.get('/api/note')
    setNote({
      date: res.date,
      content: res.content,
      pic: res.book_id.pic,
      book: res.book_id.name,
      author: res.book_id.author
    })
    setTimeout(() => {
      setLoading(false)
      setStyle({ backgroundImage: `url(${note.pic})` })
      setDisabled(false)
      setNoteActive(false)
    }, 1000)
  }, [note.pic])

  const copy = () => {
    Copy(note.content)
    message.success({
      type: 'success',
      content: '复制成功'
    })
  }

  const share = () => {}

  useEffect(() => {
    getNote()
  }, [getNote])

  const skeleton: React.ReactElement = <NoteSkele></NoteSkele>

  const html: React.ReactElement = (
    <div>
      {/* 小屏 */}
      <div className="z-10 md:hidden">
        <p className="text-sm text-gray-600 mb-2">
          我在{' '}
          <span className="font-din">
            {moment(note.date).format('YYYY-MM-DD HH:MM:SS')}
          </span>{' '}
          读到
        </p>
        <p className="mb-6 text-base">{note.content}</p>
        <div className="flex">
          <div className="w-1/6 mr-2">
            <img className="rounded-sm" src={note.pic} alt="" />
          </div>
          <div>
            <p className="text-base">{note.book}</p>
            <p className="text-xs text-gray-500">{note.author}</p>
          </div>
        </div>
      </div>

      {/* 大屏 */}
      <div className="hidden md:flex relative z-10">
        <div className="w-32 mr-10 flex-shrink-0">
          <img src={note.pic} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-gray-600 mb-2">
            我在{' '}
            <span className="font-din text-gray-600">
              {moment(note.date).format('YYYY-MM-DD HH:MM:SS')}
            </span>{' '}
            读到
          </p>
          <p className="text-base mb-4">{note.content}</p>
          <p className="text-base mt-auto">{note.book}</p>
          <p className="text-xs text-gray-600">{note.author}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-6 bg-gray-100 relative rounded-lg">
      {/* 背景图 */}
      <div
        className="absolute inset-0 opacity-25 bg-center bg-cover z-0 blur-100"
        style={style}
      ></div>
      {loading ? skeleton : html}
      <div className="absolute text-center cursor-pointer transform right-1/2 translate-x-1/2 border z-10 flex bg-white shadow-md rounded-lg overflow-hidden">
        <i
          onClick={() => copy()}
          className="text-gray-600 block h-10 w-10 hover:bg-gray-300 leading-10 iconfont icon-copy"
        ></i>
        <i
          onClick={() => share()}
          className="text-gray-600 block h-10 w-10 hover:bg-gray-300 leading-10 iconfont icon-share"
        ></i>
        <button
          onClick={getNote}
          disabled={disabled}
          className={'block h-10 w-10 hover:bg-gray-300 leading-10'}
        >
          <i className={`text-gray-600 block iconfont icon-refresh ${noteActive && 'noteActive'}`}></i>
        </button>
      </div>
    </div>
  )
}

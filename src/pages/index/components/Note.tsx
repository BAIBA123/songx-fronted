import React, { useState, useEffect } from 'react'

import moment from 'moment'
import { message } from 'antd'
import Copy from 'copy-to-clipboard'
import NoteSkele from '../skeleton/Note'
import http from '../../../utils/http/index'
import PicHover from '../../../components/PicHover'

export default function Note () {
  const [loading, setLoading] = useState(false)
  const [pic, setPic] = useState('') // 背景图片
  const [note, setNote] = useState({
    date: null,
    pic: '',
    book: '',
    author: '',
    content: ''
  })

  const getNote = async () => {
    setPic('')
    setLoading(true)
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
      setPic(res.book_id.pic)
    }, 1000)
  }

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
  }, [])

  const skeleton: React.ReactElement = <NoteSkele></NoteSkele>

  const html: React.ReactElement = (
    <div>
      {/* 小屏 */}
      <div className="z-10 md:hidden">
        <p className="text-sm font-din text-gray-600 mb-2">
          我在{ moment(note.date).format('YYYY-MM-DD HH:MM:SS') }读到
        </p>
        <p className="mb-6 text-base">{note.content}</p>
        <div className="flex">
          <div className="w-1/6 mr-2">
            <img className="rounded shadow" src={note.pic} alt="" />
          </div>
          <div>
            <p className="text-base">《{note.book}》</p>
            <p className="text-xs text-gray-500">{note.author}</p>
          </div>
        </div>
      </div>

      {/* 大屏 */}
      <div className="hidden md:flex relative z-10">

        <PicHover pic={note.pic} />

        <div className="flex flex-col">
          <p className="text-sm font-din text-gray-600 mb-2">
            我在{ moment(note.date).format('YYYY-MM-DD HH:MM:SS') }读到
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
      <div className="absolute inset-0 opacity-25 bg-center bg-cover z-0 blur-100" style={{ backgroundImage: `url(${pic})` }} ></div>
      {loading ? skeleton : html}
      <div className="absolute text-center cursor-pointer transform right-1/2 translate-x-1/2 border z-10 flex bg-white shadow-md rounded-lg overflow-hidden text-gray-600">
        <i onClick={copy} className="h-10 w-10 hover:bg-gray-300 leading-10 iconfont icon-copy"></i>
        <i onClick={share} className="h-10 w-10 hover:bg-gray-300 leading-10 iconfont icon-share"></i>
        <button onClick={getNote} disabled={loading} className={'h-10 w-10 hover:bg-gray-300 leading-10'}>
          <i className={`block iconfont icon-refresh ${loading && 'noteActive'}`}></i>
        </button>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import Data from './components/Data'
import List from './components/List'
import http from '../../utils/http/index'
import Note from '../index/components/Note'

export default function Index () {
  const pageSize: number = 12
  const [num, setNum] = useState([1, 1, 1])
  const [books, setBooks] = useState([])

  const getBooks = async (pageNo: number = 1) => {
    const res: any = await http.get('/api/book', { params: { pageSize, pageNo } })
    setBooks(res.items)
    setNum(res.num)
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="py-5 md:px-8 box-base">
      {/* 阅读数据 */}
      <Data num={num}></Data>
      {/* 笔记 */}
      <Note></Note>
      {/* 书籍列表 */}
      <List books={books} total={num[0]}></List>
      <Pagination defaultCurrent={1} pageSize={pageSize} total={num[0]} onChange={(pageNo) => getBooks(pageNo)} />,
    </div>
  )
}

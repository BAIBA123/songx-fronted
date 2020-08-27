import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import Data from './components/Data'
import List from './components/List'
import http from '../../utils/http/index'
import Note from '../index/components/Note'

export default function Index () {
  const pageSize: number = 12
  const [total, setTotal] = useState(1)
  const [books, setBooks] = useState([])

  const getBookList = async (pageNo: number = 1) => {
    const res: any = await http.get('/api/book', { params: { pageSize, pageNo } })
    setBooks(res.items)
    setTotal(res.total)
  }

  useEffect(() => {
    getBookList()
  }, [])

  return (
    <div className="read-box py-5 px-4 md:px-8 max-w-1200px mx-auto">
      <Data total={total}></Data>
      <Note></Note>
      <List books={books} total={total}></List>
      <Pagination defaultCurrent={1} pageSize={pageSize} total={total} onChange={(pageNo) => getBookList(pageNo)} />,
    </div>
  )
}

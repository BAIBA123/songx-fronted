import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Pagination } from 'antd'
import { Link } from 'react-router-dom'
import ListSkele from './skeleton/Index'
import http from '../../utils/http/index'

export default function List () {
  const pageSize: number = 12
  const [total, setTotal] = useState(1)
  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState([{ _id: '', name: '', pic: '', date: '' }])

  const getPostList = async (pageNo: number = 1) => {
    const res: any = await http.get('/api/post', { params: { pageSize, pageNo } })
    setPost(res.items)
    setTotal(res.total)
    setLoading(false)
  }

  useEffect(() => {
    getPostList()
  }, [])

  const skeleton = <ListSkele></ListSkele>

  const html = (
    <div className="flex flex-wrap">
      {post.map(item => {
        return (
          <Link to={`/post/${item._id}`} className="px-1 w-1/2 md:w-1/4 mb-4" key={item._id}>
            <div className="shadow-round  rounded-md overflow-hidden border">
              <div className="shawod-lg h-24 sm:h-32 lg:h-40 bg-cover bg-center" style={{ backgroundImage: `url(${item.pic})` }}></div>
              <div className="p-2 sm:p-4">
                <p className="truncate">{item.name}</p>
                <p className="text-xs md:text-sm text-gray-500 font-din">{moment(item.date).format('YYYY-MM-DD')}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )

  return (
    <div className="py-5 px-4 md:px-8 max-w-1200px mx-auto">
      {loading ? skeleton : html}
      <Pagination className="pl-1" defaultCurrent={1} pageSize={pageSize} total={total} onChange={(pageNo) => getPostList(pageNo)} />,
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Pagination } from 'antd'
import http from '../../utils/http/index'
import Skeleton from './skeleton/Index'

export default function Store () {
  const left = [0, 50, 102]
  const pageSize: number = 15
  const [list, setList] = useState([])
  const [total, setTotal] = useState(1)
  const [keyword, setKeyword] = useState(0)
  const [loading, setLoading] = useState(true)

  const getStoreList = async (pageNo: number = 1, type: number = 0) => {
    setKeyword(type)
    console.log(keyword)
    const res: any = await http.get('/rest/store', { params: { pageSize, pageNo, type } })
    setList(res)
    setTotal(res.length)
    setLoading(false)
  }

  useEffect(() => {
    getStoreList()
  }, [])

  const skeleton = <Skeleton></Skeleton>

  const html = (
    <>
      <h3 className="border-t border-b font-din py-4 text-3xl mb-4 mx-2 flex items-center">
        <span>{total}</span>
        <span className="text-gray-400 mr-8 ml-1"> ITEMS</span>
        <div className="text-lg relative pb-1">
          <span className="mr-4 cursor-pointer" onClick={() => getStoreList(1, 0)}>文档</span>
          <span className="mr-4 cursor-pointer" onClick={() => getStoreList(1, 1)}>技术</span>
          <span className="mr-4 cursor-pointer" onClick={() => getStoreList(1, 2)}>其他</span>
          <div className="absolute w-10 h-1 bg-blue-600 bottom-0 duration-200" style={{ transform: `translateX(${left[keyword]}px)` }}></div>
        </div>
      </h3>
      <div className="flex flex-wrap">
        {list && list.map((item: any) => {
          return (
            <a href={item.link} target="_blank" rel="noreferrer" className="w-1/2 md:w-1/4 lg:w-1/5 mb-4 px-2" key={item._id}>
              <div className="store-item h-40 sm:h-48 rounded border overflow-hidden">
                <div style={{ backgroundImage: `url(${item.pic})` }} className="h-24 sm:h-32 bg-center bg-no-repeat bg-cover flex items-end">
                  <p className="text-sm store-mask">{item.name}</p>
                </div>
                <div className="py-2 px-4">
                  <p className="text-sm mb-2 truncate">{item.name}</p>
                  <p className="text-xs text-gray-500 flex justify-between">
                    <span className="bg-gray-500 px-2 rounded-full text-white">{item.keyword}</span>
                    <span className="font-din">{moment(item.start_date).format('YYYY-MM-DD')}</span>
                  </p>
                </div>
              </div>
            </a>
          )
        })}
      </div>
      <Pagination defaultCurrent={1} pageSize={pageSize} total={total} onChange={(pageNo) => getStoreList(pageNo)} />,
    </>
  )

  return (
    <div className="py-5 px-4 md:px-8 max-w-1200px mx-auto">
      {loading ? skeleton : html}
    </div>
  )
}

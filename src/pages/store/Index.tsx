import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Pagination } from 'antd'
import http from '../../utils/http/index'
import Skeleton from './skeleton/Index'

export default function Store () {
  const pageSize: number = 8
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  const getStoreList = async (pageNo: number = 1) => {
    const res: any = await http.get('/rest/store', { params: { pageSize, pageNo } })
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
      <h3 className="border-t border-b font-din py-4 text-3xl mb-4 mx-2">
        {total}
        <span className="text-gray-400"> ITEMS</span>
      </h3>
      <div className="flex flex-wrap">
        {list && list.map((item: any) => {
          return (
            <a href={item.link} target="_blank" rel="noreferrer" className="w-1/2 md:w-1/4 lg:w-1/5 mb-4 px-2" key={item._id}>
              <div className="shadow-round rounded-md border overflow-hidden">
                <div style={{ backgroundImage: `url(${item.pic})` }} className="h-32 bg-center bg-no-repeat bg-cover"></div>
                <div className="p-4">
                  <p className="text-sm mb-2">{item.name}</p>
                  <p className="text-xs text-gray-500 flex justify-between">
                    <span>Shell</span>
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
    <div className="py-10 px-4 md:px-8 max-w-1200px mx-auto">
      {loading ? skeleton : html}
    </div>
  )
}

import React, { useState } from 'react'
import moment from 'moment'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import PostSkele from '../skeleton/Post'
import Drawer from '../../../components/Drawer'

interface list {
  id: number;
  pic: string;
  name: string;
  startDate: string;
}

interface update {
  en: string;
  zh: string;
  num: number;
  list: list[];
}

interface PostProps {
  loading: boolean;
  updates: update[];
}

interface Ibook {
  _id: string;
  pic: string;
  name: string;
  author: string;
  tags: { _id: string; name: string }[];
}

export default (props: PostProps) => {
  const { updates, loading } = props
  const [showDrawer, setShowDrawer] = useState(false)
  const [bookInfo, setBookInfo] = useState({ _id: '', name: '', author: '', pic: '' })

  const showNote = async (val: Ibook) => {
    setBookInfo(val)
    setShowDrawer(true)
  }

  const toggleDrawer = (flag: boolean) => {
    setShowDrawer(flag)
  }

  const skeleton: React.ReactElement = <PostSkele></PostSkele>

  const html: React.ReactElement = (
    <div>
      {/* 文章列表 */}
      <div className="flex flex-wrap">
        {updates.map((item) => {
          return (
            <div
              key={item.en}
              className="flex w-full md:w-1/2 xl:w-1/3 px-2 mb-4 cursor-pointer"
            >
              <div className="left w-1/5">
                <h2 className="font-nav text-xl">
                  {item.zh}
                  <sup className="font-din ml-1">
                    <CountUp start={0} end={item.num} />
                  </sup>
                </h2>
                <p className="text-sm text-gray-500 font-din">/{item.en}</p>
              </div>

              <div className="right w-4/5">
                {item.list.map((val: any) => {
                  const html = (
                    <div className="w-full flex hover:bg-gray-200 p-2 rounded transform -skew-x-6">
                      <div className="h-10 w-2/12 flex items-center justify-center mr-2 transform skew-x-6 flex-shrink-0">
                        <img
                          className="max-h-full max-w-full rounded"
                          src={val.pic}
                          alt=""
                        />
                      </div>
                      <div className="transform skew-x-6 w-4/5">
                        <p className="truncate">{val.name}</p>
                        <p className="text-xs text-gray-500 font-din">
                          {moment(val.start_date).format('YYYY/MM/DD')}
                        </p>
                      </div>
                    </div>
                  )
                  switch (item.en) {
                    case 'read':
                      return <div key={val._id} onClick={() => showNote(val)}>{html}</div>
                    case 'post':
                      return <Link to={`/${item.en}/${val._id}`} key={val._id}>{html}</Link>
                    default:
                      return <a href={val.link} key={val._id} target="_blank" rel="noopener noreferrer">{html}</a>
                  }
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div>
      {loading ? skeleton : html}
      <Drawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} bookInfo={bookInfo}></Drawer>
    </div>
  )
}

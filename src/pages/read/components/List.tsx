import React, { useState } from 'react'
import { Tooltip, Rate } from 'antd'
import Drawer from '../../../components/Drawer'

interface Ibook {
  _id: string;
  pic: string;
  star: number;
  name: string;
  author: string;
  publish: string;
  tags: { _id: string; name: string }[];
}

interface listProps {
  books: Ibook[];
  total: number;
}

export default function List (props: listProps) {
  const { books, total } = props
  const [showDrawer, setShowDrawer] = useState(false)
  const [bookInfo, setBookInfo] = useState({ _id: '', name: '', author: '', pic: '' })

  const toggleDrawer = (flag: boolean) => {
    setShowDrawer(flag)
  }

  const showNote = async (val: Ibook) => {
    setBookInfo(val)
    setShowDrawer(true)
  }

  return (
    <div className="mt-10">
      <Drawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} bookInfo={bookInfo}></Drawer>

      <div className="book-list">
        <div className="mb-8 font-medium text-3xl font-din">
          <span className="text-gray-700 mr-4">
            {total}
          </span>
          <span className="text-gray-400 ">books</span>
        </div>

        <div className="flex flex-wrap">
          {books &&
            books.map(item => {
              return (
                <div
                  key={item._id}
                  className="w-full md:w-1/2 xl:w-1/4 relative rounded h-40 mb-2 p-2 text-xs"
                >
                  <div
                    className="opacity-25 blur-100 bg-cover bg-center h-full w-full"
                    style={{ backgroundImage: `url(${item.pic})` }}
                  ></div>
                  <div className="mb-2 px-4 pt-4 absolute inset-0 shadow mx-2 rounded-md">
                    <div className="flex">
                      <img
                        className="block h-24 mr-2 rounded transform duration-300 hover:scale-110 test"
                        src={item.pic}
                        alt=""
                      />
                      <div className="flex flex-col">
                        <p className="text-sm">{item.name}</p>
                        <p className="text-gray-600">{item.author}</p>
                        <div className="mt-auto flex items-center">
                          <Rate disabled value={item.star} className="text-xs" />
                          <span className="ml-1 text-yellow-400 font-bold">{parseFloat(String(item.star)).toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-2">
                      {item.tags.map((val) => {
                        return (
                          <span key={val._id} className="mr-2 text-gray-600">
                            {val.name}
                          </span>
                        )
                      })}
                      <i
                        onClick={() => showNote(item)}
                        className="iconfont icon-bookmark cursor-pointer bg-gray-400 px-2 rounded-full mr-2 h-5 ml-auto hover:bg-gray-500"
                      ></i>
                      <Tooltip title={item.publish} placement="topRight">
                        <i className="iconfont icon-more cursor-pointer bg-gray-400 px-2 rounded-full h-5 hover:bg-gray-500"></i>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

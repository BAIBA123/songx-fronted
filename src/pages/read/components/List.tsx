import React, { useState } from 'react'
import { Tooltip } from 'antd'
import Drawer from '../../../components/Drawer'

interface Ibook {
  _id: string;
  pic: string;
  name: string;
  author: string;
  tags: { _id: string; name: string }[];
}

// interface category {
//   label: string;
//   list: string[];
// }

interface listProps {
  books: Ibook[];
  total: number;
  // category: category[];
}

export default function List (props: listProps) {
  // const { category, books } = props
  const { books, total } = props
  const [tagIndex, setTagIndex] = useState(0)
  const [cateIndex, setCateIndex] = useState(0)
  const [showDrawer, setShowDrawer] = useState(false)
  const [bookInfo, setBookInfo] = useState({ _id: '', name: '', author: '', pic: '' })

  const cateClick = (cateIndex: number) => {
    setTagIndex(0)
    setCateIndex(cateIndex)
  }

  const tagClick = (tagIndex: number) => {
    setTagIndex(tagIndex)
  }

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

      {/* 分类和标签 */}
      {/* <div className="cate-box mb-8">
        <ul className="flex text-base mb-8">
          {category && category.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => cateClick(index)}
                className={`cate mr-4 cursor-pointer ${
                  index === cateIndex ? "active" : ""
                }`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-wrap mb-4">
          {category && category[cateIndex] &&
            category && category[cateIndex].list.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => tagClick(index)}
                  className={`tag bg-gray-300 text-xs mr-1 mb-1 px-2 rounded-sm h-5 leading-5 cursor-pointer ${
                    index === tagIndex ? "active" : ""
                  }`}
                >
                  {item}
                </span>
              );
            })}
        </div>
      </div> */}

      <div className="book-list">
        <div className="mb-8">
          <span className="text-3xl text-gray-700 font-medium mr-4">
            {total}
          </span>
          <span className="text-3xl text-gray-400 font-medium">books</span>
        </div>

        <div className="flex flex-wrap">
          {books &&
            books.map(item => {
              return (
                <div
                  key={item._id}
                  className="w-full md:w-1/2 xl:w-1/4 relative rounded h-40 mb-8 p-2 text-xs"
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
                      <div>
                        <p className="mb-2">{item.name}</p>
                        <p className="text-gray-600">{item.author}</p>
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
                        className="iconfont icon-bookmark cursor-pointer bg-gray-300 px-2 rounded-full mr-2 h-5 ml-auto hover:bg-gray-400"
                      ></i>
                      <Tooltip title="prompt text" placement="topRight">
                        <i className="iconfont icon-more cursor-pointer bg-gray-300 px-2 rounded-full h-5 hover:bg-gray-400"></i>
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

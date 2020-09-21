import React, { useState, useEffect } from 'react'

import LinkSkele from '../skeleton/Link'
import http from '../../../utils/http/index'

interface ILink {
  _id: number;
  pic: string;
  name: string;
  link: string;
}

export default function Link () {
  const [left, setLeft] = useState('0') // 模拟滚动条位置
  const [loading, setLoading] = useState(true)
  const [links, setLinks] = useState<ILink[]>([]) // 友链数据

  const getLinks = async () => {
    const res: ILink[] = await http.get('/rest/link')
    setLinks(res)
    setLoading(false)
  }

  const scrollFn = (event: any) => {
    const scrollLeft = event.target.scrollLeft // 可见宽度
    const clientWidth = event.target.clientWidth // 总宽度
    const scrollWidth = event.target.scrollWidth // 滚动条位置
    const percent = scrollLeft / (scrollWidth - clientWidth)
    setLeft(60 * percent + 'px')
  }

  useEffect(() => {
    getLinks()
  }, [])

  const skeleton = <LinkSkele></LinkSkele>

  const html = (
    <div>
      <div className="sm:flex flex-wrap hidden">
        {links.map((item) => {
          return (
            <a
              key={item._id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/4 md:w-1/6 lg:w-1/12 px-2 text-center mb-4"
            >
              <div className="rounded-md link-box">
                <img
                  className="rounded mb-2 mx-auto"
                  src={item.pic}
                  alt=""
                />
                <p className="text-sm lg:text-xs">{item.name}</p>
              </div>
            </a>
          )
        })}
      </div>
      <div className="flex sm:hidden overflow-auto scrollbar2 relative" onScroll={() => scrollFn(event)}>
        {links.map((item) => {
          return (
            <a
              key={item._id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 text-center mb-4 flex-shrink-0"
            >
              <img
                className="w-20 h-20 rounded mx-auto"
                src={item.pic}
                alt=""
              />
            </a>
          )
        })}
      </div>
      <div className="sm:hidden h-1 w-20 bg-gray-300 rounded-full mx-auto relative">
        <div className="h-1 w-5 bg-blue-500 rounded-full absolute top-0" style={{ left: left }}></div>
      </div>
    </div>
  )

  return <>{loading ? skeleton : html}</>
}

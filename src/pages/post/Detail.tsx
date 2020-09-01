import React, { useState, useEffect } from 'react'

import moment from 'moment'
import http from '../../utils/http'
import { Link } from 'react-router-dom'
import DetailSkele from './skeleton/Detail'
import Comment from './components/detail/Comment'
import SubTitle from './components/detail/SubTitle'

export default function Deatil (props: any) {
  const [next, setNext] = useState({ _id: '', name: '' })
  const [before, setBefore] = useState({ _id: '', name: '' })
  const [loading, setLoading] = useState(false)
  const [article, setArticle] = useState({
    _id: '',
    pic: '',
    name: '',
    tags: [],
    date: '',
    author: '',
    minutes: '',
    content: '',
    next: '',
    prev: ''
  })

  const getInit = async () => {
    const res: any = await http.get(`rest/post/${props.match.params.id}`)
    setArticle(res.item)
    setNext(res.next[0])
    setBefore(res.before[0])
    setLoading(false)
  }

  useEffect(() => {
    getInit()
  }, [props.match.params.id])

  const skeleton = <DetailSkele></DetailSkele>

  const html = (
    <div className="flex">
      <div className="left w-full md:w-800px">
        <div
          className="mb-10 h-48 md:h-72 xl:h-80 w-full rounded-md bg-no-repeat bg-cover bg-center shadow"
          style={{ backgroundImage: `url(${article.pic})` }}
        ></div>
        <div className="flex items-center mb-8">
          <div className="mr-2">
            <img
              className="h-8 w-8 rounded-full mr-2"
              src={article.pic}
              alt=""
            />
          </div>
          <div>
            <p className="font-din">Yi Xi</p>
            <p className="text-xs text-gray-600 font-din">
              {moment(article.date).format('YYYY-MM-DD')} 读完约
              { article.minutes} 分钟
            </p>
          </div>
        </div>

        <h1 className="text-3xl my-0 text-gray-800 font-thin">
          {article.name}
        </h1>
        <div className="mb-10">
          {article.tags &&
            article.tags.map((item, index) => {
              return (
                <span
                  className="px-3 rounded-lg bg-gray-300 mr-2 text-xs py-1"
                  key={index}
                >
                  {item}
                </span>
              )
            })}
        </div>

        <div className="a-content mb-20">
          <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </div>

        <p className="text-center text-gray-200 font-medium text-3xl mb-20">
          -THE END-
        </p>

        <div className="md:flex mb-20">
          {before && <Link
            to={`/post/${before._id}`}
            className="mr-2 mb-4 block w-full md:w-1/2 bg-gray-100 hover:bg-gray-300 p-3 transform -skew-x-6 rounded-md"
          >
            <div className="transform skew-x-6">
              <p>上一篇</p>
              <p>{before.name}</p>
            </div>
          </Link>
          }
          {next && <Link
            to={`/post/${next._id}`}
            className="block mb-4 w-full md:w-1/2 bg-gray-100 hover:bg-gray-300 p-3 transform -skew-x-6 rounded-md"
          >
            <div className="text-right transform skew-x-6">
              <p>下一篇</p>
              <p>{next.name}</p>
            </div>
          </Link>
          }
        </div>

        <Comment postId={props.match.params.id}></Comment>
      </div>
      <div className="right hidden xl:block w-300px">
        <SubTitle></SubTitle>
      </div>
    </div>
  )

  return (
    <div className="py-5 px-4 md:px-8 max-w-1200px mx-auto">
      {loading ? skeleton : html}
    </div>
  )
}

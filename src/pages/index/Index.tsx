import React, { useState, useEffect } from 'react'

import Post from './components/Post'
import MyNote from './components/Note'
import MyLink from './components/Link'
import http from '../../utils/http/index'
import PartTitle from './components/PartTitle'

export default function Index () {
  const [currTop, setCurrTop] = useState(0) // 当前滚动条高度
  const [loading, setLoading] = useState(true)
  const [updates, setUpdates] = useState([]) // 最新动态数据
  const [mainPic, setMainPic] = useState({ pic: '', title: '' })

  const scrollFn = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    setCurrTop(scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFn)
    return () => {
      window.removeEventListener('scroll', scrollFn)
    }
  })

  const getInit = async () => {
    const res: any = await http.get('/api/home')
    setLoading(false)
    setUpdates(res.updates)
    setMainPic(res.mainPic[0])
  }

  useEffect(() => {
    getInit()
  }, [])

  return (
    <>
      {/* 首页大图 */}
      <div
        className="h-56 md:h-112 xl:h-144 bg-base relative"
        style={{ backgroundImage: `url(${mainPic.pic})` }}
      >
        <p className="absolute bottom-0 w-full text-center block h-10 leading-10 md:h-20 md:leading-20 text-xl md:text-5xl text-white">{mainPic.title}</p>
      </div>

      <div className="box-base md:px-8 text-base">
        {/* 最近 */}
        <div className="mb-10">
          <PartTitle title={{ en: 'UPDATES', zh: '最新随笔' }}></PartTitle>
          <Post updates={updates} loading={loading}></Post>
        </div>

        {/* 笔记 */}
        <div className="mb-10">
          <PartTitle title={{ en: 'NOTES', zh: '阅读笔记' }}></PartTitle>
          <div className={`mb-10 boxIn ${currTop > 200 && 'boxInActive'}`}>
            <MyNote></MyNote>
          </div>
        </div>

        {/* 友链 */}
        <div className="mb-10">
          <PartTitle title={{ en: 'LINKS', zh: '友情链接' }}></PartTitle>
          <div className={`mb-10 boxIn ${currTop > 600 && 'boxInActive'}`}>
            <MyLink></MyLink>
          </div>
        </div>
      </div>
    </>
  )
}

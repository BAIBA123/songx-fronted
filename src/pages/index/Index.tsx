import React, { useState, useEffect } from 'react'
import http from '../../utils/http/index'
import Post from './components/Post'
import MyNote from './components/Note'
import MyLink from './components/Link'
// import MyProject from "./components/Project";
import PartTitle from './components/PartTitle'

export default function Index () {
  const [loading, setLoading] = useState(true)
  const [updates, setUpdates] = useState([])
  const [mainPic, setMainPic] = useState('')

  useEffect(() => {
    const getInit = async () => {
      const res: any = await http.get('/api/home')

      setLoading(false)
      setMainPic(res.mainPic[0].pic)
      setUpdates(res.updates)
    }
    getInit()
  }, [])

  return (
    <div className="home-box">
      <div className="swiper-container mb-20">
        <div
          className="h-56 md:h-112 xl:h-144 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${mainPic})` }}
        ></div>

        <div className="px-4 md:px-8 max-w-1200px mx-auto">
          {/* 最近 */}
          <div className="mb-10">
            <PartTitle title={{ en: 'UPDATES', zh: '最新随笔' }}></PartTitle>
            <Post updates={updates} loading={loading}></Post>
          </div>

          {/* 笔记 */}
          <div className="mb-10">
            <PartTitle title={{ en: 'NOTES', zh: '阅读笔记' }}></PartTitle>
            <MyNote></MyNote>
          </div>

          {/* 项目 */}
          {/* <div className="mb-10">
            <PartTitle title={{ en: "PROJECTS", zh: "我的项目" }}></PartTitle>
            <MyProject projects={projects} loading={loading}></MyProject>
          </div> */}

          {/* 友链 */}
          <div className="mb-10">
            <PartTitle title={{ en: 'LINKS', zh: '友情链接' }}></PartTitle>
            <MyLink></MyLink>
          </div>
        </div>
      </div>
    </div>
  )
}

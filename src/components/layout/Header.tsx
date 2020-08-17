import React, { useState, useEffect } from 'react'
import http from '../../utils/http/index'
import { NavLink, Link } from 'react-router-dom'

export default function Header () {
  const [menuList, setMenuList] = useState([])

  const getMenuList = async () => {
    const res: [] = await http.get('/rest/menu')
    setMenuList(res)
  }

  useEffect(() => {
    getMenuList()
  }, [])

  return (
    <div className="header-box h-12 shadow fixed top-0 left-0 w-full z-20 bg-hazy-100">
      {/* 小屏 */}
      <div className="px-4 md:hidden flex items-center justify-between h-full">
        <i className="iconfont icon-Menu"></i>
        <Link to="/home">
          <h2>mignge</h2>
        </Link>
        <i className="iconfont icon-search"></i>
      </div>

      {/* 大屏 */}
      <div className="px-8 hidden md:flex h-full items-center max-w-1200px mx-auto">
        <Link to="/home">
          <img className="h-12" src="/logo.png" alt="" />
        </Link>
        <ul className="flex text-sm mb-0">
          {
            menuList && menuList.map((item: { name: string, link: string }) => {
              return (
                <NavLink
                  to={item.link}
                  key={item.name}
                  activeClassName="bg-gray-400"
                  className="px-3 py-1 transform -skew-x-6 rounded-sm hover:bg-gray-400 cursor-pointer">
                  <span className="block transform skew-x-6 font-nav">{item.name}</span>
                </NavLink>
              )
            })
          }
        </ul>
        <i className="iconfont icon-search ml-auto cursor-pointer hover:bg-gray-400 px-2 py-1 rounded"></i>
      </div>
    </div>
  )
}

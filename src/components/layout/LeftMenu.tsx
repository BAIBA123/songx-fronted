import React from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

interface leftMenuProps {
  show: boolean;
  toggle: Function;
  menuList: {name: string, link: string}[];
}

export default function LeftMenu (props: leftMenuProps) {
  const { show, toggle, menuList } = props
  console.log(menuList)
  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="menu"
      unmountOnExit>
      <div onClick={() => toggle()} className="mask fixed top-0 left-0 h-full w-full z-50 pt-20 pl-5">
        <div className="w-32">
          {menuList && menuList.map(item => {
            return (
              <Link to={item.link} key={item.link} className="menu-item block bg-white px-2 pt-2 pb-4 mb-2 transform -skew-x-6 rounded">
                <div className="transform skew-x-6">
                  <p className="text-xl font-nav">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.link}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </CSSTransition>
  )
}

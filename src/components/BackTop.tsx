import React, { useState, useEffect } from 'react'
import '../style/css/animate.css'
import { CSSTransition } from 'react-transition-group'

export default function BackTop () {
  const [showDrawer, setShowDrawer] = useState(false)

  const scrollTop = () => {
    const anchor = document.querySelector('#anchor')
    anchor && anchor.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollFn = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    setShowDrawer(scrollTop > 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFn)
    return () => {
      window.removeEventListener('scroll', scrollFn)
    }
  })

  return (
    <CSSTransition
      in={showDrawer}
      timeout={800}
      classNames="top"
      unmountOnExit
    >
      <div onClick={scrollTop} className="flex items-center justify-center cursor-pointer rounded-full bg-white shadow border h-12 w-12 fixed right-0 bottom-0 mr-12 mb-20 z-50">
        <i className="iconfont icon-arrowup"></i>
      </div>
    </CSSTransition>
  )
}

import React, { useState, useEffect, useCallback } from 'react'

export default function SubTitle () {
  const [currId, setCurrId] = useState()
  const [target, setTarget] = useState<any>()

  const scrollFn = useCallback(() => {
    const scrollTop: number = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    target && target.forEach((item: any) => {
      scrollTop > item.offsetTop - 50 && setCurrId(item.id)
    })
  }, [target])

  const init = () => {
    const h3List = document.getElementsByTagName('h3')
    for (let i = 0; i < h3List.length; i++) {
      h3List[i].setAttribute('id', String(i))
    }
    const target = Array.from(h3List)
    setTarget(target)
  }

  useEffect(() => {
    setTimeout(() => {
      init()
    }, 500)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollFn)
    return () => {
      window.removeEventListener('scroll', scrollFn)
    }
  }, [scrollFn, target])

  const ele = target && target.map((item: any) => {
    return (
      <li
        key={item.id}
        className={`subtitle-li pl-4 ${currId === item.id ? 'active' : ''}`}>
        <a className="text-sm" href={`#${item.id}`}>{item.innerHTML}</a>
      </li>
    )
  })

  return (
    <div className="fixed pl-8">
      <p className="text-gray-300 text-base font-medium mb-4">CONTENT</p>
      <ul>
        {ele}
      </ul>
    </div>
  )
}

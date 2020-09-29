import React, { useState, useEffect } from 'react'
import AppBox from './components/AppBox'
import http from '../../utils/http/index'

export default function Index () {
  // const [loading, setLoading] = useState(false)

  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [visiable, setVisiable] = useState(false)

  const toggleFn = (name: string, link: string) => {
    setName(name)
    setLink(link)
    setVisiable(!visiable)
  }

  const getInit = async () => {
    const res: any = await http.get('/rest/app')
    setList(res)
  }

  useEffect(() => {
    getInit()
  }, [])

  const html = (
    <div className="flex flex-wrap">
      {
        list.map((item: any) => {
          return (
            <div onClick={() => toggleFn(item.name, item.link)} key={item._id} className="text-small flex flex-col items-center mb-6 px-2 w-1/2 md:w-1/4 lg:w-1/6">
              <img src={item.pic} className="h-24 w-24 rounded" alt="" />
              <p className="text-black my-2 text-center">{item.name}</p>
              <p className="text-gray-500 text-center">{item.desc}</p>
            </div>
          )
        })
      }
    </div>
  )
  return (
    <div className="py-5 px-4 md:px-8 max-w-1200px mx-auto">
      {/* {loading ? skeleton : html} */}
      {html}
      <AppBox name={name} link={link} visiable={visiable} callback={toggleFn} />
    </div>
  )
}

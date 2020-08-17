import React, { useState, useEffect } from 'react'
import LinkSkele from '../skeleton/Link'
import http from '../../../utils/http/index'

interface link {
  _id: number;
  pic: string;
  name: string;
  link: string;
}

export default function Link () {
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)

  const getLinks = async () => {
    const res: any = await http.get('/rest/link')
    setLinks(res)
    setLoading(false)
  }

  useEffect(() => {
    getLinks()
  }, [])

  const skeleton: React.ReactElement = <LinkSkele></LinkSkele>

  const html: React.ReactElement = (
    <div className="flex flex-wrap">
      {links.map((item: link) => {
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
                className="shadow-md rounded-full mb-2 mx-auto"
                src={item.pic}
                alt=""
              />
              <p className="text-sm lg:text-xs">{item.name}</p>
            </div>
          </a>
        )
      })}
    </div>
  )

  return <div>{loading ? skeleton : html}</div>
}

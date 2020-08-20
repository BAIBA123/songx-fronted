import React from 'react'
import ProjectSkele from '../skeleton/Project'

interface ProjectProps {
  loading: boolean;
  projects: {
    id: string;
    pic: string;
    name: string;
    link: string;
  }[];
}

export default function Project (props: ProjectProps) {
  const { projects, loading } = props

  const skeleton = <ProjectSkele></ProjectSkele>

  const html = (
    <div className="flex flex-wrap">
      {projects.map(item => {
        return (
          <div className="w-1/2 md:w-1/4 xl:1/6 px-2 mb-4" key={item.id}>
            <div>
              <img
                className="block rounded-md shadow-lg mb-2 max-w-full max-h-full"
                src={item.pic}
                alt=""
              />
            </div>
            <p className="text-base">{item.name}</p>
            <p className="text-xs text-gray-600">{item.link}</p>
          </div>
        )
      })}
    </div>
  )

  return <div>{loading ? skeleton : html}</div>
}

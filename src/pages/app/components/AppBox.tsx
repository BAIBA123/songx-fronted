import React from 'react'
import { CloseOutlined } from '@ant-design/icons'

interface appBoxProps {
  name: string;
  link: string;
  visiable: boolean;
  callback: Function;
}

export default function AppBox (props: appBoxProps) {
  const { name, link, visiable, callback } = props

  return (
    <div className={`app-box shadow ${!visiable && 'hidden'}`}>
      <header className="app-header">
        <h3>{name}</h3>
        <CloseOutlined className="app-close-btn" onClick={() => callback()} />
      </header>
      <iframe src={link} frameBorder="0" className="h-full w-full bg-white"></iframe>
    </div>
  )
}

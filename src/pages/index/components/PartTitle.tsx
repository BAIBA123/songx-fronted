import React from 'react'

interface TitleProps {
  title: {
    en: string;
    zh: string;
  }
}

export default function PartTitle (props: TitleProps) {
  const { title } = props

  return (
    <div className="part-box mb-4 overflow-hidden">
      <div className="relative">
        <p className="part-title text-6xl font-bold text-gray-200 font-din tracking-widest">{title.en}</p>
        <p className="absolute bottom-0 mb-6 text-gray-600">{title.zh}</p>
      </div>
      <div className="part-title-item h-1 w-24 rounded-full"></div>
    </div>
  )
}

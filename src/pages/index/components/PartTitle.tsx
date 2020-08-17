import React from 'react'

interface TitleProps {
  title: {
    en: string,
    zh: string
  }
}

export default function PartTitle (props: TitleProps) {
  const { title } = props

  return (
    <div className="mb-4 relative">
      <p className="part-title text-6xl font-bold text-gray-200 font-din tracking-widest">{title.en}</p>
      <p className="absolute bottom-0 mb-6 text-gray-600">{title.zh}</p>
    </div>
  )
}

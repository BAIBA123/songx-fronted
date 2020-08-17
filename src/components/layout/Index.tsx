import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BackTop from '../BackTop'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {

  const { children } = props
  
  return (
    <div className="text-base">
      <Header />
      <div id="anchor"></div>
      <div className="mt-12">
        {children}
      </div>
      <Footer />
      <BackTop></BackTop>
    </div>
  )
}
import React from 'react'
import Loadable from 'react-loadable'

export default (loader: any) => {
  return Loadable({
    loader,
    loading () {
      return (
        <div className="h-full w-full">
          <div className="loading absolute top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )
    }
  })
}

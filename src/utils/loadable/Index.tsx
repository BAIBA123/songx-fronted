import React from 'react'
import Loadable from 'react-loadable'

export default (loader: any) => {
  return Loadable({
    loader,
    loading () {
      return (
        <div className="fixed top-0 bottom-0 left-0 right-0">
          <div className="loading absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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

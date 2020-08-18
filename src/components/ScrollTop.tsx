import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const ScrollToTop = (props: any) => {
  useEffect(() => {
    !props.location.hash && window.scrollTo(0, 0)
  }, [props])
  return props.children
}

export default withRouter(ScrollToTop)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './style/css/index.css'
import './style/css/font.css'
import './style/css/util.css'
import './style/icons/iconfont.css'
import './style/icons/icon2/iconfont.css'
import './style/icons/icon3/iconfont.css'
import './style/css/tailwind.patch.css'
import './style/css/appBox.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()

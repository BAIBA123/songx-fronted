import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Index from './pages/index/Index'
import Read from './pages/read/Index'
import Store from './pages/store/Index'
import PostList from './pages/post/Index'
import PostDetail from './pages/post/Detail'
import NotFound from './pages/others/NotFound'
import Layout from './components/layout/Index'
import ScrollToTop from './components/ScrollTop'

function App () {
  return (
    <Router>
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route exact path="/home" component={Index}></Route>
            <Route exact path="/post" component={PostList}></Route>
            <Route exact path="/read" component={Read}></Route>
            <Route exact path="/store" component={Store}></Route>
            <Route exact path="/post/:id" component={PostDetail}></Route>
            <Redirect exact from="/" to="/home" ></Redirect>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ScrollToTop>
    </Router>
  )
}

export default App

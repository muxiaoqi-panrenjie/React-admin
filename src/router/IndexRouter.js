import React from 'react'
import {HashRouter,Route} from 'react-router-dom'
export default function IndexRouter() {
  return (
    <HashRouter>
      <Route path='/login' component={Login}></Route>
      <Route path='/' component={newSandBox}></Route>
    </HashRouter>
  )
}

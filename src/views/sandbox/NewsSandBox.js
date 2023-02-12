import React from 'react'
import { Routes,Route,Navigate  } from  'react-router-dom'
import Home from './home/Home'
import UserList from './user-mange/UserList'
import RightList from './right-mange/RightList'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Nopermission from './nopermission/Nopermission'
export default function NewsSandBox() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>
      <Routes>
        <Route path="/home" element={ <Home/> }></Route>
        <Route path="/user-mange/list" element={ <UserList/> }></Route>
        <Route path="/right-mange/role/list" element={ <RightList/> }></Route>

        <Route path="/" element={ <Navigate to='home' ></Navigate>  } exact></Route>
        <Route path="*" element={ <Nopermission/> }></Route>
      </Routes>
    </div>
  )
}

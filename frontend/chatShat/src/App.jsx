import { useState } from 'react'
import './App.css'
import MainContainer from './Components/MainContainer'
import Login from './Components/Login'
import {Routes,Route} from "react-router-dom";
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';
import Users from './Components/Users';
import CreateGroups from './Components/CreateGroups';
import Groups from './Components/Groups';
function App() {

  return (
    <>
      <div className="App">
{/*         
      <Login/>
      <MainContainer/> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='app' element={<MainContainer/>}>
          <Route path='welcome' element={<Welcome/>}></Route>
          <Route path='chat' element={<ChatArea/>}></Route>
          <Route path='user' element={<Users/>}></Route>
          <Route path='groups' element={<Groups/>}></Route>

          <Route path='create-groups' element={<CreateGroups/>}></Route>
          </Route>
      </Routes>
      </div>
    </>
  )
}

export default App

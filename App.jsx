import React from 'react'
import Bye from './Components/Bye'
import Hello from './Components/Hello'
import Lists from './Components/Lists'
import Statefun from'./Components/Statefun'
import Statecls from './Components/Statecls'
import Assessment1 from './Components/Assessment1'
import Assessment2 from './Components/Assessment2'
import Assessment3 from './Components/Assessment3'
import Style from './Components/Style'
import "./global.css"
import Nav from './Project/Nav'
import Refs from'./Components/Refs'
import Uncontrolled from './Components/Uncontrolled'
import Controlledcls from './Components/Controlledcls'
import Assesment5 from './Components/Assesment5'
import Assesment6 from './Components/Assesment6'
import Assesment7 from './Components/Assesment7'
import Child1 from './Components/Child1'
import Child2 from './Components/Child2'
import Image from './Components/Image'
import Useeffec from './Hooks/Useeffec'
import A from './Components/A'
import Axioss from './Components/Axioss'
import Main from './Hooks/Main'
import Hire from './Project/Hire'
import Challenges from './Project/Challenges'
import Explore from './Project/Explore'
import { Routes,BrowserRouter,Route } from 'react-router-dom'
import Users from './Crud/Users'
import Createusers from './Crud/Createusers'
import Homecrud from './Crud/Homecrud'
import Editusers from './Crud/Editusers'
import Usereduce from './Components/Usereduce'
import Life from './Components/Life'
import { useState } from 'react'

const App=()=>{
  let[state,setState]=useState(true)
  return (
    <div>
        {/*<Hello/>
        <Bye/>
        <Lists/>*/}
        {/*<Statefun/>*/}
        {/*<Statecls/>*/}
       {/*<Assessment1/>
        
      <Assessment3/>*/}
        {/*<Style/>
        <Refs/>
    <Assessment2/>
        <Nav/>
        <Uncontrolled/>
        <Controlledcls/>
        <Assesment5/>
        <Assesment6/>
        <Assesment7/>
        <Child1/>
        <Child2/>
        <Image/>
        <Useeffec/>
        <A/>
        <Axioss/>
        <Main/>*/}
       {/* <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/hire" element={<Hire/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/challenges" element={<Challenges/>}/>
        </Routes>
        </BrowserRouter>  */}
       <BrowserRouter>
        <Homecrud/>
          <Routes>
            <Route path='/createUsers'  element={<Createusers/>}/>
            <Route path='/users'   element={<Users/>}/>
            <Route path='/edit/:index'   element={<Editusers/>}/>
          </Routes>
        </BrowserRouter>  
        {/* <Usereduce/> */}
        {/* <button onClick={()=>{setState(true)}}>Mount component</button> */}
        {/* <button onClick={()=>{setState(false)}}>Unmount component</button> */}
        {/* {state?<Life/>:null} */}
        
        
      </div>
  )
}

export default App

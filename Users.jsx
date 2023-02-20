import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'
import Style from './home.module.css'
import { Link } from 'react-router-dom'

const Users = () => {
  let[state,setState]=useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:8000/users")
    .then((res)=>{
      console.log(res);
      setState(res.data)
    })
  },[])
  let deleteData=(index)=>{
    axios.delete(` http://localhost:8000/users/${index}`)
    window.location.assign('/users')
  }
  return (
    <div id={Style.mainUser}>
      {state.map((x)=>{
        return(
          <section id={Style.user}>
           <h1> Name:{x.name}</h1>
            <h1>Salary:{x.salary}</h1>
            <h1>Company:{x.company}</h1>
            <h1>id:{x.id}</h1>
            <Link to={`/edit/${x.id}`}>Editusers</Link>
            <button onClick={()=>{deleteData(x.id)}}>Delete</button>
          </section>
        )
      })}
    </div>
  )
}

export default Users
import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Style from './home.module.css'

const Createusers = () => {
  let[name,setName]=useState("")
  let[salary,setSalary]=useState("")
  let[company,setCompany]=useState("")

  let navigate=useNavigate()
  
  let handleData=async (e)=>{
    e.preventDefault()
    console.log(name);
    let payload={name,salary,company}
    await axios.post("http://localhost:8000/users",payload)
    navigate('/users')
  }
  return (
    <section id={Style.form}>
    <form onSubmit={handleData}>
        <h1>Employee Details</h1>
        <label htmlFor=" ">Emp name</label><br />
        <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}}/><br />
        
        <label htmlFor=" ">Emp Sal</label><br />
        <input type="number"  value={salary} onChange={(e)=>{setSalary(e.target.value)}}/><br />

        <label htmlFor=" ">Emp Company</label><br />
        <input type="text"  value={company} onChange={(e)=>{setCompany(e.target.value)}}/><br /><br />

        <input type="submit" value="Submit" />
    </form>
    </section>
  )
}

export default Createusers
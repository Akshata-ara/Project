import React from 'react'
import Style from './home.module.css'
import {Link} from "react-router-dom"

const Homecrud = () => {
  return (
    <div>
        <ol id={Style.nav}>
            <li><Link to='/createUsers'>Createusers</Link></li>
            <li><Link to='/users'>Users</Link></li>
        </ol>
    </div>
  )
}

export default Homecrud
import React from 'react'
import { Link } from "gatsby"
export default function menu() {
  return (
    <div>
      <ul style={{

         display:'flex',
         listStyle:'none',
         justifyContent:'space-evenly' 
      }}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </div>
  )
}

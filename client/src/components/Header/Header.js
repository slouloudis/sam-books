import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='flex--container'>
        <div>Some Logo</div>
        <ul className='flex--item flex--container'>
            <li><a href=''>Collections</a></li>
            <li><a href=''><em>Current</em></a></li>
            <li><a href=''>Search</a></li>
        </ul>
    </div>
    
  )
}

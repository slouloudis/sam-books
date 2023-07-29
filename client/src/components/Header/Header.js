import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className='flex--container'>
        <div>Some Logo</div>
        <ul className='flex--item flex--container'>
            <li><a href=''>Collections</a></li>
            <li><a href=''><em>Current</em></a></li>
            <li><a href=''>Search</a></li>
        </ul>
    </header>
  )
}

let statePointer = 0
let stateStack = []
let initialised = false
let reRender = function () {
    // re render the component
}

function myUseState(initialValue) {
    if (!initialised) {
        stateStack[statePointer] = {
            value: initialValue,
            updateFunc: function (value) {
                stateStack[statePointer].value = value
                reRender()
            }
        }
    }

    let state = stateStack[statePointer]
    statePointer++

    return [state.value, state.updateFunc]
}
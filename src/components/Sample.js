import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function Sample() {
  console.log("Sample Component Works fine")
  return <>
    <h1>Sample component is here!</h1>
    <Link to='sub-sample'>Sub-Sample</Link>
    <Link to='sub-dashboard'>Sub-Dashboard</Link>
    <Outlet/>
    </>
}

export default Sample
import React from 'react'
import {useFetch} from '../hooks/useFetch'

export default function Home() {

  const {data, isPending, error} = useFetch('https://3000-piyushbarve-reactmultip-mrfq911ync0.ws-us63.gitpod.io/articles')
  
  console.log(data)

  return (
    <div>
        <h1>HomePage</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    
  )
}

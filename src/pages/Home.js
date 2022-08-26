import React from 'react'
import {useFetch} from '../hooks/useFetch'
import './Home.css'
import { Link } from 'react-router-dom'
export default function Home() {

  const {data : articles, isPending, error} = useFetch('https://3000-piyushbarve-reactmultip-9gnzm0p7ga8.ws-us63.gitpod.io/articles')
  
  

  return (
    <div className='home'>
        <h1>Articles</h1>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {articles && articles.map((article)=>(
          <div key={article.id} className='card'>
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`articles/${article.id}`}> Read more...</Link>
          </div>
        ))}
    </div>
    
  )
}

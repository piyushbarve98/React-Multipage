import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function Article() {

    const {id} = useParams()
    const url = 'https://3000-piyushbarve-reactmultip-9gnzm0p7ga8.ws-us63.gitpod.io/articles/' + id
    const {data : article,isPending, error} = useFetch(url)
    const history = useHistory()

    useEffect(()=>{
        if(error){
            setTimeout(()=>{
                history.push('/')
            },1500)
        }
    },[error])
  return (
    <div>
       {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {article && (
          
          <div>
            <h2>{article.title}</h2>
            <p>By : {article.author}</p>
            <p>{article.body}</p>
          </div>
          
        )}
    </div>
  )
}

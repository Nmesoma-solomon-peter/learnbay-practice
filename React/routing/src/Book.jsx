import React from 'react'
import { useParams } from 'react-router-dom'

function Book() {

    const {id} = useParams()
    const booksArray = [
        {
            id : 1,
            title: "this is my first book"
        },{
            id:2,
            title: " this is my second book"
        }
    ]
  return (
    // <div>Book</div>
    <>
       {
        booksArray.map((i)=>{
            return i.id == id ?<h1>{i.title}</h1>  : null
        })
       } 

    </>
  )
}

export default Book
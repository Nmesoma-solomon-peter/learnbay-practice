import React from 'react'
import Card from './Card'

export default function App() {
  let moveDetails = [
    {
      url: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      title: " Junglecruise",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab pariatur nam vero aliquam commodi earum facere assumenda nulla perferendis ratione, placeat consectetur velit corporis esse sed molestias aspernatur libero sapiente"
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      title: " Junglecruise",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab pariatur nam vero aliquam commodi earum facere assumenda nulla perferendis ratione, placeat consectetur velit corporis esse sed molestias aspernatur libero sapiente"
    },
    {
      url: "https://lumiere-a.akamaihd.net/v1/images/p_junglecruise_21740_v2_bb7f0ae4.jpeg",
      title: " Junglecruise",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab pariatur nam vero aliquam commodi earum facere assumenda nulla perferendis ratione, placeat consectetur velit corporis esse sed molestias aspernatur libero sapiente"
    },
  ]

  return (
    <div>
    {moveDetails.map(function(i,index){
      return<Card key={index} url={i.url} title={i.title} description={i.description}/>
    })}
    
    </div>
  )
}

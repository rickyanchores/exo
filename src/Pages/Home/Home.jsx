import React from 'react'
import Card from '../../Components/Card/Card'

const Home = () => {

  const Cards = [
    {
      title: "One",
      url: "https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Two",
      url: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80"
    },
    {
      title: "Three",
      url: "https://images.unsplash.com/photo-1493515322954-4fa727e97985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
  ]


  return (
    <div className='Home justify-center p-5'>
        <h3>Home</h3>
        <Card title={Cards[0].title} image={Cards[0].url}/>
        <Card title={Cards[1].title} image={Cards[1].url}/>
        <Card title={Cards[2].title} image={Cards[2].url}/>
    </div>
  )
}

export default Home
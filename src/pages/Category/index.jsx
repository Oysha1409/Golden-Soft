import React from 'react'
import { Header } from '@/component'
import { useParams } from 'react-router-dom'


const Category = () => {
  const {type} = useParams()
  

  return (
    <>
        <Header/>
        <h2>Category</h2>
        <p>{type}</p>
    </>
  )
}

export default Category
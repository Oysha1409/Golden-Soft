import React from 'react'
import { Header, CategoryList } from '@/component'
import { useParams } from 'react-router-dom'


const Category = () => {
  const {type} = useParams()
  

  return (
    <>
        <Header/>
        <CategoryList />
    </>
  )
}

export default Category
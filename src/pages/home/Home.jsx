import React from 'react'
import Layout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import { FaWindowRestore } from 'react-icons/fa6'
import Winter from '../../components/winter/Winter'
import Latest from '../../components/latest/Latest'
import Sales from '../../components/sales/Sales'
import Products from '../../components/products/Products'

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero/>
        <Products/>
        <Winter/>
        <Sales/>
        <Latest/>
      
      </Layout>
     
    </div>
  )
}

export default Home

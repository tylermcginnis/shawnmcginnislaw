import React from 'react'
import { Link } from 'gatsby'
import '../index.css'

const IndexPage = () => (
  <div className='container'>
    <img
      style={{width: 700}}
      src={require('../images/logo-bg.jpg')}
    />
    <ul>
      <li className='name'>Shawn McGinnis</li>
      <li>Personal Injury Lawyer</li>
      <li>St. George, Utah</li>
      <li>435-215-3297</li>
    </ul>
  </div>
)

export default IndexPage

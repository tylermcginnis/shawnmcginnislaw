import React from 'react'
import { Link } from 'gatsby'
import '../index.css'
import favicon from '../favicon.png'
import Helmet from 'react-helmet'

const IndexPage = () => (
  <div className='container'>
    <Helmet
      title="Shawn McGinnis Law - St. George, Utah Personal Injury Lawyer"
      meta={[
          { name: 'description', content: 'Shawn McGinnis Law - St. George, Utah Personal Injury Lawyer' },
          { name: 'keywords', content: 'Shawn McGinnis Law - St. George, Utah Personal Injury Lawyer' },
      ]}
      link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
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

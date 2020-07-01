import React from 'react'

import Header from '../Header/Header'
import Phone from './components/Phone/Phone'

import './Contact.scss'

export default function Contact(props) {

  return (
    <div class="Contact">
      <Header
        title="CONTACT"
      />
      <div className="Contact__text--1">
        
      </div>

      <div className="Contact__phone">
        <Phone />
      </div>
    </div>  
  )
}
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../Profile/Profile'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Project from '../Projects/Project'
import Contact from '../Contact/Contact'
import Footer from '../../components/Footer/Footer'


export default function Home() {
  return (
    <div>

      <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>

  
      
    </div>
  )
}

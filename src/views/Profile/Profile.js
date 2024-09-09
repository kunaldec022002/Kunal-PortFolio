import React from 'react'
import Img from '../../img/profile.jpg'
import './Profile.css'

export default function Profile() {
  return (
    <div>
      
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-xl font-bold">
                👋 Hi I'm Kunal 👨‍💻 and welcome to
            </h4>
            <h2 className="text-center text-emerald-500 text-5xl font-bold">
              My Portfolio Website
            </h2>
          </div>
          <p className="text-center">
            I'm Frontend developer...👨‍💻<br/>
            
          </p>
        </div>
        <div className="flex-1">
          <img src={Img} id='portfolio-img' alt='portfolio-img'
               className="profile-img"/>
        </div>
      </section>
      
    </div>
  )
}

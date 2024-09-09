import React from 'react'

export default function About() {
  return (
    <div>


        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-emerald-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src="https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                    alt="About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p>
                   👋 Hi, I'm Frontend Developer...
                </p>
                <p>
                  Proficient in HTML, CSS, and JavaScript, with a strong focus on frontend framework React. Demonstrated expertise in translating UI/UX designs into pixel-perfect,responsive web pages while ensuring cross-browser compatibility. Proven ability to optimize website performance and deliver clean, maintainable code Strong collaboration and problem-solving skills,working effectively within cross-functional teams to deliver high-quality solutions. Committed to staying updated with the latest frontend technologies and trends, continuously enhancing skills to drive innovation and user satisfaction. Adept at meeting project deadlines and effectively managing multiple priorities. Seeking an opportunity to leverage my frontend development expertise to contribute to the success of a dynamic and growth-oriented organization."
                </p>
            </div>
        </section>
    

    
    </div>
  )
}

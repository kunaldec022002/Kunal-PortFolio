import React from 'react'

export default function Contact() {
  return (
    <div>
         <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href="https://www.linkedin.com/in/kunal-ingale/">
                    🖇️LinkedIn:
                    <span className="font-bold">
                        @KunalIngale
                    </span>
                </a>
                
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href="https://github.com/kunaldec022002">
                     👨‍💻GitHub:
                    <span className="font-bold">
                        @kunaldec022002
                    </span>
                </a>
            </div>
        </section>
    </div>
  )
}

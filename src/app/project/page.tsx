
import React from 'react'


 const Project = () => {
  return (
    <section className='container mx-auto p-4'>
      <h1 className='text-6xl my-8 font-semibold'>Awesome projects i've built</h1>
      <section>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300">
          <img
            className="w-full"
            src="https://th.bing.com/th/id/R.40641269c33522c05ceeba707bc9a8d4?rik=mE%2bT7EmjAHArEQ&pid=ImgRaw&r=0"
            alt="Project Image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Project Title</div>
            <p className="text-gray-700 text-base">
              This is a brief description of the project. It highlights the main
              features and functionalities, providing a quick overview of what
              the project is about.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://github.com/yourusername/yourproject"
              target="_blank"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>


      
    </section>
  
      
    
  )
}


export default Project;
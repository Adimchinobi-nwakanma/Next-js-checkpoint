import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


 export const Contact = () => {
  return (
   <div className='container mx-auto p-4'>
     <h1>Contack Me:</h1>

<section className='mt-8 flex gap-4'>
<div>
<a href="https://twitter.com/yourusername" target='_blank' className='flex items-center gap-2 border border-grey-300 p-2  rounded-md w-max hover:bg-blue-500
hover:text-white transition-colors duration-300'>
<FaXTwitter />
<span>Twitter</span>
</a>
</div>

<div>
<a href="https://github.com/yourusername" target='_blank' className='flex items-center gap-2 border border-grey-300 p-2  rounded-md w-max hover:bg-black
hover:text-white transition-colors duration-300'>
<FaGithub />
<span>Github</span>
</a>

</div>
</section>
   </div>
  )
}

export default Contact;
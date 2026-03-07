import React from 'react'
import HorizontalGrid from '../grid/HorizontalGrid'
import { Separator } from '../../ui/separator'

const text=[
  "Computer Science student at COMSATS University, Pakistan.",
"Passionate software engineer who enjoys building real-world projects through code.",
"Curious about how technology works and how it can be used to create useful solutions.",
"Strong interest in Software Development, Machine Learning, and Artificial Intelligence.",
"Inspired by the rapid growth of AI and motivated to build intelligent systems.",
"Continuously improving skills by learning new technologies and developing projects, with the goal of becoming an ML/AI engineer.",
]

const About = () => {
  return (
    <div id='about'>
      <div className='p-2'>
       <h1 className='text-2xl font-semibold tracking-tight'>About</h1>
        <Separator />
        <ul className='pl-4 pt-1 list-disc flex flex-col flex-wrap font-mono text-foreground text-sm '>
          {
            text.map((text,id)=>(
               <li 
               key={id}>{text}</li>
            ))
          }
                  
        </ul>
     </div>
      <HorizontalGrid/>
    </div>
  )
}

export default About
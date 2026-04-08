import React from 'react'
import HorizontalGrid from '../grid/HorizontalGrid'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'
const projects=[
    {
        name:"Klickr",
        description:"Smart Links. Real-Time Insights.",
        type:["web"],
        url:"https://klickr.vercel.app/"
    },
    {
        name:"Linksy",
        description:"Share your all your online content from one beautiful link-in-bio page.",
        type:["web"],
        url:"https://liinksy.vercel.app/"
    },
       {
        name:"FileFlow",
        description:"Lightweight Python MCP Server for Efficient File Management",
        type:["mcp","agentic ai"],
        url:"https://github.com/Subhan-Asghar/FileFlow-mcp"
    },
       {
        name:"OctoOps",
        description:"AI-Driven GitHub Automation Agent via MCP Server",
        type:["mcp","agentic ai"],
        url:"https://github.com/Subhan-Asghar/OctoOps-mcp"
    }
]
const Projects = () => {
  return (
    <div id='projects'>
        <div className='p-2'>
 <h1 className='text-2xl font-semibold tracking-tight pb-2'>Projects <sup className='text-sm text-muted-foreground'>({projects.length})</sup></h1>
    
            <div className='flex flex-col w-full gap-2 '>
                {projects.map((item,id)=>(
                    <div 
                    className='border-2 flex justify-between items-center p-2 px-4 rounded-lg'
                    key={id}>
                        <div>
                            
                              <h1 className='text-balance text-lg font-bold  mb-1'>{item.name}</h1>

                            <p className='text-sm text-muted-foreground flex items-center font-light mb-1'>{item.description}</p>

                             <span className='flex flex-wrap gap-2 items-center'>                                
                                {item.type.map((type,id)=>(
                                <Badge
                                className='font-semibold'
                                key={id}>{type}</Badge>
                              ))}</span>
                        </div>

                        <div>
                            <a href={item.url} target='_blank'><ExternalLink className='size-4'/></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <HorizontalGrid/>
    </div>
  )
}

export default Projects
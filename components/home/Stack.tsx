"use client"
import React from 'react'
import HorizontalGrid from "./grid/HorizontalGrid"
import { Separator } from '../ui/separator'
import { useTheme } from "next-themes"


import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import StackIcon from 'tech-stack-icons'

const stack=[
  "typescript",
  "python",
  "rust",

  // ML
  "numpy",
  "pandas",
  "scikitlearn",
  "langchain",
  "colab",
  "huggingface",
  "pytorch",
  "tensorflow",
  "analytics",
  "claude",

  "git",
  "github",

  // Web
  "nextjs2",
  "react",
  "drizzle",
  "postgresql",
  "supabase",
  "shadcnui",

  
  
]


const Stack = () => {
    const { theme, resolvedTheme } = useTheme()
    if (!resolvedTheme) return
  return (
    <div >
      <div className='p-2'>
        <h1 className='text-2xl font-semibold tracking-tight'>Tech Stack</h1>
        <Separator />

          <div className='flex flex-wrap gap-4 pt-2'>
          {stack.map((item, index) => (
            <div key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                
                    <StackIcon name={item}
                    variant={resolvedTheme==="dark"? "dark":"light"}
                    className='size-8'
                    />
                
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hello</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
       

      </div>

      <HorizontalGrid />
    </div>
  )
}

export default Stack





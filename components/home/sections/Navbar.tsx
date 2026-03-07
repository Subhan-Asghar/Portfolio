import React from 'react'
import { Button } from '../../ui/button'
import {ModeToggle} from "@/components/theme-button"
import HorizontalGrid from '../grid/HorizontalGrid'
import { Separator } from '../../ui/separator'
import { GithubIcon } from '../../icons/GithubIcon'
import { Badge } from '@/components/ui/badge'

const Navbar = () => {
  return (
    <div id='home'>
        <div className='flex justify-between items-center gap-2 p-2'>
             <Badge className='border-none bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5'>
      <span className='size-1.5 rounded-full bg-green-600 dark:bg-green-400' aria-hidden='true' />
      Studying 
    </Badge>
            <div className='flex'>
                 <a href="#home"> <Button variant={"custom"} >Home </Button></a>
             <a href="#about"><Button variant={"custom"}>About </Button></a>
             <a href="#projects"><Button variant={"custom"}>Projects </Button></a>
             <a href="https://github.com/Subhan-Asghar" target='_blank'>
                <Button variant={"custom"} size={'icon'}><GithubIcon/> </Button>
            </a>
             <Separator orientation='vertical'/>
        <ModeToggle/>
                    </div>
           
        </div>
       
        <HorizontalGrid/>
    </div>
  )
}

export default Navbar
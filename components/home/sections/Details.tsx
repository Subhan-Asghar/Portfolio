import React from 'react'
import HorizontalGrid from '../grid/HorizontalGrid'
import {  MapPin, CodeXml ,Mail,GithubIcon,Mars,GraduationCap,Linkedin} from 'lucide-react';
const Details = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 p-2 text-sm font-light'>
                <div className='col-span-1 space-y-2.5'>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-muted h-6 w-6 rounded-sm flex items-center justify-center '>
                            <CodeXml size={16} />
                        </span>
                        <h1 >Software Engineer</h1>

                    </div>

                     <div className='flex gap-2 items-center'>
                       
                        <span className='bg-muted h-6 w-6 rounded-sm flex items-center justify-center '>
                            <GithubIcon size={16} />
                        </span>
                        <a href="https://github.com/Subhan-Asghar" target='_blank'>
                        <h1 className='hover:underline hover:underline-offset-2' >Subhan-Asghar</h1>
                        </a>
                    </div>
                 
                        <div className='flex gap-2 items-center'>
                        <span className='bg-muted h-6 w-6 rounded-sm flex items-center justify-center '>
                            <Mail size={16} />
                        </span>
                        <a href="mailto:subhanasghar16@gmail.com" target='_blank'>
                        <h1 className='hover:underline hover:underline-offset-2' >subhanasghar16@gmail.com</h1>
                        </a>

                    </div>
                         
                           <div className='flex gap-2 items-center'>
                       
                        <span className='bg-muted h-6 w-6 rounded-sm flex items-center justify-center '>
                            <Linkedin size={16} />
                        </span>
                        <a href="https://github.com/Subhan-Asghar" target='_blank'>
                        <h1 className='hover:underline hover:underline-offset-2' >Linkedin</h1>
                        </a>
                    </div>
                       

                      
                    
                    
                </div>
                <div className='col-span-1 pt-2.5 md:pt-0 pl-0 md:pl-2 space-y-2.5'>

                     <div className='flex gap-2 items-center'>
                        <span className='bg-muted h-6 w-6 rounded-sm flex items-center justify-center '>
                            <MapPin size={16} />
                        </span>
                        <h1 >Lahore, Pakistan</h1>

                    </div>

                      <div className='flex gap-2 items-center'>
                        <span className='bg-muted h-6 w-6 rounded-sm flex items-center justify-center '>
                            <GraduationCap size={16} />
                        </span>
                        <h1 >COMSATS University</h1>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='bg-muted h-6 w-6 rounded-sm flex items-center justify-center '>
                            <Mars size={16} />
                        </span>
                        <h1 >he / him</h1>

                    </div>
                </div>

            </div>
            <HorizontalGrid />
        </div>
    )
}

export default Details
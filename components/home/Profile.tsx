import React from 'react'
import HorizontalGrid from './grid/HorizontalGrid'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from '../ui/separator'
import { Code,CodeXml } from 'lucide-react';
const Profile = () => {
    return (
        <div>
            <div className='p-2 flex '>
         <Avatar className='w-30 h-30'>
                <AvatarImage
                    src="https://avatars.githubusercontent.com/u/176176346?v=4" 
                    className='object-cover'
                    />
                <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className='flex flex-col  justify-end w-full p-2'>
                <Separator/>
                <h1 className='pt-2 text-3xl  font-semibold tracking-tight'>Subhan Asghar </h1>
                <p className='text-sm text-muted-foreground flex items-center gap-1 font-light'><CodeXml size={18}/> Software Engineer </p>
            </div>
            
            </div>
           
            <HorizontalGrid />
        </div>
    )
}

export default Profile


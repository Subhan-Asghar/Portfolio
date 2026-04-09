"use client"
import React from 'react'
import { GithubIcon, Home, LinkedinIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShimmeringText } from "@/components/ui/shimmering-text"


const Footer = () => {
  const [date, setDate] = React.useState<string>("")

  React.useEffect(() => {
    const pakistanDate = new Date().toLocaleDateString("en-PK", {
      timeZone: "Asia/Karachi",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    setDate(pakistanDate)
  }, [])

  return (
    <div className='mb-2 p-2 flex justify-between items-center gap-2'>

      <h1 className='text-sm tracking-tight'>{date} </h1>
      <div className=' flex flex-wrap justify-center items-center gap-2'>
        <a href="#home"><Button variant={"outline"} size={"icon-sm"}> <Home /></Button></a>
        <a href="https://github.com/Subhan-Asghar" target='_blank'><Button variant={"outline"} size={"icon-sm"}> <GithubIcon /></Button></a>
        <a href="https://www.linkedin.com/in/subhan-asghar-87b35631a" target='_blank'> <Button variant={"outline"} size={"icon-sm"}> <LinkedinIcon /></Button></a>

      </div>

    </div>
  )
}

export default Footer
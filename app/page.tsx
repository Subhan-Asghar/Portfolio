import GridLines from "@/components/home/grid/GridLines"
import Navbar from "@/components/home/Navbar"
import About from "@/components/home/About"
import Details from "@/components/home/Details"
import Profile from "@/components/home/Profile"
import Stack from "@/components/home/Stack"
export default function Page() {
return (
    <>
    <div className="grid grid-cols-12 h-auto ">
        <div className="hidden md:grid md:col-span-3 justify-end pr-1" >
            <GridLines></GridLines>
        </div>
        <div className="col-span-12 md:col-span-6 ">
            <Navbar></Navbar>
            <Profile></Profile>
            <Details></Details>
            <Stack></Stack>
            <About></About>
          </div> 
        <div className="hidden md:grid md:col-span-3 pl-1">
              <GridLines></GridLines>
              
            </div> 

    </div>
    
    </>
)
}
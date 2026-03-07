import React from 'react'
import Scales from '../../ui/scales'

const HorizontalGrid = () => {
  return (
     <div className='relative '>
     <div className="relative h-8 left-1/2 -translate-x-1/2 w-screen mask-r-from-90% mask-l-from-90%">
          <Scales size={8} className="border-y-2" />
        </div>
        </div>
  )
}

export default HorizontalGrid
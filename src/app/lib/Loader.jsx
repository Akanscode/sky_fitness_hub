import React from 'react'
import { CirclesWithBar} from "react-loader-spinner"

const Loader = () => {
  return (
      <div className='fixed top-0 bottom-0 right-0 left-0 z-[350] flex items-center justify-center  '>
          <CirclesWithBar
              height="100"
              width="100"
              color="#a855f7"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel='circles-with-bar-loading'
/>
    </div>
  )
}

export default Loader
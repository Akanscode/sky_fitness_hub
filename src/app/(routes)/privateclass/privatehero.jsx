import React from 'react'

const PrivateHero = () => {
  return (
    <div>
       <div className="w-full bg-center bg-cover h-[58rem] mx-auto bg-[url('/assets/privateheroimg')]">
              <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                  <div className="mx-10 mt-10 lg:mt-20">
                      <h1 className="text-center text-white "> Private Class</h1>
                      <p className="max-w-xl mt-5 font-sans font-bold leading-none text-center text-gray-100 sm:text-sm lg:text-xl lg:my-8">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Provident, excepturi? Laborum odio nisi iste quidem porro.
                      </p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default PrivateHero
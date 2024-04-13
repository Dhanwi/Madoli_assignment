// import React from 'react'
import { navLists } from "../constants"
import { madoliLogo } from "../utils"

const Navbar = () => {
  return (
    <header className="bg-rose-100 w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className=" flex w-full screen-max-width">
        <img src={madoliLogo} alt="Madoli logo" className="object-scale-down w-14 h-15" />
        <div className="flex flex-1 justify-center max-sm:hidden">
        {navLists.map((nav) => (
            <div
              key={nav}
              className="px-8 text-lg cursor-pointer text-gray hover:text-violet-700 transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

      </nav>

    </header>
  )
}

export default Navbar



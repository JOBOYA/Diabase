import Svg from '../assets/Diabase.svg'
import { motion } from "framer-motion";
import { useState, useRef, RefObject, useEffect } from 'react';




export const Navbar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const searchInputRef: RefObject<HTMLInputElement> = useRef(null);
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
          setShowSearchInput(false);
        }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

  return (
      <>
      <motion.header
     
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
    >

    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
 
    


 
    <nav className="mt-6 relative max-w-7xl w-full bg-white border border-gray-300 rounded-lg shadow-xl mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto">
    <img className="hidden md:block" src={Svg} alt="logo" />
  <div className="flex items-center justify-between">
     {/* Logo visible pour les écrans inférieurs à md */}
     <img className="block md:hidden mr-2" src={Svg} alt="logo" />
    <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">
    



    </a>
    <div className="md:hidden">
    <button  onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
    <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>
  </div>
  <div id="navbar-collapse-with-animation" className={`hs-collapse ${isMenuOpen ? '' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow md:flex`}>
  <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
  <a className="font-medium text-gray-500 hover:text-teal-600 py-6 dark:text-gray-400 uppercase text-lg transition duration-300 ease-in-out transform  md:hover:scale-105" href="#">Wallet</a>
<a className="font-medium text-gray-500 hover:text-teal-600 py-6 dark:text-gray-400 uppercase text-lg transition duration-300 ease-in-out transform  md:hover:scale-105" href="#">Technologies</a>
<a className="font-medium text-gray-500 hover:text-teal-600 py-6 dark:text-gray-400 uppercase text-lg transition duration-300 ease-in-out transform  md:hover:scale-105" href="#">Roadmap</a>
<a className="font-medium text-gray-500 hover:text-teal-600 py-6 dark:text-gray-400 uppercase text-lg transition duration-300 ease-in-out transform  md:hover:scale-105" href="#">Trade</a>





      <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
        <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ">
          Setup
          <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </button>

        

            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white shadow-xl md:shadow-md rounded-lg p-2 dark:bg-white md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute md:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-teal-200 dark:hover:text-black" href="#">
    MASTERNODE SETUP
  </a>
  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-teal-200 dark:hover:text-black" href="#">
    WHITEPAPER
  </a>
  </div>
  
  
  
      </div>

      <a className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" onClick={() => {
    setShowSearchInput(true);
    setTimeout(() => searchInputRef.current?.focus(), 0);
}}>
    <svg className="w-4 h-4 text-gray-600" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.5 9h-.79l-.28-.27A5.471 5.471 0 0 0 11 5.5 5.5 5.5 0 1 0 5.5 11c1.42 0 2.73-.54 3.73-1.43l.27.28v.79l4 4L15 14.5l-4-4zm-5 0A3.5 3.5 0 1 1 9 5.5 3.5 3.5 0 0 1 5.5 9z"/>
    </svg>
    <div ref={searchBarRef}>
    <span className="hidden md:block">Search</span>
    </div>
</a>
<div className={`transition ease-out duration-300 ${showSearchInput ? 'opacity-100' : 'opacity-0'}`}>
    <input ref={searchInputRef} type="text" className="border rounded-md py-2" placeholder="Type to search..."/>
</div>

      
    </div>
  </div>
</nav>
</header>
    </motion.header>
      </>
  )
}
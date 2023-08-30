import Svg from '../assets/Design_nav.svg'
import { motion } from "framer-motion";
import { useState, useRef,  useEffect } from 'react';
import { Link } from 'react-router-dom';
import pdfPath from '../pdf_whitepaper/Diabase_Blockchain_Technical_Whitepaper.pdf';



export const Navbar = () => {
  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 10) {
      navRef.current?.classList.add('fixed-navbar');
    } else {
      navRef.current?.classList.remove('fixed-navbar');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
      <>
      <motion.header
      ref={navRef}
      initial={{ y: -250 }}
      animate={{ y: -10 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
    >

    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">

    <nav className="mt-6 relative max-w-7xl w-full bg-white border border-gray-300 rounded-lg shadow-xl mx-2 py-3 px-4 md:flex md:items-center md:justify-center md:py-0 md:px-6 lg:px-8 xl:mx-auto">

<a  href="#" aria-label="Brand">
<img className="hidden w-48 md:block mr-2 " src={Svg} alt="logo" />



    </a>
  <div className="flex items-center justify-between">
     {/* Logo visible pour les écrans inférieurs à md */}
    

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
  <div className="md:ml-auto flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">


  <a className="font-medium text-gray-500 hover:text-teal-600 py-6 dark:text-gray-400 uppercase text-lg md:transition md:duration-300 md:ease-in-out md:transform md:hover:scale-125" href="#wallet">Wallet</a>
<a className="font-medium text-gray-500 hover:text-teal-600 py-6 dark:text-gray-400 uppercase text-lg md:transition md:duration-300 md:ease-in-out md:transform md:hover:scale-125" href="#techno">Technologies</a>
<a className="font-medium text-gray-500 hover:text-teal-600 py-6 dark:text-gray-400 uppercase text-lg md:transition md:duration-300 md:ease-in-out md:transform md:hover:scale-125" href="#roadmap">Roadmap</a>
<a className="font-medium text-gray-500 hover:text-teal-600 py-6 dark:text-gray-400 uppercase text-lg md:transition md:duration-300 md:ease-in-out md:transform md:hover:scale-125" href="#trade">Trade</a>



      <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
        <button type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ">
          Setup
          <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white shadow-xl md:shadow-md rounded-lg p-2 dark:bg-white md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute md:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
  
            <Link 
        to="/masternode-setup" 
        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-teal-200 dark:hover:text-black"
      >
        MASTERNODE SETUP
      </Link>
        
      <a 
  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-teal-200 dark:hover:text-black"
  href={new URL(pdfPath, import.meta.url).href} 
  download
>
  WHITEPAPER
</a>



  </div>
      </div>
    </div>
  </div>
</nav>
</header>
    </motion.header>
      </>
  )
}



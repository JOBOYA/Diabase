import React from "react";
import { Link } from "react-scroll";
import { DocumentationContent }  from './DocumentationContent';

export const DocumentationMasternode: React.FC = () => {



  return (
    <body className="bg-gray-50 dark:bg-slate-900 h-screen fixed w-full">

  
  <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center py-4">
    
      <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar-dark" aria-controls="application-sidebar-dark" aria-label="Toggle navigation">
        <span className="sr-only">Toggle Navigation</span>
        <span className="sr-only">Toggle Navigation</span>
        <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      

     
      <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
        <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
          Application Layout
         
        </li>
        <Link
              activeClass="active"
              to="section-1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
             Introduction
            </Link>
      </ol>
     
    </div>
  </div>
 

 
  <div id="application-sidebar-dark" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-gray-900 border-r border-gray-800 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0">
    <div className="px-6">
      <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">MASTERNODE SETUP</a>
    </div>

    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <ul className="space-y-1.5">
        <li>
          <a className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-700 text-sm text-white rounded-md" href="javascript:;">
           
          Introduction
          </a>
        </li>

        <li className="hs-accordion" id="users-accordion">
          <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white" href="javascript:;">
           
            Users

           

          </a>

          <div id="users-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul className="hs-accordion-group pl-3 pt-2" data-hs-accordion-always-open>
              <li className="hs-accordion" id="users-accordion-sub-1">
                <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white" href="javascript:;">
                  Sub Menu 1

                  
                </a>

                <div id="users-accordion-sub-1-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                  <ul className="pt-2 pl-2">
                    <li>
                      <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white" href="javascript:;">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white" href="javascript:;">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white" href="javascript:;">
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="hs-accordion" id="users-accordion-sub-2">
                <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white" href="javascript:;">
                  Sub Menu 2

                  

                </a>

                <div id="users-accordion-sub-2-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-2">
                  <ul className="pt-2 pl-2">
                    <li>
                      <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white" href="javascript:;">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white" href="javascript:;">
                        Link 2
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white" href="javascript:;">
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li className="hs-accordion" id="account-accordion">
          <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white" href="javascript:;">
           
            Account


            
          </a>

          </li>
      </ul>
    </nav>
  </div>


 <div className="mt-20 pl-[300px] fixed z-10">
  <DocumentationContent />
  </div>
 
</body>
  );
};

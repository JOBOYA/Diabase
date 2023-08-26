import React from 'react';
import Discord from '../assets/social/Discord.svg';
import Facebook from '../assets/social/Facebook.svg';
import TwitterX from '../assets/social/TwitterX.svg';
import Youtube from '../assets/social/Youtube.svg';

import Telegram from '../assets/social/Telegram.svg';
import { copyRight } from './Copyright';

export const Footer = () => {
  return (
    <div className="bg-white shadow-md p-20">
      <div className="flex justify-center space-x-4">
        <a href="#" className="transform hover:scale-110 transition-transform">
          <img src={Discord} className="h-16 sm:h-20 w-16 sm:w-20" alt="Discord" />
        </a>
        <a href="#" className="transform hover:scale-110 transition-transform">
          <img src={Facebook} className="h-16 sm:h-20 w-16 sm:w-20" alt="Facebook" />
        </a>
        <a href="#" className="transform hover:scale-110 transition-transform">
          <img src={TwitterX} className="h-16 sm:h-20 w-16 sm:w-20" alt="Twitter" />
        </a>
        <a href="#" className="transform hover:scale-110 transition-transform">
          <img src={Youtube} className="h-16 sm:h-20 w-16 sm:w-20" alt="Youtube" />
        </a>
        <a href="#" className="transform hover:scale-110 transition-transform">
          <img src={LinkedIn} className="h-16 sm:h-20 w-16 sm:w-20" alt="LinkedIn" />
        </a>
        <a href="#" className="transform hover:scale-110 transition-transform">
          <img src={Telegram} className="h-16 sm:h-20 w-16 sm:w-20" alt="Telegram" />
        </a>
       

      </div>
        <div className="flex flex-wrap justify-center items-center text-sm text-gray-500 py-6">
            <p className="text-center">
                {copyRight()}
            </p>
            </div>

    </div>
  );
};

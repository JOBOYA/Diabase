import React from 'react';
import Discord from '../assets/social/Discord.svg';
import Facebook from '../assets/social/Facebook.svg';
import TwitterX from '../assets/social/TwitterX.svg';
import Youtube from '../assets/social/Youtube.svg';
import LinkedIn from '../assets/social/Linkedin.svg';
import Telegram from '../assets/social/Telegram.svg';
//mail icon
import {FaMailBulk} from 'react-icons/fa';
import { copyRight } from './Copyright';

export const Footer = () => {
  return (
    <div className="bg-white shadow-md p-20">
      <div className="flex justify-center space-x-4">
        <a href="https://www.google.com/url?q=https%3A%2F%2Fdiscord.gg%2FjQxNJMR3k8&sa=D&sntz=1&usg=AOvVaw3wCX1So5RMUPIrtXNVrR4k" className="transform hover:scale-110 transition-transform">
          <img src={Discord} className="h-16 sm:h-20 w-16 sm:w-20" alt="Discord" />
        </a>
        <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61550289374011&sa=D&sntz=1&usg=AOvVaw0Ca7F_bUlGS4QAdrVF0DDC" className="transform hover:scale-110 transition-transform">
          <img src={Facebook} className="h-16 sm:h-20 w-16 sm:w-20" alt="Facebook" />
        </a>
        <a href="https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2FDiabaseCoin&sa=D&sntz=1&usg=AOvVaw09VK-QK-mIDIKxiNRcmi71" className="transform hover:scale-110 transition-transform">
          <img src={TwitterX} className="h-16 sm:h-20 w-16 sm:w-20" alt="Twitter" />
        </a>
        <a href="https://youtube.com/@DiabaseBlockchain" className="transform hover:scale-110 transition-transform">
          <img src={Youtube} className="h-16 sm:h-20 w-16 sm:w-20" alt="Youtube" />
        </a>
        <a href="http://www.google.com/url?q=http%3A%2F%2Fwww.linkedin.com%2Fin%2Fdiabase-founder-a59689281&sa=D&sntz=1&usg=AOvVaw1aMW-Ie7pFMNcbe7iO2PMw" className="transform hover:scale-110 transition-transform">
          <img src={LinkedIn} className="h-16 sm:h-20 w-16 sm:w-20" alt="Linkedin" />
        </a>
        <a href="https://www.google.com/url?q=https%3A%2F%2Ft.me%2Fdiabaseblockchain&sa=D&sntz=1&usg=AOvVaw3LNj1dNIY4QcjjwFky8sk9" className="transform hover:scale-110 transition-transform">
          <img src={Telegram} className="h-16 sm:h-20 w-16 sm:w-20" alt="Telegram" />
        </a>
   <a href="mailto:diabasecoin@gmail.com" className="transform hover:scale-110 transition-transform">
          <FaMailBulk className="h-16 sm:h-20 w-16 sm:w-20"  />
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

import React, { ReactNode, useState } from 'react';

interface Section {
  title: string;
  content: ReactNode;
}

const sections: Section[] = [
  {
    title: 'Introduction',
    content: (
      <>
        <p>Setting up a masternode on the Diabase Blockchain can be a rewarding way to contribute to the network's operations while earning rewards. This guide will walk you through the process of setting up your own Diabase Blockchain masternode, from preparing the necessary requirements to configuring and running your node.</p>
        <br/>
        <p><span style={{color: '#DAA520'}}>Note:</span> 
        <br/>This guide assumes you have basic knowledge of Linux and command-line interfaces. If you're new to these concepts, consider seeking assistance or educating yourself further before proceeding.</p>
<br/>
        <p><span className='text-red-500 font-bold'>Requirements:</span></p>
      
        <ul>
          <li>Technical Knowledge: Basic understanding of Linux commands and terminal usage.</li>
          <li>Hardware: A dedicated server or Virtual Private Server (VPS) meeting the minimum requirements:</li>
          <ul>
            <li><span className='text-red-400'>CPU:</span> Multi-core processor (2 cores or more)</li>
            <li><span className='text-slate-400'>RAM:</span> At least 2GB (more recommended)</li>
            <li><span className='text-blue-500'>Storage:</span> 20GB of free disk space (SSD recommended)</li>
            <li><span className='text-green-500'>Network:</span> Stable and high-speed internet connection</li>
          </ul>
          <li><span className='text-blue-500'>Diabase Blockchain (DIAC) Coins:</span> 1000 of Diabase Blockchain coins DIAC to use as collateral for your masternode.</li>
          <li><span className='text-red-500'>Static IP Address:</span> Obtain a static IP address for your VPS or server.</li>
        </ul>
        <br/>
        <p>This documentation describes the commands as if they were entered in the Diabase GUI by opening the console from Window {'>'} Console, but the same result can be achieved on a masternode by entering the same commands and adding the prefix ~/.diabasecore/diabase-cli to each command.</p>
      </>
    )
  },
  { title: 'Send the collateral', content:
  (
    <>
      <p>A Diabase address with a single unspent transaction output <span className='text-blue-500'>(UTXO)</span>  of exactly <span className='text-blue-500'>1000 DIAC</span> is required to operate a masternode.</p>
      
      Once it has been sent, various keys regarding the transaction must be extracted for later entry in a 
      <br/>configuration file and registration transaction as proof to write the configuration to the blockchain so the masternode can be included in the deterministic list.
      
      <br/>
      <br/>A masternode can be registered from the official Diabase wallet or core cli.
      
    </>
  ) },

  { title: 'Guide d’installation', content: 'Ceci est le guide d’installation.' },
];








export const DocumentationMasternode: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(sections[0]);

  const handleSectionClick = (section: Section) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex h-screen bg-opacity-40 bg-black backdrop-blur text-white">
      <div className="w-1/4 bg-slate-800 p-4">
        <ul>
          {sections.map((section, index) => (
            <li 
              key={index}
              className={`cursor-pointer p-2 hover:bg-gray-700 transition ease-in-out duration-150 ${selectedSection.title === section.title ? 'bg-gray-700' : ''}`}
              onClick={() => handleSectionClick(section)}
            >
              <span className="inline-block hover:px-4">{section.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-8 bg-slate-700 backdrop-blur-md ">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">{selectedSection.title}</h2>
        <div 
          className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-2xl text-lg leading-relaxed"
        >
          {selectedSection.content}
        </div>
      </div>
    </div>
  );
};

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

  { title: 'Sending from Diabase Core wallet', content:
  (
    <>
      
      
      <br/><span className='text-blue-500'>Open Diabase wallet</span> and wait for it to synchronize with the network.
  <br/>Click <span className='text-red-500'>Window {'>'} Console</span> to open the console. Type the following command into the console to generate a new Diabase address for the collateral:
  <br/>
  <br/><span className='text-blue-500'>getnewaddress</span>
  <br/>
  <br/>Take note of the collateral address, since we will need it later. The next step is to secure your wallet (if you have not already done so). First, <span className='text-red-500'>encrypt the wallet</span> by selecting Settings {'>'} Encrypt wallet. You should use a strong, new password that you have never used somewhere else. Take note of your password and store it somewhere safe or you will be permanently locked out of your wallet and lose access to your funds.
  <br/>Next, back up your wallet file by selecting <span className='text-red-500'>File {'>'} Backup Wallet</span>. Save the file to a secure location physically separate to your computer, since this will be the only way you can access our funds if anything happens to your computer.
  <br/>
  <br/>Now send exactly <span className='text-blue-500'>1000 DIAC</span> in a single transaction to the new address you generated in the previous step. This may be sent from another wallet, or from funds already held in your current wallet. Once the transaction is complete, view the transaction in a blockchain explorer by searching for the address. You will need 15 confirmations before you can register the masternode, but you can continue with the next step at this point.



    </>
  ) },

  { title: 'Setting up the Masternode', content:
  (
    <>
    <div className="font-sans">
      <h2 className="text-2xl">Setting up the Masternode</h2>
      <p>The following assumes you have a fully function VPS or server with Diabase core installed and sync’d.</p>
      <p>The Diabase Core can be built or pre-compiled binaries can be used. After the initial sync, the core should be stopped and the following done.</p>
      <br/>
      <p>Create a configuration file using the following command:</p>
      <div className="bg-gray-100 p-2 rounded-md"> <span className="text-blue-500">nano ~/.diabasecore/diabase.conf</span></div>
      <br/>
      <p>An editor window will appear. We now need to create a configuration file specifying several variables.</p>
      <div className="bg-gray-800 text-white p-4 rounded-md font-mono nano-terminal">
        
          <br/>#----
          <br/>rpcuser=XXXXXXXXXXXXX
          <br/>rpcpassword=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
          <br/> rpcallowip=127.0.0.1
          <br/> #----
          <br/>listen=1
          <br/>  server=1
          <br/> daemon=1
          <br/> #----
          <br/> #masternodeblsprivkey=
          <br/>  externalip=XXX.XXX.XXX.XXX
          <br/>#----
        
      </div>
      <br/>
      <p>Replace the fields marked with XXXXXXX as follows:</p>
      <ul>
        <li><span className="text-red-500">rpcuser:</span> enter any string of numbers or letters, no special characters allowed.</li>
        <li><span className="text-red-500">rpcpassword:</span> enter any string of numbers or letters, no special characters allowed.</li>
        <li><span className="text-red-500">externalip:</span> this is the IP address of your VPS.</li>
      </ul>
      <p>Leave the masternodeblsprivkey field commented out for now.</p>
    </div>
    </>
  ) },


  { title: 'Register your masternode', content:
  (
    <>
      <p>A Diabase address with a single unspent transaction output <span className='text-blue-500'>(UTXO)</span>  of exactly <span className='text-blue-500'>1000 DIAC</span> is required to operate a masternode.</p>
      
      Once it has been sent, various keys regarding the transaction must be extracted for later entry in a 
      <br/>configuration file and registration transaction as proof to write the configuration to the blockchain so the masternode can be included in the deterministic list.
      
      <br/>
      <br/>A masternode can be registered from the official Diabase wallet or core cli.
      
    </>
  ) },
];








export const DocumentationMasternode: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(sections[0]);

  const handleSectionClick = (section: Section) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex h-screen bg-opacity-40 bg-black backdrop-blur text-white">
      <div className="w-1/5 bg-slate-800 p-4"> {/* Largeur ajustée ici */}
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
        <h2 className="text-xl font-semibold mb-4 text-green-400">{selectedSection.title}</h2> {/* Taille du texte ajustée ici */}
        <div 
          className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-2xl text-lg leading-relaxed"
        >
          {selectedSection.content}
        </div>
      </div>
    </div>
  );
};


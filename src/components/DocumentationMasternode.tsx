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
      <div className="bg-black text-white p-4 rounded-md font-mono nano-terminal">
        
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
      <p>Press Ctrl + X to close the editor, and then Y and Enter to save the file. You can now start the Diabase core on the masternode to begin synchronization with the blockchain:</p>
<pre className="bg-gray-100 p-2 rounded-md"><span className="text-blue-500">~/.diabasecore/diabased</span></pre>
<p>You will see a message indicating that the Diabase server is starting.</p>
<br/>
<p>Now, you need to wait for 15 confirmations of the collateral transaction to complete and for the blockchain to finish synchronizing on the masternode. You can use the following commands to monitor progress:</p>
<pre className="bg-gray-100 p-2 rounded-md"><span className="text-blue-500">~/.diabasecore/diabase-cli mnsync status</span></pre>
<br/>
<p>When the synchronization is complete, you should see the following response:</p>
<div className="bg-gray-900 text-white p-4 rounded-md font-mono">
  <pre>
    {"{"}<br />
      "AssetID": 999,<br />
      "AssetName": "MASTERNODE_SYNC_FINISHED",<br />
      "AssetStartTime": 1691764651,<br />
      "Attempt": 0,<br />
      "IsBlockchainSynced": true,<br />
      "IsSynced": true,<br />
    {"}"}
  </pre>
</div>
<br/>
<p>Continue with the next step to construct the ProTx transaction required to enable your masternode.</p>


    </div>
    </>
  ) },


  { title: 'Register your masternode', content:
  (
    <>
     <div >

<h2 className="text-2xl font-bold  mb-4">Identify the funding transaction</h2>
<p className="mb-4">If you used an address in Diabase Core wallet for your collateral transaction, you now need to find the txid of the transaction. Click <span className="font-semibold">Window {'>'} Console</span> and enter the following command:</p>

<div className="bg-gray-900 p-2 rounded">
  masternode outputs
</div>
<br/>
<p className="mb-4">This should return a string of characters similar to the following:</p>

<div className="bg-gray-900 p-2 rounded">
  {`{
    "16347a28f4e5edf39f4dceac60e2327931a25fdee1fb4b94b63eeacf0d5879e3-1",
   }`}
</div>

<p className="mb-4">The first long string is your collateralHash, while the last number is the collateralIndex.</p>

</div>
<div >

 
  <h2 className="text-2xl font-bold mb-4">Generate a BLS key pair</h2>
  <p className="mb-4">A public/private BLS key pair is required to operate a masternode. The private key is specified on the masternode itself, and allows 
  <br/>it to be included in the deterministic masternode list once a provider registration transaction with the corresponding public key has been created.</p>
  <p className="mb-4 font-semibold">Generate a BLS public/private keypair 
  <br/>in Diabase Core by clicking Tools {">"} Console and entering the following command:</p>
  
  <div className="bg-gray-900 p-2 rounded">
    bls generate
  </div>
  
  <p className="mb-4 text-red-600">These keys are NOT stored by the wallet and must be kept secure, similar to the value provided in the past by the masternode genkey command.</p>

  
  <h2 className="text-2xl font-bold mb-4 mt-8">Add the private key to your masternode configuration</h2>
  <p className="mb-4">The public key will be used in the following steps. The private key must be entered in the <span className="bg-gray-900 p-1 rounded">diabase.conf</span> file on the masternode. 
  <br/>This allows the masternode to watch the blockchain for relevant 
  <br/>Pro*Tx transactions, and will cause it to start serving as a masternode when the signed ProRegTx is broadcast by the owner (final step below). 
  <br/>Log in to your masternode using ssh or PuTTY and edit the configuration file as follows:</p>

</div>

<div >

 
  <h2 className="text-2xl font-bold mb-4">nano ~/.diabasecore/diabase.conf</h2>
  <p className="mb-4">The editor appears with the existing masternode configuration. Add or uncomment this line in the file, replacing the key with your BLS private key generated above:</p>
  
  <p className="mb-4">Press enter to make sure there is a blank line at the end of the file, then press Ctrl + X to close the editor and Y and Enter save the file. 
  <br/>Note that providing a <span className="bg-gray-900 p-1 rounded">masternodeblsprivkey</span> enables masternode mode, 
  <br/>which will automatically force the <span className="bg-gray-900 p-1 rounded">txindex=1</span>, <span className="bg-gray-900 p-1 rounded">peerbloomfilters=1</span>, 
  <br/>and <span className="bg-gray-900 p-1 rounded">prune=0</span> settings necessary to provide masternode service.</p>
  
  
  <h2 className="text-2xl font-bold mb-4 mt-8">Restart the Masternode</h2>
  <p className="mb-4">We now need to restart the masternode for this change to take effect. Enter the following commands, waiting a few seconds in between to give Diabase Core time to shut down:</p>
  
  <div className="bg-gray-900 p-2 rounded">
    ~/.diabasecore/diabase-cli stop
    sleep 15
    ~/.diabasecore/diabased
  </div>
  
  
  <h2 className="text-2xl font-bold mb-4 mt-8">Prepare the Transaction</h2>
  <p className="mb-4">We will now prepare the transaction used to register the masternode on the network.</p>

</div>


<div >

  
  <h2 className="text-2xl font-bold mb-4">Prepare a ProRegTx transaction</h2>
  <p className="mb-4">A pair of BLS keys for the operator were already generated above, and the private key was entered on the masternode. The public key is used in this transaction as the operatorPubKey.</p>
  
  
  <h3 className="text-xl font-semibold mb-3">Generate a new address</h3>
  <p className="mb-4">First, we need to get a new, unused address from the wallet to serve as the owner key address (ownerKeyAddr). This is not the same as the collateral address holding 1000 DIAC. Generate a new address as follows:</p>
  
  
  <h3 className="text-xl font-semibold mb-3">Generate more addresses</h3>
  <p className="mb-4">Do the same 2 more times, these addresses will be the votingKeyAddr and the payoutAddress. You will also need a feeSourceAddress. This can either be an existing address or a new address. This address must have funds to cover transaction fees.</p>
  
 
  <h3 className="text-xl font-semibold mb-3">Unlock your wallet</h3>
  <p className="mb-4">If your wallet is protected by a password, it must now be unlocked to perform the following commands. Unlock your wallet for 5 minutes:</p>
  
  <div className="bg-gray-900 p-4 rounded"><span>walletpassphrase yourSecretPassword 300</span></div>
  
  
  <h3 className="text-xl font-semibold mb-3">Prepare an unsigned ProRegTx</h3>
  <p className="mb-4">We will now prepare an unsigned ProRegTx special transaction using the <span>protx register_prepare</span> command. This command has the following syntax:</p>
  
  <div className="bg-gray-900 p-4 rounded"><span>protx register_prepare collateralHash collateralIndex ipAndPort ownerKeyAddr operatorPubKey votingKeyAddr operatorReward payoutAddress (feeSourceAddress)</span></div>
  
</div>


<div >

 
  <h2 className="text-2xl font-bold mb-4">Open a text editor</h2>
  <p className="mb-4">Open a text editor such as Notepad to prepare this command. Replace each argument to the command as outlined below:</p>
  
  
  <ul className="list-disc list-inside mb-4">
    <li><strong>collateralHash:</strong> The txid of the 1000 DIAC collateral funding transaction</li>
    <li><strong>collateralIndex:</strong> The output index of the 1000 DIAC funding transaction</li>
    <li><strong>ipAndPort:</strong> Masternode IP address and port, in the format x.x.x.x:yyyy</li>
    <li><strong>ownerKeyAddr:</strong> The new Diabase address generated above for the owner address</li>
    <li><strong>operatorPubKey:</strong> The BLS public key generated</li>
    <li><strong>votingKeyAddr:</strong> The new Diabase address generated above, or the address used for voting</li>
    <li><strong>operatorReward:</strong> The percentage of the block reward allocated to the operator as payment (typically 0)</li>
    <li><strong>payoutAddress:</strong> A new or existing Diabase address to receive the owner’s masternode rewards</li>
    <li><strong>feeSourceAddress:</strong> An address used to fund ProTx fee. PayoutAddress will be used if not specified.</li>
  </ul>
 
<h2 className="text-2xl font-bold mb-4">Should Return Similar To Below</h2>
<p className="mb-4">Running the command should return an output similar to the following:</p>

<div className="bg-gray-900 p-4 rounded md:text-sm">
  <span>
    {`{
      "tx": "030001000175c9d23...",
      "collateralAddress": "yjSPYvgUiAQ9AFj5tKFA8thFLoLBUxQERb",
      "signMessage": "yjZVt49WsQd6XSrPVAUGXtJccxviH9ZQpN|0|yfgxFhqrdDG15ZWKJAN6dQvn6dZdgBPAip|yfRaZN8c3Erpqj9iKnmQ9QDBeUuRhWV3Mg|ad5f82257bd00a5a1cb5da1a44a6eb8899cf096d3748d68b8ea6d6b10046a28e"
    }`}
  </span>
</div>


  <h2 className="text-2xl font-bold mb-4">Sign the ProRegTx transaction</h2>
  <p className="mb-4">We will now sign the content of the signMessage field using the private key for the collateral address as specified in collateralAddress. The command takes the following syntax:</p>
  
  <div className="bg-gray-900 p-4 rounded"><span>signmessage collateralAddress signMessage</span></div>

  
  <h2 className="text-2xl font-bold mb-4">Submit the signed message</h2>
  <p className="mb-4">We will now submit the ProRegTx special transaction to the blockchain to register the masternode. The command takes the following syntax:</p>

  <div className="bg-gray-900 p-4 rounded"><span>protx register_submit tx sig</span></div>

  
  <h2 className="text-2xl font-bold mb-4">Congratulations! Your masternode is now running.</h2>
  <p className="mb-4">Your masternode is now registered and will appear on the Deterministic Masternode List after the transaction is mined to a block. You can view this list on the Masternodes tab of the Diabase Core wallet.</p>
  
  <p>At this point, you can go back to your terminal window and monitor your masternode by entering <span>~/.diabasecore/diabase-cli masternode status</span> or using the Get status function in DMT.</p>
  
  <p>You can safely log out of your server by typing <span>exit</span>.</p>

</div>

    </>
  ) },
];








export const DocumentationMasternode: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<Section>(sections[0]);

  const handleSectionClick = (section: Section) => {
    setSelectedSection(section);
  };

  return (
   
    <div className="flex flex-col md:flex-row h-screen bg-opacity-40 bg-black backdrop-blur text-white">
  <div className="md:w-1/4 w-full bg-slate-800 p-4 "> {/* Largeur ajustée ici */}
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
  <div className="flex-1 p-4 md:p-8 bg-slate-700 backdrop-blur-md ">
    <h2 className="text-lg md:text-xl font-semibold mb-4 text-green-400">{selectedSection.title}</h2>
    <div 
      className="w-full p-4 bg-gray-800 text-white border border-gray-700 rounded-2xl text-sm md:text-lg leading-relaxed"
    >
      {selectedSection.content}
    </div>
  </div>
</div>


  
  );
};

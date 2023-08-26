import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import TabsUnstyled from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, index, value, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={false} // On désactive le masquage
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className='w-full h-full overflow-y-auto text-justify text-black'
      {...other}
    >
      {value >= index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export function MasternodeGuide() {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Tabs 
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <TabsUnstyled label="Introduction" {...a11yProps(0)}  />

        <TabsUnstyled label="Send the collateral" {...a11yProps(1)} />
        <TabsUnstyled label="Sending from Diabase Core wallet" {...a11yProps(2)} />
        <TabsUnstyled label="Setting up the Masternode" {...a11yProps(3)} />
        <TabsUnstyled label="Register your masternode" {...a11yProps(4)} />
       
      </Tabs>
      <Box sx={{ p: 3, width: '100%'}}>
      <TabPanel value={value} index={0}
      >
        <div className="flex flex-col justify-center items-center">
        Setting up a masternode on the Diabase Blockchain can be a rewarding way to contribute to the network's operations while earning rewards. This guide will walk you through the process of setting up your own Diabase Blockchain masternode, from preparing the necessary requirements to configuring and running your node.

Note: This guide assumes you have basic knowledge of Linux and command-line interfaces. If you're new to these concepts, consider seeking assistance or educating yourself further before proceeding.

 

Requirements:

Technical Knowledge: Basic understanding of Linux commands and terminal usage.

Hardware: A dedicated server or Virtual Private Server (VPS) meeting the minimum requirements:

CPU: Multi-core processor (2 cores or more)

RAM: At least 2GB (more recommended)

Storage: 20GB of free disk space (SSD recommended)

Network: Stable and high-speed internet connection

Diabase Blockchain (DIAC) Coins: 1000 of Diabase Blockchain coins DIAC to use as collateral for your masternode.

Static IP Address: Obtain a static IP address for your VPS or server.

This documentation describes the commands as if they were entered in the Diabase GUI by opening the console from Window {'>'} Console, but the same result can be achieved on a masternode by entering the same commands and adding the prefix ~/.diabasecore/diabase-cli to each command.
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      A Diabase address with a single unspent transaction output (UTXO) of exactly 1000 DIAC is required to operate a masternode. Once it has been sent, various keys regarding the transaction must be extracted for later entry in a configuration file and registration transaction as proof to write the configuration to the blockchain so the masternode can be included in the deterministic list.

     A masternode can be registered from the official Diabase wallet or core cli.
      </TabPanel>
      <TabPanel value={value} index={2}>
      Open Diabase wallet and wait for it to synchronize with the network.

Click Window {'>'} Console to open the console. Type the following command into the console to generate a new Diabase address for the collateral:

getnewaddress

Take note of the collateral address, since we will need it later. The next step is to secure your wallet (if you have not already done so). First, encrypt the wallet by selecting Settings {'>'} Encrypt wallet. You should use a strong, new password that you have never used somewhere else. Take note of your password and store it somewhere safe or you will be permanently locked out of your wallet and lose access to your funds. Next, back up your wallet file by selecting File {'>'} Backup Wallet. Save the file to a secure location physically separate to your computer, since this will be the only way you can access our funds if anything happens to your computer.

Now send exactly 1000 DIAC in a single transaction to the new address you generated in the previous step. This may be sent from another wallet, or from funds already held in your current wallet. Once the transaction is complete, view the transaction in a blockchain explorer by searching for the address. You will need 15 confirmations before you can register the masternode, but you can continue with the next step at this point.
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="flex flex-col justify-center items-center text-black">
      The following assumes you have a fully function VPS or server with Diabase core installed and sync’d.

The Diabase Core can be built or pre compiled binaries can be used. After initial sync the core should be stopped and following done.

Create a configuration file using the following command:

nano ~/.diabasecore/diabase.conf

An editor window will appear. We now need to create a configuration file specifying several variables. Copy and paste the following text to get started, then replace the variables specific to your configuration as follows:
<br/>
<br/>#----

<br/>rpcuser=XXXXXXXXXXXXX

<br/>rpcpassword=XXXXXXXXXXXXXXXXXXXXXXXXXXXX

<br/>rpcallowip=127.0.0.1

<br/>#----

<br/>listen=1

<br/>server=1

<br/>daemon=1

<br/>#----

<br/>#masternodeblsprivkey=

<br/>externalip=XXX.XXX.XXX.XXX

<br/>#----

<br/>Replace the fields marked with XXXXXXX as follows:

<br/>rpcuser: enter any string of numbers or letters, no special characters allowed

rpcpassword: enter any string of numbers or letters, no special characters allowed

externalip: this is the IP address of your VPS

Leave the masternodeblsprivkey field commented out for now. 

 

Press Ctrl + X to close the editor and Y and Enter save the file. You can now start running Diabase core on the masternode to begin synchronization with the blockchain:

~/.diabasecore/diabased

You will see a message reading Diabase server starting.

We now need to wait for 15 confirmations of the collateral transaction to complete, and wait for the blockchain to finish synchronizing on the masternode. You can use the following commands to monitor progress:

~/.diabasecore/diabase-cli mnsync status

When synchronization is complete, you should see the following response:

<pre>
    {`{
  "AssetID" : 999,
  "AssetName": "MASTERNODE_SYNC_FINISHED",
  "AssetStartTime": 1691764651,
  "Attempt": 0,
  "IsBlockchainSynced": true,
  "IsSynced": true
}`}
  </pre>

Continue with the next step to construct the ProTx transaction required to enable your masternode.
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="flex flex-col justify-center items-center text-black">
        Identify the funding transaction

If you used an address in Diabase Core wallet for your collateral transaction, you now need to find the txid of the transaction. Click Window {'>'} Console and enter the following command:


masternode outputs


This should return a string of characters similar to the following:


  <pre>
    {`{
"16347a28f4e5edf39f4dceac60e2327931a25fdee1fb4b94b63eeacf0d5879e3-1"
}`}
  </pre>




The first long string is your collateralHash, while the last number is the collateralIndex.

 

Generate a BLS key pair

A public/private BLS key pair is required to operate a masternode. The private key is specified on the masternode itself, and allows it to be included in the deterministic masternode list once a provider registration transaction with the corresponding public key has been created.

Generate a BLS public/private keypair in Diabase Core by clicking Tools {'>'} Console and entering the following command:

bls generate

 

These keys are NOT stored by the wallet and must be kept secure, similar to the value provided in the past by the masternode genkey command.

 

Add the private key to your masternode configuration

The public key will be used in the following steps. The private key must be entered in the diabase.conf file on the masternode. This allows the masternode to watch the blockchain for relevant Pro*Tx transactions, and will cause it to start serving as a masternode when the signed ProRegTx is broadcast by the owner (final step below). Log in to your masternode using ssh or PuTTY and edit the configuration file as follows:

 

nano ~/.diabasecore/diabase.conf

 

The editor appears with the existing masternode configuration. Add or uncomment this line in the file, replacing the key with your BLS private key generated above:

Press enter to make sure there is a blank line at the end of the file, then press Ctrl + X to close the editor and Y and Enter save the file. Note that providing a masternodeblsprivkey enables masternode mode, which will automatically force the txindex=1, peerbloomfilters=1, and prune=0 settings necessary to provide masternode service. We now need to restart the masternode for this change to take effect. Enter the following commands, waiting a few seconds in between to give Diabase Core time to shut down:

 

~/.diabasecore/diabase-cli stop

sleep 15

~/.diabasecore/diabased

 

We will now prepare the transaction used to register the masternode on the network.

 

Prepare a ProRegTx transaction

A pair of BLS keys for the operator were already generated above, and the private key was entered on the masternode. The public key is used in this transaction as the operatorPubKey.

First, we need to get a new, unused address from the wallet to serve as the owner key address (ownerKeyAddr). This is not the same as the collateral address holding 1000 DIAC. Generate a new address as follows:

 

Do the same 2 more time, these addresses will be the votingKeyAddr, and payoutAddress. You will also need a feeSourceAddress. This can either be an existing address or a new address. This address must have funds to cover transaction fees.

If your wallet is protected by a password, it must now be unlocked to perform the following commands. Unlock your wallet for 5 minutes:

walletpassphrase yourSecretPassword 300

 

We will now prepare an unsigned ProRegTx special transaction using the protx register_prepare command. This command has the following syntax:

protx register_prepare collateralHash collateralIndex ipAndPort ownerKeyAddr

  operatorPubKey votingKeyAddr operatorReward payoutAddress (feeSourceAddress)

 

Open a text editor such as notepad to prepare this command. Replace each argument to the command as follows:

collateralHash: The txid of the 1000 DIAC collateral funding transaction

collateralIndex: The output index of the 1000 DIAC funding transaction

ipAndPort: Masternode IP address and port, in the format x.x.x.x:yyyy

ownerKeyAddr: The new Diabase address generated above for the owner address

operatorPubKey: The BLS public key generated

votingKeyAddr: The new Diabase address generated above, or the address used for voting

operatorReward: The percentage of the block reward allocated to the operator as payment (typically 0)

payoutAddress: A new or existing Diabase address to receive the owner’s masternode rewards

feeSourceAddress: An address used to fund ProTx fee. payoutAddress will be used if not specified.

Should return similar to below

<pre>

{`{

  "tx": "030001000175c9d23c2710798ef0788e6a4d609460586a20e91a15f2097f56fc6e007c4f8e0000000000feffffff01a1949800000000001976a91434b09363474b14d02739a327fe76e6ea12deecad88ac00000000d1010000000000e379580dcfea3eb6944bfbe1de5fa2317932e260acce4d9ff3ede5f4287a34160100000000000000000000000000ffff2d4ce6ef4e1fd47babdb9092489c82426623299dde76b9c72d9799f20ed1538e28259ff80044982372519a2e6e4cdedb01c96f8f22e755b2b3124fbeebdf6de3587189cf44b3c6e7670ed1935246865dce1accce6c8691c8466bd67ebf1200001976a914fef33f56f709ba6b08d073932f925afedaa3700488acfdb281e134504145b5f8c7bd7b47fd241f3b7ea1f97ebf382249f601a0187f5300",

  "collateralAddress": "yjSPYvgUiAQ9AFj5tKFA8thFLoLBUxQERb",

  "signMessage": "yjZVt49WsQd6XSrPVAUGXtJccxviH9ZQpN|0|yfgxFhqrdDG15ZWKJAN6dQvn6dZdgBPAip|yfRaZN8c3Erpqj9iKnmQ9QDBeUuRhWV3Mg|ad5f82257bd00a5a1cb5da1a44a6eb8899cf096d3748d68b8ea6d6b10046a28e"

}`}
</pre>
 

Next we will use the collateralAddress and signMessage fields to sign the transaction, and the output of the tx field to submit the transaction.

 

Sign the ProRegTx transaction

We will now sign the content of the signMessage field using the private key for the collateral address as specified in collateralAddress. The command takes the following syntax:

signmessage collateralAddress signMessage

 

Should return similar to below

II8JvEBMj6I3Ws8wqxh0bXVds6Ny+7h5HAQhqmd5r/0lWBCpsxMJHJT3KBcZ23oUZtsa6gjgISf+a8GzJg1BfEg=

Submit the signed message

We will now submit the ProRegTx special transaction to the blockchain to register the masternode. This command must be sent from a Diabase Core wallet holding a balance on either the feeSourceAddress or payoutAddress, since a standard transaction fee is involved. The command takes the following syntax:

protx register_submit tx sig

 

tx: The serialized transaction previously returned in the tx output field from the protx register_prepare command

sig: The message signed with the collateral key from the signmessage command

Should return similar to below

aba8c22f8992d78fd4ff0c94cb19a5c30e62e7587ee43d5285296a4e6e5af062

 

Your masternode is now registered and will appear on the Deterministic Masternode List after the transaction is mined to a block. You can view this list on the Masternodes tab of the Diabase Core wallet.

At this point you can go back to your terminal window and monitor your masternode by entering ~/.diabasecore/diabase-cli masternode status or using the Get status function in DMT.

At this point you can safely log out of your server by typing exit.

Congratulations! Your masternode is now running.

        </div>
       
      </TabPanel>
    
    </Box>
    </Box>
  );
}

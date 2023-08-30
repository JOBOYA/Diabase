import React, { useRef, useState, useEffect } from 'react';
import Master from '../assets/Diabase-master.svg';
import videoSource from '../assets/Diabase-private.mp4';
import Transaction from '../assets/Design-send.svg';
import server from '../assets/Diabase-server.svg';
//import {Cpu} from '../assets/Cpu.svg';
//import Touch  from '../assets/Touch.svg';
import { motion } from 'framer-motion';


export const Techno = () => {   
  const sectionRef1 = useRef<HTMLElement | null>(null);
  const [inView1, setInView1] = useState(false);
  const sectionRef2 = useRef<HTMLElement | null>(null);
  const [inView2, setInView2] = useState(false);
  const sectionRef3 = useRef<HTMLElement | null>(null);
  const [inView3, setInView3] = useState(false);
  const sectionRef4 = useRef<HTMLElement | null>(null);
  const [inView4, setInView4] = useState(false);
  
  useEffect(() => {
    const observeSection = (
      sectionRef: React.RefObject<HTMLElement>,
      setInViewFunction: (value: boolean) => void
    ) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInViewFunction(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    };
  
    // Appel de la fonction d'observation pour chaque section avec les références et les fonctions d'état correspondantes
    const unobserveSection1 = observeSection(sectionRef1, setInView1);
    const unobserveSection2 = observeSection(sectionRef2, setInView2);
    const unobserveSection3 = observeSection(sectionRef3, setInView3);
    const unobserveSection4 = observeSection(sectionRef4, setInView4);
  
    return () => {
      unobserveSection1();
      unobserveSection2();
      unobserveSection3();
      unobserveSection4();
    };
  }, []);



    return (
        <>


        <section id='techno'>
        <h2 className="text-3xl md:text-6xl text-center font-bold mt-10 md:mt-20 md:m-20 text-slate-800">TECH</h2>
  <motion.section
    className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-4 sm:mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden lg:flex lg:flex-row-reverse" 
    
    ref={sectionRef1}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView1 ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
   <img
  src={Master}
  alt="Blockchain"
  className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover lg:mr-12 lg:mt-[-30px]" // Ajustements ici
/>


    <div className="flex-grow w-full px-4 lg:mr-12 md:w-[calc(60% - 2rem)] md:px-0 overflow-auto"> 
   
      <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">Masternodes</h1>
      <div className="prose max-w-none text-gray-700">
     
<br/>Masternodes are an essential component of the Diabase Blockchain, serving multiple purposes that contribute to its functionality, security, and advanced features. They provide services beyond those of regular nodes, enhancing the overall ecosystem. Here's how masternodes work in Diabase:

<br/>Collateral Requirement: To become a masternode, an operator needs to hold a predetermined amount of Diabase as collateral. This collateral demonstrates the operator's commitment to the network and its security.

<br/>Enhanced Services: Masternodes enable unique features like InstantSend and PrivateSend. InstantSend offers near-instant transaction confirmation, while PrivateSend enhances transaction privacy. These features differentiate Diabase from other cryptocurrencies and enhance its usability.

<br/>Quorum for Consensus: For features like InstantSend, a subset of masternodes forms a quorum. This quorum's consensus is needed to validate and confirm transactions.

<br/>Transaction Mixing (CoinJoin): In the case of PrivateSend, masternodes facilitate the CoinJoin process, where multiple transactions are mixed together for enhanced privacy. Masternodes help break the transaction linkages and improve anonymity.

<br/>Decentralization: Diabase aims for a more decentralized network by allowing anyone to run a masternode. This decentralization of decision-making and service provision helps prevent centralization of power.

<br/>Incentives for Operators: Masternode operators receive rewards for their services, paid in Diabase. This incentive structure encourages participation and ensures that masternode operators are invested in the network's success.

<br/>Reliable Network: Masternodes enhance the network's reliability by providing continuous and high-performance services. Their stable operation contributes to the overall health of the network.

<br/>Security Measures: Masternodes require collateral, reducing the likelihood of malicious actors attempting to control the network. This collateral requirement aligns with the network's security goals.
<br/>Support for DApps: As Diabase evolves, masternodes may play a role in supporting decentralized applications (DApps) and other innovative services, expanding the network's capabilities.
<br/>Masternodes play a pivotal role in the Diabase Blockchain by offering advanced services, participating in consensus, ensuring transaction privacy, and promoting network security and decentralization. They are an integral part of Diabase's ecosystem, contributing to its uniqueness and versatility within the cryptocurrency space.
</div>
    </div>  

  </motion.section>
</section>


<section>
  <motion.section
    className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-4 sm:mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden lg:flex lg:flex-row" // Modifié ici
    
    ref={sectionRef2}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView2 ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
    <video className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover"
      autoPlay
      muted
      loop>
      <source src={videoSource} type="video/mp4" />
    </video>

    <div className="flex-grow w-full px-4 lg:mr-12 md:w-[calc(60% - 2rem)] md:px-0 overflow-auto"> 
      <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">PrivateSend</h1>
      <div className="prose max-w-none text-gray-700">
     
<br/>PrivateSend is a unique privacy feature in the Diabase Blockchain that offers users enhanced transaction anonymity. It achieves this by utilizing a technique called CoinJoin, which combines multiple transactions from different users into a single, indistinguishable transaction. Here's a step-by-step explanation of how PrivateSend works in the Diabase:

<br/>Input Selection: A user initiates a PrivateSend transaction by selecting the funds they want to send privately. These funds are referred to as the "inputs." The user's wallet then breaks down these inputs into specific denominations, typically multiples of 0.01 Diabase.

<br/>Collateral Locking: To participate in PrivateSend, users are required to lock a specific amount of Diabase as collateral. This collateral helps ensure the integrity of the mixing process and prevents malicious activities.

<br/>Masternode Mixing: Masternodes, special nodes within the Diabase network that provide additional services, play a pivotal role in the PrivateSend process. These masternodes coordinate the mixing of funds. Users send their selected inputs to the masternodes, which hold them temporarily.

<br/>Transaction Mixing (CoinJoin): In the case of PrivateSend, masternodes facilitate the CoinJoin process, where multiple transactions are mixed together for enhanced privacy. Masternodes help break the transaction linkages and improve anonymity.

<br/>Multiple Rounds: To enhance privacy, PrivateSend transactions can go through multiple mixing rounds. In each round, the funds are mixed again with inputs from different users, further obfuscating the transaction history.

<br/>Output Distribution: Once the mixing rounds are complete, the masternodes create new outputs, or "outputs of the CoinJoin," which represent the mixed funds. These outputs are then sent to the specified recipient addresses.

<br/>Final Transactions: The recipient receives the mixed funds, and from an outsider's perspective, the source of these funds is virtually untraceable due to the blending of transactions.

<br/>Decentralization and Trustlessness: The PrivateSend process is designed to be decentralized and trustless. Masternodes do not have the ability to know the original source and destination of the funds they are mixing, ensuring a high level of privacy and security.
<br/>Diabase's PrivateSend leverages the CoinJoin technique and the active participation of masternodes to mix and anonymize transactions. By breaking the link between input and output addresses, PrivateSend enhances transaction privacy and confidentiality, making it challenging for external observers to trace the flow of funds on the Diabase Blockchain.

</div>
    </div>  

  </motion.section>
</section>


<section>
  <motion.section
    className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-4 sm:mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden lg:flex lg:flex-row-reverse" 
    
    ref={sectionRef3}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView3 ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
   <img
  src={Transaction}
  alt="Blockchain"
  className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover lg:mr-12 lg:mt-[-30px]" // Ajustements ici
/>


    <div className="flex-grow w-full px-4 lg:mr-12 md:w-[calc(60% - 2rem)] md:px-0 overflow-auto"> 
      <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">InstantSend</h1>
      <div className="prose max-w-none text-gray-700">
     
<br/>InstantSend is a feature within the Diabase Blockchain that enables near-instant transaction confirmation, allowing users to have faster and more reliable transactions. This feature is particularly beneficial for use cases where quick confirmation times are essential, such as point-of-sale purchases. Here's how InstantSend works in Diabase:

<br/>Transaction Locking: When a user initiates an InstantSend transaction, they indicate their intention to use InstantSend. The Diabase Blockchain then temporarily locks the inputs of the transaction, reserving the funds for the intended recipient.

<br/>Quorum Selection: To validate an InstantSend transaction, a quorum of masternodes is involved. A quorum is a subset of the total masternode network that collaboratively confirms the transaction. This quorum is selected randomly from a larger pool of masternodes.

<br/>Locking Inputs by Masternodes: The selected quorum of masternodes locks the inputs of the transaction, ensuring that the funds cannot be spent in any other way until the transaction is confirmed. This step prevents double-spending and provides security against potential fraud.

<br/>Network Consensus: The locked inputs and the details of the transaction are broadcasted to the network for consensus. Other nodes on the network can see that the inputs are locked, indicating that the transaction is in the process of being confirmed through InstantSend.

<br/>Confirmation: The masternodes in the selected quorum quickly validate the transaction and reach consensus. If the consensus is achieved, the transaction is confirmed as valid and is included in a block. This confirmation typically occurs within a matter of seconds.

<br/>Finalization: Once the transaction is confirmed through InstantSend, the recipient can be confident that the transaction is irreversible. The locked inputs prevent any potential attempt to double-spend the same funds.

<br/>User Experience: From the user's perspective, the transaction is confirmed almost instantly, offering a seamless and efficient payment experience.

<br/>Diabase's InstantSend leverages masternodes and a quorum-based consensus mechanism to lock and confirm transactions quickly. By ensuring the security and irreversibility of transactions within seconds, InstantSend enhances the usability of Diabase for scenarios requiring rapid transaction confirmation, such as retail purchases and instant transfers.

</div>
    </div>  

  </motion.section>
</section>


<section>
  <motion.section
    className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-4 sm:mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden lg:flex lg:flex-row" // Modifié ici
    
    ref={sectionRef4}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView4 ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
   <img 
  src={server}
  alt="Blockchain"
  className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover lg:mr-12 lg:mt-[-30px]" // Ajustements ici
/>

    <div className="flex-grow w-full px-4 lg:mr-12 md:w-[calc(60% - 2rem)] md:px-0 overflow-auto"> 
      <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">Dark Gravity Wave (DGW)</h1>
      <div className="prose max-w-none text-gray-700">
     
<br/>Dark Gravity Wave (DGW) is a difficulty adjustment algorithm used in the Diabase Blockchain to ensure stable block times and maintain consistent mining incentives. It's designed to counteract the rapid changes in hash rate that can occur due to fluctuations in mining power. Here's how Dark Gravity Wave works in Diabase:

<br/>Target Block Time: The Diabase Blockchain aims for a consistent block time, which is the time taken to mine a new block. The target block time is typically set at 1.5 minutes.

<br/>Difficulty Adjustment: The Dark Gravity Wave algorithm adjusts the difficulty of mining new blocks based on the recent fluctuations in hash rate. If the network's hash rate increases, the algorithm increases the difficulty to ensure that blocks are not mined too quickly. Conversely, if the hash rate decreases, the algorithm decreases the difficulty to prevent excessively long block times.

<br/>Smooth Adjustment: One of the key features of DGW is its ability to adjust the difficulty smoothly and quickly. This is achieved by considering the past block times and calculating a weighted average to determine the appropriate difficulty adjustment. It takes into account the previous 24 blocks, adjusting for any sudden spikes or drops in hash rate.

<br/>Rapid Adaptation: When a sudden change in hash rate occurs, DGW responds rapidly to bring the block times back to the target of 1.5 minutes. This quick adaptation prevents the network from becoming too slow or too fast due to abrupt changes in mining power.

<br/>Balancing Mining Incentives: By maintaining stable block times, DGW ensures that mining incentives remain consistent for miners. Miners receive a predictable number of rewards over time, preventing situations where mining becomes unprofitable due to extreme changes in block times.

<br/>Network Stability: The consistent block times achieved by DGW contribute to the overall stability and reliability of the Diabase Blockchain. Transactions are confirmed at a predictable rate, providing a smoother user experience.

<br/>Dark Gravity Wave is a difficulty adjustment algorithm in the Diabase Blockchain that helps maintain stable block times by quickly and smoothly adapting the mining difficulty based on changes in hash rate. This algorithm ensures that mining incentives remain balanced and the network operates reliably under varying conditions.



</div>
    </div>  

  </motion.section>
</section>



        </>
    );
}


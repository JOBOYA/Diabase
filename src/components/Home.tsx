import { motion } from "framer-motion";
import videoSource from '../assets/Diabase-video.mp4';
import videoSource2 from '../assets/Happy.mp4';
import Private from '../assets/PrivatSend.png';
import MaxSuply from '../assets/MaxSupply.png';
import YourImagePathHere from '../assets/Search.png';
import Master from '../assets/Master.svg';
import { useEffect, useRef, useState } from 'react';
import { BounceLoader } from "react-spinners";
import Typewriter from 'typewriter-effect';
import '../index.css'

//TODO  Modif section masternode


export const Header = () => {
  const sectionRef3 = useRef<HTMLElement | null>(null);
  const sectionRef4 = useRef<HTMLElement | null>(null);
  const [inView3, setInView3] = useState(false);
  const [inView4, setInView4] = useState(false);
  const [hasBeenInView4, setHasBeenInView4] = useState(false);
  const [hasBeenInView3, setHasBeenInView3] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(-1);

  const texts = [
    "First block mined August 4th, 2023",
    "X11 PoW algorithm, CPU / GPU / ASIC minable",
    "90 second block time (960 blocks a day, 350,400 blocks a year)",
    "ZERO Premine (first 1000 blocks held in dev fund for exchange listing)",
    "5 coin block reward (80% miners, 20% masternodes) decreases by 50% each year",
    "3,600,000 total coin supply",
    "Block maturity 101",
    "Confirmations 6",
    "Difficulty Adjust, \"Kimoto Gravity Well\"(KGW) / \"Dark Gravity Wave\"(DGW)"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingDone(true);
    }, 4000); // Durée de l'effet de dactylographie

    return () => clearTimeout(timer); // Effacer le timer si le composant est démonté
  }, []);
   // La dépendance assure que l'effet n'est exécuté que lorsque inView4 change

   useEffect(() => {
    if (inView4) {
      setHasBeenInView4(true);
    }
  }, [inView4]);

  useEffect(() => {
    if (inView3) {
      setHasBeenInView3(true);
    }
  }, [inView3]);
  
  

   useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prevIndex) => {
        if (prevIndex >= texts.length - 1) {
          clearInterval(timer); // Arrête le minuteur si nous avons atteint le dernier élément
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 1500);
  
    return () => clearInterval(timer); // Nettoyer le minuteur lors du démontage du composant
  }, [texts.length]);
  

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

    const unobserveSection3 = observeSection(sectionRef3, setInView3);
    const unobserveSection4 = observeSection(sectionRef4, setInView4);

    return () => {
      unobserveSection3();
      unobserveSection4();
    };
  }, []);



  
  // Variants for fade in animation
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] } }
  };

  
  return (
    <>
    <section>
    <motion.header 
   className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-4 sm:mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden"

    variants={fadeInUp} 
    initial="initial"
    animate="animate"
>

      <div className="lg:flex">
        <video 
          className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover mr-12"
          autoPlay 
          muted
        >
          <source src={videoSource} type="video/mp4" />
        </video>

        <div className="flex-grow w-full px-4 md:w-[calc(50% - 2rem)] md:px-0">
            <h1 className="font-serif text-2xl md:text-3xl md:mt-2 lg:text-4xl mb-4 text-gray-900">What is Diabase Blockchain</h1>
          
          <div className="prose max-w-none md:mt-16 text-gray-700">
          <p className="font-medium text-sm sm:text-md md:text-lg lg:text-xl text-gray-700 overflow-auto">
    Introducing Diabase Blockchain a layer one blockchain, the next evolution in digital wealth preservation. Built upon the robust and secure X11 algorithm, Diabase offers unparalleled protection for your assets. With a unique focus on being a store of wealth, Diabase provides stability and long-term value appreciation.
    <br /><br />
    Empowered by a network of masternodes, Diabase ensures swift and secure transactions, maintaining the integrity of your holdings. These masternodes contribute to network security, enhancing decentralization and ensuring fast private transactions.
    <br /><br />
    Whether you're a seasoned investor looking to diversify your portfolio or someone new to the world of cryptocurrencies, Diabase offers a reliable and trusted solution for safeguarding your wealth. Join us in shaping the future of financial sovereignty with Diabase - where security meets prosperity.
</p>

            </div>
        </div>
      </div>
    </motion.header>
    </section>

    <h1 className="py-16 font-serif text-2xl md:text-3xl lg:text-7xl flex justify-center text-gray-900">
      {!typingDone ? (
        <Typewriter
          options={{
            strings: ['Diabase Blockchain Features'],
            autoStart: true,
          }}
        />
      ) : (
        'Diabase Blockchain Features'
      )}
    </h1>

{/**Section 2 */}
<section>
  <motion.header
   className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-4 sm:mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden"

    variants={fadeInUp}
    initial="initial"
    animate="animate"
  >
    <div className="lg:flex  text-justify px-4"> 
      <div className="flex-grow w-full md:mt-16 px-4 md:w-[calc(50% - 2rem)] md:px-0">
        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">Proof of Work (PoW) mining</h1>
        <div className="prose max-w-none text-gray-700 text-sm sm:text-md md:text-lg lg:text-xl"> 
          <div className="font-medium text-sm sm:text-md md:text-lg lg:text-lg text-gray-700 mr-4">
 
<br/>The X11 algorithm, introduced in 2013, remains relevant in 2023 as a cornerstone of energy-efficient and secure blockchain technology. Its innovative approach involves a chain of eleven different cryptographic hashing functions.
<br/>In a time when environmental concerns surrounding blockchain's energy consumption are paramount, X11's design stands out for its efficiency. By utilizing a diverse array of algorithms, it maintains a high level of security while consuming significantly less power compared to traditional proof-of-work alternatives.
<br/>Furthermore, X11's continued relevance can be attributed to its ability to adapt to changing technological landscapes. As the cryptocurrency industry evolves, X11's emphasis on democratizing mining power and preventing centralization remains pertinent.
<br/>The X11 algorithm's energy efficiency, robust security, and adaptability make it a relevant and valuable component of the blockchain ecosystem in 2023.


      </div>
    </div>
  </div>
  <video className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover "
    autoPlay
    muted
    loop>
    <source src={videoSource2} type="video/mp4" />
  </video>
</div>

        </motion.header>
      </section>


    {/**Section Masternode  */}
    <section>
    <motion.section
   className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-4 sm:mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden lg:flex"

    ref={sectionRef3}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView3 || hasBeenInView3 ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
    <img
      src={Master}
      alt="Masternode"
      className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover lg:ml-12"
    />


<div className="lg:flex text-justify px-4"> 
      <div className="flex-grow w-full md:mt-16 px-4 md:w-[calc(50% - 2rem)] md:px-0">
      <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">Diabase Masternodes</h1>
        <div className="prose max-w-none text-gray-700 text-sm sm:text-md md:text-lg lg:text-xl"> 
          <div className="font-medium text-sm sm:text-md md:text-lg lg:text-lg text-gray-700 mr-4">
        <br/>  Masternodes are particularly useful in the Diabase Blockchain due to their integral role in enabling advanced features and maintaining the network's efficiency and security. In the Diabase ecosystem:

        <br/>     InstantSend Transactions

        <br/>    PrivateSend Transactions

        <br/>    Network Security

        <br/>    Incentive Structure

        <br/>   Scalability and Efficiency.

        <br/>     See our Technologies section for more in depth breakdown of the role masternodes play in the Diabase Blockchain
        </div>
      </div>
    </div>
  </div>
  </motion.section>
</section>



{/**Section 3 */}
<section>
    <motion.section
        className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-4 sm:mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden"
        ref={sectionRef3}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView3 ? 1 : 0 }}
        transition={{ duration: 1 }}
    >
        <div className="lg:flex lg:flex-row-reverse">
            <img 
                src={Private}
                alt="CoinJoin"
                className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover"
            />

<div className="flex-grow w-full px-4 md:mt-16 md:ml-12 md:w-[calc(50% - 2rem)] md:px-0">
    <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">CoinJoin (PrivateSend)</h1>
    <div className="prose max-w-none text-gray-700">
        <p className="font-medium text-sm sm:text-md md:text-lg lg:text-xl text-gray-700 overflow-auto">
            Diabase's CoinJoin feature, known as PrivateSend, is a privacy-enhancing mechanism that enables users to enhance the anonymity of their transactions. It works by combining multiple transactions from different users into a single transaction, making it difficult to trace the source and destination of funds. 
            <br /><br />
            See our Technologies section for more in depth breakdown of CoinJoin and how it works inside the Diabase Blockchain.
        </p>
    </div>
</div>

        </div>
    </motion.section>
</section>

{/**Section 4 */}

<section>
  <motion.section
    className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-4 sm:mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden lg:flex"

    ref={sectionRef4}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView4 ? hasBeenInView4 ? 1 : 0 : 0 }}
    transition={{ duration: 1 }}
  >
    <img
      src={YourImagePathHere}
      alt="Blockchain"
      className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover lg:ml-12"
    />

    <div className="flex-grow w-full px-4 lg:ml-12 md:w-[calc(50% - 2rem)] md:px-0">
      <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">Blockchain Specifications</h1>
      <div className="prose max-w-none text-gray-700">
        <div className="font-medium text-sm sm:text-md md:text-lg lg:text-xl text-gray-700">
          {texts.map((text, index) => (
            <div key={index} className={`flex items-center space-x-2 mb-2 ${index <= visibleIndex ? 'fade-in visible' : 'fade-in'}`}>
              <BounceLoader size={15} color="#36d7b7" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
</section>


<section>
  <motion.section
    className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-4 sm:mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden lg:flex lg:flex-row-reverse" 
    
    ref={sectionRef4}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView4 ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
    <img
      src={MaxSuply}
      alt="Blockchain"
      className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover lg:mr-12" 
    />

    <div className="flex-grow w-full px-4 lg:mr-12 md:w-[calc(60% - 2rem)] md:px-0 overflow-auto"> 
      <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">Purpose of Diabase Blockchain with Low Max Supply</h1>
      <div className="prose max-w-none text-gray-700">
      <h2 className="font-serif text-2xl md:text-3xl lg:text-2xl mb-4 text-gray-900">A Private Store of Wealth</h2>
<br/>The Diabase blockchain, characterized by its low maximum supply, strategic early emission schedule, and privacy features, has a multifaceted purpose as a sophisticated store of wealth. Designed to provide individuals and institutions with a secure, private, and inflation-resistant avenue for wealth preservation and growth, Diabase leverages its unique attributes to create a novel solution in the digital financial landscape.

<br/>Scarcity and Value Preservation: At the heart of Diabase's purpose is its low maximum supply, a feature inspired by the scarcity principle of precious resources like gold. This scarcity inherently creates value, as the finite supply means that each unit of the native Diabase coin becomes increasingly valuable with growing demand. This quality positions Diabase as a potential store of wealth, where the value of holdings can appreciate over time, mitigating the erosive effects of inflation.

<br/>Inflation Hedge and Economic Stability: One of Diabase's core purposes is to offer an effective hedge against inflation, a concern that plagues traditional fiat currencies. The fixed supply of Diabase's coins ensures that their value is less susceptible to depreciation over time, offering a form of economic stability in an environment characterized by fluctuating fiat currencies.

<br/>Security and Privacy: Diabase's blockchain is built upon robust security and privacy features, ensuring the confidentiality and integrity of transactions and data. This privacy aspect enhances the appeal of Diabase as a store of wealth, as users can securely transact and hold assets without exposing sensitive financial information. The blockchain's privacy features are integral to its goal of providing a discreet and secure method of preserving wealth.

<br/>Early Emission Schedule for Community Engagement: The strategic early emission schedule further complements Diabase's purpose as a store of wealth. By initiating the issuance of coins in the early stages, Diabase aims to engage a dedicated community of early adopters and supporters. This approach not only stimulates interest and demand but also lays the foundation for a thriving ecosystem. Early adopters who participate during this phase can benefit from acquiring coins at relatively lower prices, potentially accruing greater value over time.

<br/>Long-Term Investment Potential: The interplay between the low max supply, early emission schedule, and privacy features positions Diabase as a compelling long-term investment. As the ecosystem grows and adoption increases, the scarcity-driven appreciation in value can yield significant returns for those who hold onto their Diabase coins. This investment potential bolsters Diabase's standing as a store of wealth in the digital realm.

<br/>Diverse Ecosystem and Real-World Use Cases: Diabase aims to create a diverse ecosystem with real-world use cases beyond wealth preservation. Its blockchain will support in the future smart contracts, decentralized applications (DApps), and interoperability with other blockchains. These features broaden the coin's utility, contributing to its adoption and demand, further strengthening its store of wealth proposition.

<br/>Private Financial Sovereignty: The privacy-focused nature of Diabase's blockchain empowers users with a sense of financial sovereignty. In an era of increasing data breaches and privacy concerns, Diabase provides a solution for individuals and institutions to securely manage and store their wealth while maintaining their privacy.

<br/>In conclusion, the Diabase blockchain's purpose as a private store of wealth is defined by its low max supply, early emission schedule, and emphasis on privacy and security. By merging scarcity, security, and financial innovation, Diabase seeks to create a platform that empowers users to preserve and grow their wealth in a private, secure, and sustainable manner.
      </div>
    </div>  
 
  </motion.section>
</section>


  

   </>
  );
}

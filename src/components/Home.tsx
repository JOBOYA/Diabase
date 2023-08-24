import { motion } from "framer-motion";
import videoSource from '../assets/Diabase-video.mp4';
import videoSource2 from '../assets/Happy.mp4';
import Private from '../assets/PrivatSend.png';
import YourImagePathHere from '../assets/Search.png';
import { useEffect, useRef, useState } from 'react';
import { BounceLoader } from "react-spinners";



export const Header = () => {
  const sectionRef3 = useRef<HTMLElement | null>(null);
  const sectionRef4 = useRef<HTMLElement | null>(null);
  const [inView3, setInView3] = useState(false);
  const [inView4, setInView4] = useState(false);
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

 
   // La dépendance assure que l'effet n'est exécuté que lorsque inView4 change

   useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prevIndex) => {
        if (prevIndex >= texts.length - 1) {
          clearInterval(timer); // Arrête le minuteur si nous avons atteint le dernier élément
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 2000);
  
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
    className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden"
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
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">What is Diabase Blockchain</h1>
          
          <div className="prose max-w-none text-gray-700">
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

{/**Section 2 */}
<section>
  <motion.header
    className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden"
    variants={fadeInUp}
    initial="initial"
    animate="animate"
  >
    <div className="lg:flex text-justify px-4"> 
      <div className="flex-grow w-full px-4 md:w-[calc(50% - 2rem)] md:px-0">
        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">Proof of Work (PoW) mining</h1>
        <div className="prose max-w-none text-gray-700 text-sm sm:text-md md:text-lg lg:text-xl"> 
          <div className="font-medium text-sm sm:text-md md:text-lg lg:text-lg text-gray-700">
 
<br/>The X11 algorithm, introduced in 2013, remains relevant in 2023 as a cornerstone of energy-efficient and secure blockchain technology. Its innovative approach involves a chain of eleven different cryptographic hashing functions.
<br/>In a time when environmental concerns surrounding blockchain's energy consumption are paramount, X11's design stands out for its efficiency. By utilizing a diverse array of algorithms, it maintains a high level of security while consuming significantly less power compared to traditional proof-of-work alternatives.
<br/>Furthermore, X11's continued relevance can be attributed to its ability to adapt to changing technological landscapes. As the cryptocurrency industry evolves, X11's emphasis on democratizing mining power and preventing centralization remains pertinent.
<br/>The X11 algorithm's energy efficiency, robust security, and adaptability make it a relevant and valuable component of the blockchain ecosystem in 2023.


      </div>
    </div>
  </div>
  <video className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover ml-12"
    autoPlay
    muted
    loop>
    <source src={videoSource2} type="video/mp4" />
  </video>
</div>

        </motion.header>
      </section>

{/**Section 3 */}
<section>
<motion.section
    className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden"
  
            ref={sectionRef3}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView3 ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
        <div className="lg:flex">
            <img 
                src={Private}
                alt="CoinJoin"
                className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover"
            />

            <div className="flex-grow w-full px-4 md:w-[calc(50% - 2rem)] md:px-0">
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
    className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden flex justify-center items-center"
    ref={sectionRef4}
    initial={{ opacity: 0 }}
    animate={{ opacity: inView4 ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
   <div className="lg:flex" >
      <div className="flex-grow w-full px-4 md:w-[calc(50% - 2rem)] md:px-0">
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
      </div>

    <img
      src={YourImagePathHere}
      alt="Blockchain"
      className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover"
    />
  </motion.section>
</section>


  

   </>
  );
}
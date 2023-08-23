import { motion } from "framer-motion";
import videoSource from '../assets/Diabase-video.mp4';
import videoSource2 from '../assets/Happy.mp4';
import Private from '../assets/PrivatSend.png';
import YourImagePathHere from '../assets/Search.png';
import { useEffect, useRef, useState } from 'react';

export const Header = () => {

  const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
      const currentSection = sectionRef.current;
  
      const observer = new IntersectionObserver(
          ([entry]) => {
              setInView(entry.isIntersecting);
          },
          {
              root: null,
              rootMargin: '0px',
              threshold: 0.1,
          }
      );
  
      if (currentSection) {
          observer.observe(currentSection);
      }
  
      return () => {
          if (currentSection) {
              observer.unobserve(currentSection);
          }
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
          className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover"
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
          <div className="lg:flex">
            <div className="flex-grow w-full px-4 md:w-[calc(50% - 2rem)] md:px-0">
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">Proof of Work (PoW) mining</h1>
              <div className="prose max-w-none text-gray-700">
                <p className="font-medium text-sm sm:text-md md:text-lg lg:text-xl text-gray-700 overflow-auto">
                  The X11 algorithm, introduced in 2013, remains relevant in 2023 as a cornerstone of energy-efficient and secure blockchain technology. Its innovative approach involves a chain of eleven different cryptographic hashing functions.
                  <br /><br />
                  In a time when environmental concerns surrounding blockchain's energy consumption are paramount, X11's design stands out for its efficiency. By utilizing a diverse array of algorithms, it maintains a high level of security while consuming significantly less power compared to traditional proof-of-work alternatives.
                  <br /><br />
                  Furthermore, X11's continued relevance can be attributed to its ability to adapt to changing technological landscapes. As the cryptocurrency industry evolves, X11's emphasis on democratizing mining power and preventing centralization remains pertinent.
                  <br /><br />
                  The X11 algorithm's energy efficiency, robust security, and adaptability make it a relevant and valuable component of the blockchain ecosystem in 2023.
                </p>
              </div>
            </div>
            <video 
    className="w-full h-auto lg:max-w-[30%] lg:max-h-[48vh] object-cover"
    autoPlay 
    muted
    loop
>
    <source src={videoSource2} type="video/mp4" />
</video>

          </div>
        </motion.header>
      </section>

{/**Section 3 */}
<section>
<motion.section
 className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden"
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
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
className="mt-10 sm:mt-12 lg:mt-14 p-3 mx-20 border-2 bg-opacity-50 bg-white backdrop-blur-md shadow-lg border-gray-300 rounded-lg lg:max-h-[50vh] overflow-hidden"
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
           
        >
            <div className="flex-grow w-full px-4 md:w-[calc(50% - 2rem)] md:px-0">
                <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">Blockchain Specifications</h1>
                <div className="prose max-w-none text-gray-700">
                    <p className="font-medium text-sm sm:text-md md:text-lg lg:text-xl text-gray-700">
                        First block mined August 4th, 2023
                        <br />X11 PoW algorithm, CPU / GPU / ASIC minable
                        <br />90 second block time (960 blocks a day, 350,400 blocks a year)
                        <br />ZERO Premine (first 1000 blocks held in dev fund for exchange listing)
                        <br />5 coin block reward (80% miners, 20% masternodes) decreases by 50% each year
                        <br />3,600,000 total coin supply
                        <br />Block maturity 101
                        <br />Confirmations 6
                        <br />Difficulty Adjust, "Kimoto Gravity Well"(KGW) / "Dark Gravity Wave"(DGW)
                    </p>
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
  )
}
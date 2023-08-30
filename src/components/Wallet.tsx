import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import Wind from '../assets/IconWallet/Window.svg';
import MacOs from '../assets/IconWallet/Mac.svg';
import Linux from '../assets/IconWallet/Linux.svg';
import Cli from '../assets/IconWallet/Cli.svg';
import Komodo from '../assets/IconWallet/komodowallet.svg';

export const Wallet = () => {
    const operatingSystems = [
        { name: "WINDOWS", icon: Wind },
        { name: "MAC", icon: MacOs },
        { name: "LINUX", icon: Linux },
        { name: "CLI", icon: Cli },
    ];

    const [inViewRef, inView] = useInView({
        threshold: 0.1, 
        triggerOnce: true, 
    });

    const variants = {
        hidden: { opacity: 0 },
        visible: (index: number) => ({ opacity: 1, transition: { delay: index * 0.5, duration: 0.5 } }),
    };

    return (
        <>
        <h2 className="text-3xl md:text-6xl text-center font-bold mt-10 md:mt-20 md:m-20 text-slate-800">Wallet</h2>
        <div id="wallet" className="flex flex-wrap justify-center" ref={inViewRef}>
          
            {operatingSystems.map((os, index) => (
                <Tilt key={index} className="Tilt" options={{ max: 25 }}>
                    <motion.div
                        className="Tilt-inner m-4"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'} 
                        variants={variants}
                        custom={index}
                    >
                        <div
                            className="
                                w-64 h-64 m-5 md:w-72 lg:w-80
                                p-4
                                rounded
                                shadow-lg
                                bg-white bg-opacity-50 backdrop-blur-md
                                transition-all ease-in-out duration-300
                                hover:shadow-xl hover:bg-opacity-70
                                relative
                            "
                        >
                            <div className="image-container">
                                <img src={os.icon} alt={os.name} className="w-16 h-16 mb-2 custom-image" />
                            </div>
                            <button  className="custom-button btn">
                                {os.name}
                                <div id="clip">
                                    <div id="leftTop" className="corner"></div>
                                    <div id="rightBottom" className="corner"></div>
                                    <div id="rightTop" className="corner"></div>
                                    <div id="leftBottom" className="corner"></div>
                                </div>
                                <span id="rightArrow" className="arrow"></span>
                                <span id="leftArrow" className="arrow"></span>
                            </button>
                        </div>
                    </motion.div>
                </Tilt>
            ))}
           <img src={Komodo} alt="Komodo"  />


        </div>
        </>
    );
}

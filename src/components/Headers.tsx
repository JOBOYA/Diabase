import React from 'react';
import { motion } from "framer-motion";
import videoSource from '../assets/Diabase-video.mp4';

export const Header = () => {
    // Variants pour l'animation d'apparition
    const fadeInUp = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <motion.header 
        className="mt-20 flex flex-col items-center bg-opacity-50 bg-white backdrop-blur-md shadow-lg p-4 mx-2 border-2 border-gray-300 rounded-lg"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
    >
        <video className="w-full mx-auto mb-4 h-auto max-w-[90%] md:max-w-[calc(50% + 2rem)] lg:max-w-[50%]" autoPlay muted>
            <source src={videoSource} type="video/mp4" />
        </video>
        <div className="flex-grow w-full px-4 md:w-[calc(50% - 2rem)] md:px-0">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900">What is Diabase Blockchain</h1>
            <p className="font-medium text-md md:text-lg lg:text-xl text-gray-700">
                    Introducing Diabase Blockchain a layer one blockchain, the next evolution in digital wealth preservation. Built upon the robust and secure X11 algorithm, Diabase offers unparalleled protection for your assets. With a unique focus on being a store of wealth, Diabase provides stability and long-term value appreciation.
                    <br /><br />
                    Empowered by a network of masternodes, Diabase ensures swift and secure transactions, maintaining the integrity of your holdings. These masternodes contribute to network security, enhancing decentralization and ensuring fast private transactions.
                    <br /><br />
                    Whether you're a seasoned investor looking to diversify your portfolio or someone new to the world of cryptocurrencies, Diabase offers a reliable and trusted solution for safeguarding your wealth. Join us in shaping the future of financial sovereignty with Diabase - where security meets prosperity.
                </p>
            </div>
        </motion.header>
    )
}

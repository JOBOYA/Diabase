import {Tilt} from 'react-tilt';
import Wind from '../assets/IconWallet/Window.svg';
import MacOs from '../assets/IconWallet/Mac.svg';
import Linux from '../assets/IconWallet/Linux.svg';
import Cli from '../assets/IconWallet/Cli.svg';

export const Wallet = () => {
    const operatingSystems = [
        { name: "WINDOWS", icon: Wind },
        { name: "MAC", icon: MacOs },
        { name: "LINUX", icon: Linux },
        { name: "CLI", icon: Cli },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {operatingSystems.map((os, index) => (
                <Tilt key={index} className="Tilt" options={{ max: 25 }}>
                    <div className="Tilt-inner m-4">
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
                    </div>
                </Tilt>
            ))}
        </div>
    );
};

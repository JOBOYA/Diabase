import Safe from '../assets/SafeTrade.svg';
import Xeg from '../assets/Xeggex.svg';


export const Trade = () => {
   
    return (
        <div className="trade flex flex-col items-center">
            <h2 className="text-3xl md:text-6xl text-center font-bold mt-10 md:mt-20 md:m-20">Trade</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-20 mt-10">
                <a href="https://safe.trade/trading/diacusdt" target="_blank" rel="noopener noreferrer">
                    <img src={Safe} alt="Safe Trade" className="w-48 md:w-96 h-48 md:h-96" /> {/* Réduit pour mobile */}
                </a>
                <a href="https://xeggex.com/market/DIAC_USDT" target="_blank" rel="noopener noreferrer">
                <img src={Xeg} alt="Xeg" className="w-128 h-128" />
{/* Réduit pour mobile */}
                </a>
            </div>
        </div>
    );
}




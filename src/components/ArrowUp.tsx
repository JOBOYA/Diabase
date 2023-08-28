import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ArrowUp: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  const checkScroll = () => {
    if (window.pageYOffset > 200) { // Changez ce nombre selon vos besoins
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 arrow-up">
      {showArrow && (
        <button onClick={scrollToTop} className="bg-blue-300 opacity-50 hover:bg-slate-400 text-white font-bold rounded-full p-4 fixed bottom-4 right-4 transition duration-300 ease-in-out text-2xl lg:text-3xl">
        <FaArrowUp />
      </button>
      
      )}
    </div>
  );
};

export default ArrowUp;

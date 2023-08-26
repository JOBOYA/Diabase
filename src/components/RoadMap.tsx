import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './styles/road.css';

const Timeline = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.reveal', { duration: 6000 });

    // define variables
    const items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    function isElementInViewport(el: Element) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("resize", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <section id="roadmap" className="timeline">
      <div className="title"> 
      <h2 className='text-3xl md:text-6xl text-center text-slate-800 font-bold mt-10 md:mt-20 md:m-20'>Diabase Blockchain Roadmap 2023</h2>
        </div>
      <ul>
      <li>
  <div className="reveal">
    <h3 className='text-slate-800 font-bold text-3xl'>Goals1</h3>
    <p className='font-bold text-2xl text-justify'>
      • Mining pools ⛏️<br />
      • Exchange listing 💹<br />
      • Community Masternodes 🛠️<br />
      • Coin Paprika and Coin Gecko listings 📊<br />
      • Initial Marketing 📣<br />
    </p>
  </div>
</li>

<li>
  <div className="reveal">
    <h3 className='text-slate-800 font-bold text-3xl'>Goals2</h3>
    <p className='font-bold text-2xl text-justify'>
      • Tier 2 Exchange Listing 💹<br />
      • Komodo wallet listing 🐉💼<br />
      • Coinmarketcap listing 📈<br />
      • Start marketing campaign ! 🚀<br />
    </p>
  </div>
</li>

<li>
  <div className="reveal">
    <h3 className='text-slate-800 font-bold text-3xl'>Goals3</h3>
    <p className='font-bold text-2xl text-start'>
      • Development of Android & IOS wallets 📱<br />
      • Marketing campaign 📣<br />
      • Community involvement campaign 👥<br />
    </p>
  </div>
</li>

<li>
<div className="reveal">
<h3 className='text-slate-800 font-bold text-3xl'>Goals4</h3>
    <p className='font-bold text-2xl text-justify'>
      • Tier 3 Exchange Listing 💹<br />
      • Hardware Wallet Development 🔐<br />
      • 2024 Roadmap announcement 🗺️<br />
    </p>
  
</div>

</li>

       
      </ul>

    </section>
  );
};

export default Timeline;
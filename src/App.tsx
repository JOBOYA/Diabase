import {Navbar} from './components/Navbar'
import { Header} from './components/Home'
import {Footer}  from './components/Footer'
import {Wallet} from './components/Wallet'
import { Techno } from './components/Techno'
import { Trade } from './components/Trade'
import { Mouse } from './components/Mouse'
import './index.css'


export default function App() {
  return (
   <>
   <Mouse />
    <Navbar />
    <Header />
    <div className='md:m-40'>
  <h1 className='text-6xl text-center font-bold'>Wallet</h1>
  <Wallet />
</div>
    <Techno />
    <Trade />
    

   
    <Footer />
    
   </>
  )
}
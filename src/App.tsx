import {Navbar} from './components/Navbar'
import { Header} from './components/Home'
import {Footer}  from './components/Footer'
import {Wallet} from './components/Wallet'
import { Techno } from './components/Techno'
import { Trade } from './components/Trade'
import { Mouse } from './components/Mouse'
import RoadMap from "./components/RoadMap";
import ArrowUp from './components/ArrowUp'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {DocumentationMasternode} from './components/DocumentationMasternode'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />} /> 
        <Route path="/masternode-setup" element={<DocumentationMasternode/>} />
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <>
    <ArrowUp />
    <Mouse />
      <Navbar />

      <Header />
      
      <Techno />
      <Trade />
      <Wallet />
      <RoadMap />
      

      
      <Footer />
    </>
  )
}
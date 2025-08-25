import { useState } from 'react'
import Header from './components/Header'
import Category from './components/Category';
import TopRes from './components/TopRes';
import OnlineActives from './components/OnlineActives';
import Scanpay from './components/Scanpay';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Category/>
    <TopRes/>
    <OnlineActives/>
    <Scanpay/>
    <Footer/>
    </>
  );
}

export default App

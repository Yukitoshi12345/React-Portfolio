// import { useState } from "react";

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <div style={{ flexGrow: 1 }}>
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import OnSale from './components/OnSale/OnSale'
import Banner from "./components/Banner/Banner"
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__wrapper">
        <Filter />
        <OnSale />
        <Banner />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

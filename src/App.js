import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import SwiperCarousel from './components/SwiperCarousel/SwiperCarousel';

function App() {
  return (
    <div className="App">
      <Search/>
      <h1>Breaking Bad</h1>
      <SwiperCarousel/>
    </div>
  );
}

export default App;

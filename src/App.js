import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import SwiperCarousel from './components/SwiperCarousel/SwiperCarousel';
import { Quote } from './components/Quote/Quote';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Search/>
      <Intro/>
      <SwiperCarousel component={<Quote/>}/>
      <h1>Hello</h1>
    </div>
  );
}

export default App;

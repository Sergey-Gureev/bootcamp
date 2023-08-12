import logo from './logo.svg';
import './App.css';
import Hudini from './components/Hudini.js'
import Home from './components/Home'
import { useState } from 'react';
import Landing from './components/Landing';

function App() {

  let x = {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  }
  
  let [data, setData] = useState(x)

  let landing = <Landing user={data.user} 
                        hottest={data.store.filter(i => i.hottest === true)[0]} 
                        key={data.currentPage} />;
  let home = <Home store={data.store} 
                  shouldDiscount={data.shouldDiscount}
                  key={data.currentPage} 
                  />;

  const turnDiscount = () => {
    let newDiscount = data.shouldDiscount === true ? false : true
    let newData = {...data};
    newData.shouldDiscount = newDiscount
    setData(newData)
  }
  const toHomePage = () => {
    let newData = {...data};
    newData.currentPage = 'Home'
    setData(newData)
  }
  const toLandingPage = () => {
    let newData = {...data};
    newData.currentPage = 'Landing'
    setData(newData)
  }

  return (
    // Exercise 1: <Hudini />

    //Exercise 2: & 3:
    <div>
      <div>{data.currentPage === 'Landing' ? landing : home}</div>
      <button onClick={data.currentPage === 'Landing' ? toHomePage : toLandingPage }>
      {data.currentPage === 'Landing' ? 'Home' : 'Landing' }</button>
      <button onClick={turnDiscount}>turn Discount</button>
    </div>
    //Exercise 4:


  );
}

export default App;

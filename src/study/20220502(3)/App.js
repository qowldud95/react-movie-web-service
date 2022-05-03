import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myDallors, setMyDallors] = useState();
  const [convertToCoin, setConvertToCoin] = useState();

  const myDallorInput = (event) => setMyDallors(event.target.value);

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  }, []);

  const onChange = (event) => {
    const coinValue = event.target.value;
      setConvertToCoin(myDallors / coinValue);
  };

  return (
    <div>
      <h1> The Coins! {loading? "" : `(${coins.length})`}</h1>
      <div>
        My Dallors : $<input value={myDallors} onChange={myDallorInput} type="number" placeholder="my dallors input.."/>
      </div>
      <div>
        {loading ? ( <strong>Loading....</strong> ) : ( 
          <select onChange={onChange}>
            <option key="-1">select coin</option>
            {coins.map((coin, index)=>(<option key={index} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>))}
          </select>
        ) }
        </div>
        <input value={convertToCoin} type="number" disabled/> coins
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';

const App4 = () => {
    const [loading, setLoading] = useState(true);

    const[coins,setCoins] = useState([])
    const[dollar,setDollar]=useState(0)
    const[toDollar,setToDollar] =useState(0)


    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers").then(response => response.json()).then((json)=>{
            setCoins(json);
            setLoading(false);
        });
    },[])

    const goToDollar=(event)=>{
        setToDollar(dollar / event.target.value)
    }

    const onChange =(event)=>{
        setDollar(event.target.value)
    }
    return (
        <div>
            <h1>The Coins!({coins.length})</h1>
            {loading ? <strong>Loading...</strong> : 
                <select onChange={goToDollar}>
                {coins.map((coin,id)=>
                    <option 
                        key={id} 
                        value={coin.quotes.USD.price}>
                    {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                    </option>
                )}
                </select>
            }

            <form>
            <input
                onChange={onChange}
                type="number"
                placeholder='how much do you have?'>
            </input>
            <input 
                type="text"
                placeholder='you can have'
                value={toDollar}
                readOnly
                >
            </input>
            </form>
            

            
        </div>
    );
};

export default App4;
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Playerlist from './Component/Playerlist/Playerlist';

function App() {
  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([])
    ;
  useEffect(() => {
    fetch('https://api.jsonbin.io/b/60a23801ad11ea05fe535c2a/2')
      .then(res => res.json())
      .then(data => setPlayer(data))
      .catch(error => console.log(error));
  }, []);

  const handleAddBtn = (player) => {
    const newCart = [...cart, player];
    setCart(newCart)
    console.log(newCart);
  }
// const PlayerTotalPrice = reduce((sum,cart) => sum + cart.price,0);
let PlayerTotalPrice= 0;
  for (let i = 0; i < cart.length; i++) {
    const playerprice = cart[i];
    PlayerTotalPrice=PlayerTotalPrice+playerprice.price;
    
  }
  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        borderBottom: '1px solid gray',
        padding: '50px'
      }}>Badminton Game</h1>

      {
        console.log(player)
      }

      <div className="container">
        <div className="userporfile">
          <div className="headerItem">
            <h1>Player Profile</h1>
            <h2>Our Total Players : {player.length}</h2>
          </div>
          <div className="card-container">
            {
              player.map((player, id) => <Playerlist key={player.id} player={player} handleAddBtn={handleAddBtn}>{player.name}</Playerlist>)
            }
          </div>
        </div>

        <div className="usercount">
          <div>
            <h1>Player Order Summery </h1>
            <h4>Total Added Player : {cart.length}</h4>
            <br />{
              console.log(PlayerTotalPrice)
            }
            <h5>Total Player price : $ {PlayerTotalPrice}</h5>
          
          </div>
          {
            cart.map((cart, id) => <Cart cart={cart} key={id}></Cart>)
          }

        </div>
      </div>
    </div>

  );
}

export default App;

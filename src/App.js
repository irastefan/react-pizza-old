import React, {useState, useEffect} from "react";
import {Header} from './components'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Routes, Route} from "react-router-dom";

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/db.json')
      .then(res => res.json())
      .then(json => setPizzas(json.pizzas))
  }, [])
  
  console.log(pizzas)

  return (
    <div className="App">
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={pizzas} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;

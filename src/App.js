import React, {useEffect} from "react";
import {Header} from './components'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Routes, Route} from "react-router-dom";
import axios from "axios";

import {useDispatch} from 'react-redux'
import { setPizzas } from "./redux/actions/pizzas";

function App() {
const dispatch = useDispatch()

  useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(({data}) => 
        dispatch(setPizzas(data.pizzas))
      )
  }, [])

  return (
    <div className="App">
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;

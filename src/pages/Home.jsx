import React, {useEffect} from 'react'
import {Categories, SortPopup, PizzaBlock, LoaderBlock} from './../components'

import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categories = ['Vegan', 'Spicy']
const sortItems = [
  {name: 'popularity', type: 'popular'}, 
  {name: 'price', type: 'price'}, 
  {name: 'name', type: 'name'}
];

const Home = () => {
  
  const dispatch = useDispatch()

  const items = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {category, sortBy} = useSelector(({filters}) => filters)
  
  const onSelectCategory = React.useCallback(
    (index) => dispatch(setCategory(index))
  , [])
  const onSelectSortType = React.useCallback(
    (name) => dispatch(setSortBy(name))
  , [])

  const handleAddPizza = (obj) => {
    console.log('add pizza')
    dispatch(addPizzaToCart(obj))
  }
   
  useEffect(() => {
      dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  return (
        <div className="container">
          <div className="content__top">
            <Categories activeCategory={category} items={categories} onClickItem={onSelectCategory} />
            <SortPopup activeSortType={sortBy} onSelectSortType={onSelectSortType} items={sortItems} />
          </div>
          <div className="content__items">
              {isLoaded 
              ? items.map((item) => <PizzaBlock 
                itemCartCount={cartItems[item.id] && cartItems[item.id].items.length} 
                onClickAddPizza={handleAddPizza} 
                key={item.id} 
                {...item} 
                />)
              : Array(12).fill(0).map((_, index) => <LoaderBlock key={index} />)
            }
            
          </div>
        </div>
  )
}

export default Home
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(function Categories ({activeCategory, items, onClickItem}) {

  return (
    <div className="categories">
              <ul>
                <li onClick={() => onClickItem(null)} className={activeCategory === null ? 'active' : ''}>All</li>
                {items && items.map((item, index) => <li className={activeCategory === index ? 'active' : ''} 
                  onClick={() => onClickItem(index)} key={`${item}_${index}`}>{item}</li>)}
              </ul>
    </div>
  )
})

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired, 
  onClickItem: PropTypes.func
}


export default Categories
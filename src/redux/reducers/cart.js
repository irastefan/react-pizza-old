const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const allPizzas = [].concat.apply([], Object.values(newItems))
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.reduce((sum, obj) => obj.items.length + sum, 0),
                totalPrice: allPizzas.reduce((sum, obj) => obj.totalPrice + sum, 0)
            }
        }

        case 'CLEAN_CART': {
            return {
                totalCount: 0, totalPrice: 0, items: []
            }
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
            
       
    
        default:
            return state;
    }   
    
}

export default cart
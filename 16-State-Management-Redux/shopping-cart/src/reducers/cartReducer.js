import Item1 from '../images/avocado.jpg'
import Item2 from '../images/carrot.jpg'
import Item3 from '../images/corn.jpg'
import Item4 from '../images/garlic.jpg'
import Item5 from '../images/red-chili.jpg'
import Item6 from '../images/tomato.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from '../actions/action-types/cartActions'
import produce from 'immer'


const initState = {
  items: [
    { id: 1, title: 'Avocado', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1, quantity: 0 },
    { id: 2, title: 'Carrot', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2, quantity: 0 },
    { id: 3, title: 'Corn', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3, quantity: 0 },
    { id: 4, title: 'Garlic', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4, quantity: 0 },
    { id: 5, title: 'Red Chili', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5, quantity: 0 },
    { id: 6, title: 'Tomato', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6, quantity: 0 }
  ],
  addedItems: [],
  total: 0

}

const cartReducer = (state = initState, action) => {

  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    const nextState = produce(state, (draf) => {
      const id = action.payload;
      const found = draf.addedItems.find(item => (item.id === id))
      if (found) {
        found.quantity++;
        draf.total += found.price
      } else {
        const addedItem = draf.items.find(item => item.id === id)
        addedItem.quantity = 1
        draf.addedItems.push(addedItem)
        draf.total += addedItem.price
      }
    })

    return nextState;
  }

  if (action.type === REMOVE_ITEM) {
    // Add code here
    const nextState = produce(state, (draf) =>{
      const id = action.payload;
      const removeItem = state.addedItems.find(item => item.id === id)
      const newItems = state.addedItems.filter(item => item.id !== id)
      const found = draf.items.find(item => (item.id === id))
      draf.addedItems = newItems
      draf.total -= removeItem.price * removeItem.quantity
      found.quantity = 0;
    })
    return nextState
  }


  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    // Add code here
    const nextState = produce(state, (draf) => {
      const id = action.payload;
      const found = draf.addedItems.find(item => (item.id === id))
      found.quantity++;
      draf.total = state.total + found.price
    })

    return nextState;
  }
  if (action.type === SUB_QUANTITY) {
    // Add code here
    const nextState = produce(state, (draf) => {
      const id = action.payload;
      let found = draf.addedItems.find(item => (item.id === id))
      let currQuant = found.quantity
      found.quantity--;
      if (currQuant === 1){
        const removedItem = state.addedItems.find(item => item.id === id)
        const newItems = state.addedItems.filter(item => item.id !== id)
        draf.addedItems = newItems
        draf.total -= removedItem.price
      } else{
        draf.total -= found.price
      }
    })

    return nextState;
  }

  if (action.type === ADD_SHIPPING) {
    // Add code here (OPTIONAL)
    const nextState = produce(state, (draf) => {
      draf.total += 6;
    })

    return nextState;
  }

  if (action.type === SUB_SHIPPING) {
    // Add code here (OPTIONAL)
    const nextState = produce(state, (draf) => {
      draf.total -= 6;
    })

    return nextState;
  }

  else {
    return state
  }

}

export default cartReducer

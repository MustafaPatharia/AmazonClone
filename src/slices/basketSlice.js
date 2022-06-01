import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id:20,
      title:"DANVOUY Womens T Shirt Casual Cotton Short",
      price:12.99,
      image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      quantity:1,
      hasPrime:true,
      deliveryDate:"Fri Jun 03"  },

      {
        id:7,
        title:"White Gold Plated Princess",
        price:9.99,
        image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        quantity:1,
        hasPrime:true,
        deliveryDate:"Fri Jun 03",
      }
  ],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        const newItems = [...state.items];
        newItems[index].quantity += 1
        state.items = newItems
      } else{
        state.items = [...state.items, action.payload];
      }
    },
    changeProductQuantity: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      const newItems = [...state.items];
      newItems[index].quantity += action.payload.value
      state.items = newItems

    },
    removeFromBasket: (state, action) => {
      const product = state.items.filter(item => item.id === action.payload);
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToBasket, removeFromBasket,  changeProductQuantity } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const cartValue = (state) => state.basket.items.reduce((total, item) => total + (item.price*item.quantity) , 0);

export default basketSlice.reducer;

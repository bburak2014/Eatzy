import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: [
    {
      id: 1,
      image: "image/1.jpg",
      category: "Food",
      name: "Nutrition Chocolate",
      visit: 0,
      explain:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price:"1000 TL " 
    },
    {
      id: 2,
      image: "image/2.jpg",
      category: "Crafts",
      name: "Side table mockup",
      visit: 0,
      explain:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price:"2000 TL " 

      },
    {
      id: 3,
      image: "image/3.jpg",
      category: "Lifestyle",
      name: "On a keyboard space",
      visit: 0,
      explain:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price:"5000 TL " 

      },
    {
      id: 4,
      image: "image/4.jpg",
      category: "Fashion",
      name: "Eau de parfum spray",
      visit: 0,
      explain:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price:"1500 TL " 

      },
  ],
  reducers: {
    
    updateCounter:(state,action)=>{
     const {id,visit}=action.payload;
     const exist=state.find(fi=>fi.id===id);
     if(exist){
      exist.visit+=visit;
     }
    }
  },
});

export const { addcounter,updateCounter } = counterSlice.actions;

export default counterSlice.reducer;

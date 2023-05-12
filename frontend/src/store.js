import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk"; // I still add this for my reference so I know thunk middleware is added

import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
} from "./reducers/orderReducers";

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
};

// get cart Items from local storage
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer,
  preloadedState,
  middleware: [thunk],
});

export default store;

// up to lecture 50
// store.js

// import { configureStore } from '@reduxjs/toolkit'
// import { productListReducer, productDetailsReducer } from './reducers/productReducers'
// import { cartReducer } from './reducers/cartReducers'
// import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

// const reducer = {
//     productList: productListReducer,
//     productDetails: productDetailsReducer,
//     cart: cartReducer,
//     userLogin: userLoginReducer,
//     userRegister: userRegisterReducer
// }

// // get cart Items from local storage
// const cartItemsFromStorage = localStorage.getItem('cartItems')
//     ? JSON.parse(localStorage.getItem('cartItems'))
//     : []

// // get userInfo from local storage
// const userInfoFromStorage = localStorage.getItem('userInfo')
//     ? JSON.parse(localStorage.getItem('userInfo'))
//     : null

// const preloadedState = {
//     cart: { cartItems: cartItemsFromStorage },
//     userLogin: { userInfo: userInfoFromStorage }
// }

// const store = configureStore({
//     reducer,
//     preloadedState,
//     devTools: process.env.NODE_ENV !== 'production', //only show devTools when in production
// })

// export default store

// index.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import './bootstrap.min.css'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();

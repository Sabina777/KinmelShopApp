import React from 'react';

import ShopNavigator from './navigation/ShopNavigator';
import {StyleSheet, View, Text} from 'react-native';

import {composeWithDevTools} from 'redux-devtools-extension';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

//import reducers
import productReducers from './store/reducers/products';
import cartReducers from './store/reducers/cart';
//combine all the reducers
const rootReducers = combineReducers({
  products: productReducers,
  cart: cartReducers,
});

//create store
const store = createStore(rootReducers, composeWithDevTools());
export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

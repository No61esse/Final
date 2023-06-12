import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import orderHistoryReducer from './orderHistoryReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  orderHistory: orderHistoryReducer,
  products: productReducer,
});

export default rootReducer;

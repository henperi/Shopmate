import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './modules/rootReducer';

const configureStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore();
export default store;

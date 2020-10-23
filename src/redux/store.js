import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {userReducer} from './user/UserReducer';
import {checkReducer} from './filter/FilterReducer';

const rootReducer =  combineReducers({
    userReducer: userReducer,
    checkReducer
})

const persistConfig = {
    blacklist: ['checkReducer'],
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer);
   

const  ConfigureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
    let persistor = persistStore(store);
        
        return {store, persistor};
        
        
}

export default ConfigureStore;
import { combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from '../reducers/counter-reducer';
import reducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage
}

const initialState = {
    counterData: 0
}

const rootReducer = {
    counterData: counterReducer
}

// const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));

export default (preloadedState = initialState) => {
    const store = createStore(persistedReducer, preloadedState)
    const persistor = persistStore(store)

    return { store, persistor}
}


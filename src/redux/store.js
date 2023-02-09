import { contactsInitState } from "./contacts/contacts.init-state";
import { contactsReducer } from "./contacts/contacts.slice";
import { filterInitState } from "./filter/filter.init-state";
import { filterReducer } from "./filter/filter.slice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
    REGISTER,
} from 'redux-persist'
  import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const initState = {
    filter: filterInitState,
    contacts: contactsInitState,
}

const persistConfig = {
  key: 'root',
    storage,
    whitelist: ['contacts']
  
}

const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
// export const store = createStore(rootReducer, initState);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    preloadedState: initState,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
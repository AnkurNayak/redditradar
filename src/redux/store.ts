"use client";
import { redditApi } from "@/redux/apis/redditApi";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import subredditsReducer from "./slices/subRedditSlice";

// persist config
const persistConfig = {
  key: "root",
  storage,
};

// combine reducers
const rootReducer = combineReducers({
  [redditApi.reducerPath]: redditApi.reducer,
  subreddits: subredditsReducer,
});

// persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(redditApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;

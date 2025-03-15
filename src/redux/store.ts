import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import userReducer from "./features/userSlice";
import storage from "./storage";

const persistOptions = {
  key: "cart",
  storage,
};

const persistedUser = persistReducer(persistOptions, userReducer);
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: persistedUser,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    middleware: (getDefaultMiddlewares: any) =>
      getDefaultMiddlewares({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

import { configureStore } from '@reduxjs/toolkit';
import notesReducer from "./notesSlice";

export const rootReducer = (
    notesReducer
);
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type AppState = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppState['dispatch'];

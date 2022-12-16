import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notesReducer from "./notesSlice";
import filtersReducer from './filterSlice';

export const rootReducer = combineReducers({
    notesReducer,
    filtersReducer,
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};
export type AppState = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppState['dispatch'];
export default filtersReducer;
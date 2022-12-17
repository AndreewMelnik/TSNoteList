import { combineReducers, configureStore } from '@reduxjs/toolkit';
import notesReducer from "./notesSlice";
import filtersReducer from './filterSlice';
import throttle from 'lodash.throttle';
import { loadState, saveState } from '../localstorage';

export const rootReducer = combineReducers({
    notesReducer,
    filtersReducer,
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: loadState()
    });
};
export const store = setupStore();
store.subscribe(
    throttle(() => saveState(store.getState()), 1000)
)

export type AppState = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppState['dispatch'];
export default filtersReducer;
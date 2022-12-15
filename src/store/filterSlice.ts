import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
    searchQuery: string;
    tags: string[];
}

const initialState: IFilterState = {
    searchQuery: "",
    tags: [],
};

export const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        },
        // здесь мы передаем данные из строки для поиска в стор
        setTags(state, action: PayloadAction<string[]>) {
            state.tags = action.payload;
        },
    },
});

export const {setSearchQuery, setTags} = filtersSlice.actions;
export default filtersSlice.reducer;

//Так можно экспортировать глобально экшены и редьюсеры(Редакс тулкит)
// Дока по редакс тулкит https://redux-toolkit.js.org/api/createslice
// Дока по редаксу: https://rajdee.gitbooks.io/redux-in-russian/content/docs/basics/Actions.html
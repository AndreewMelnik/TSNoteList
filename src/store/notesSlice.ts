import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteData } from "../types/data";

interface NoteDataState {
    notes: NoteData[];
    searchQuery: string;
    tags: string[];
}

const initialState: NoteDataState = {
    notes: [{id: 1, title: 'Your title', description: 'Your description', tags: ['tags']}],
    searchQuery: "",
    tags: []
};

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<NoteData>) {
            state.notes.push(action.payload);
        },
        deleteNote(state, action: PayloadAction<number>) {
            state.notes = state.notes.filter((item) => item.id !== action.payload);
        },
        updateNote(state, action: PayloadAction<NoteData>) {
            const editIndex = state.notes
                .map((item) => item.id)
                .indexOf(action.payload.id);
            state.notes[editIndex] = action.payload;
        },
    },
});

export const {deleteNote, updateNote} = notesSlice.actions;
export default notesSlice.reducer;

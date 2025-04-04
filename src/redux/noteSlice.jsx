import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    notes: localStorage.getItem("notes")
        ? JSON.parse(localStorage.getItem("notes"))
        : []
}
const noteExists = (state, note) => {
    return state.notes.some((existingNote) => {
        return existingNote.title.toLowerCase().trim() === note.title.toLowerCase().trim()//&& existingNote.content === note.content//
    })
}

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addToNote: (state, action) => {
            const note = action.payload

            //add a check  -> note already exist

            // state.notes.push(note)
            // localStorage.setItem("notes",JSON.stringify(state.notes))

            // toast("note is created ✅")


            if (!noteExists(state, note)) {
                state.notes.push(note)
                localStorage.setItem("notes", JSON.stringify(state.notes))
                toast("note is created ✅ ")
            } else {
                toast("note already exists by this name ,Change the name ")
            }
        },
        updateToNote: (state, action) => {
            const note = action.payload
            const index = state.notes.findIndex((existingNote) => existingNote._id === note._id);

            if (index >= 0) {
                state.notes[index] = note
                localStorage.setItem("notes", JSON.stringify(state.notes));
                toast("note is updated ✅ ")
            } else {
                toast("note not found ")
            }
        },
        resetAllNotes: (state, action) => {
            state.notes = [];
            localStorage.removeItem("notes")
        },
        removeFromNote: (state, action) => {
            const noteId = action.payload

            console.log(noteId)
            const index = state.notes.findIndex((item) => item._id === noteId)

            if (index >= 0) {
                state.notes.splice(index, 1);
                localStorage.setItem("notes", JSON.stringify(state.notes));
                toast("note is deleted ✅ ")
            } else {
                toast("note not found ")
            }

        },
    },
})

// Action creators are generated for each case reducer function
export const { addToNote, updateToNote, resetAllNotes, removeFromNote } = noteSlice.actions

export default noteSlice.reducer
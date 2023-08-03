import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const printHeader = createSlice({
		name: 'printHeader',
    initialState: false,
    reducers: {
        setShowHeader: (state, actions)=>{
            return actions.payload
        }
    }
})

export const { setShowHeader } = printHeader.actions;

export default printHeader.reducer;
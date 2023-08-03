import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const coachName = createSlice({
		name: 'coachName',
    initialState: "",
    reducers: {
        setEnterName: (state, actions)=>{
            return actions.payload
        }
    }
})

export const { setEnterName } = coachName.actions;

export default coachName.reducer;
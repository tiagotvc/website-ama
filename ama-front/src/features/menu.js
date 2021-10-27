import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name:'menu',
    initialState: {
        menu:'home',
    },
    reducers: {
        changeMenu(state, { payload }) {
            return { ...state, menu: payload } 
        }
    }
})

export const { changeMenu } = menuSlice.actions;
export const getMenu = state => state.menu;
export default menuSlice.reducer;
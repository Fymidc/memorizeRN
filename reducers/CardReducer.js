import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    value: [],
    loginuser: [],
    token:[],
    friends: [],
    loading: false,
    success: false,
    
}

export const cardReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {

            return {
                ...state.users,
                users: action.payload
            }
        })

    }

})

export default cardReducer.reducer;



export const fetchAllUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://diary-apps.herokuapp.com/user')
    return response.data
    // fetchAllUsers(response)


})
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    value: [],
    loading: false,
    success: false,
    
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(fetchAllUsers.pending, (state, action) => {

            return {
                ...state.loading,
                loading: true
            }
        })
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {

            return {
                ...state.value,
                ...state.loading,
                loading:false,
                value: action.payload
            }
        })

    }

})

export default userReducer.reducer;



export const fetchAllUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('http://10.0.2.2:8080/user/1')
    return response.data
    // fetchAllUsers(response)


})
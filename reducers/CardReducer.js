import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    value: [],
   
    loading: false,
    success: false,
    
}

export const cardReducer = createSlice({
    name: 'card',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(fetchAllCards.pending, (state, action) => {

            return {
                ...state.loading,
                loading: true
            }
        })
        builder.addCase(fetchAllCards.fulfilled, (state, action) => {

            return {
                ...state.value,
                ...state.loading,
                loading:false,
                value: action.payload
            }
        })
        // builder.addCase(createOneCard.pending, (state, action) => {

        //     return {
        //         ...state.loading,
        //         loading:true
        //     }
        // })
        builder.addCase(createOneCard  .fulfilled, (state, action) => {

            return {
                ...state.value,
                ...state.loading,
                loading:false,
                value:  action.payload
            }
        })

        builder.addCase(deleteCard.fulfilled, (state, action) => {

            return {
                ...state.value,
                value: state.value.filter(val => val.id !== action.payload.id)
            }
        })

    }

})

export default cardReducer.reducer;

export const fetchAllCards = createAsyncThunk('card/fetchAllCards', async (id) => {
    const response = await axios.get(`http://10.0.2.2:8080/card/set/${id}`)
    return response.data
    // fetchAllUsers(response)


})

export const createOneCard = createAsyncThunk('card/createOneCard', async (data) => {
    console.log("reducerden gelen",data)
    const response = await axios.post('http://10.0.2.2:8080/card',data).catch(error => console.log(error));
    return response.data 

})

export const deleteCard = createAsyncThunk('card/deleteCard', async (id) => {
    const response = await axios.delete(`http://10.0.2.2:8080/card/${id}`)
    return response.data //id dönücek

})

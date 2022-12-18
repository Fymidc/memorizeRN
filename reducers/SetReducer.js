import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    value: [],

    loading: false,
    success: false,
    
}

export const setReducer = createSlice({
    name: 'set',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder.addCase(fetchAllSets.pending, (state, action) => {

            return {
                ...state.loading,
                loading: true
            }
        })
        builder.addCase(fetchAllSets.fulfilled, (state, action) => {

            return {
                ...state.value,
                ...state.loading,
                loading:false,
                value: action.payload
            }
        })
        // builder.addCase(getAllSetsByFoldersId.pending, (state, action) => {

        //     return {
        //         ...state.loading,
        //         loading: true
        //     }
        // })
        builder.addCase(getAllSetsByFoldersId.fulfilled, (state, action) => {

            return {
                ...state.value,
                ...state.loading,
                loading:false,
                value: action.payload
            }
        })

      
        builder.addCase(createOneSet.pending, (state, action) => {

            return {
                ...state.loading,
                loading:true
            }
        })
        builder.addCase(createOneSet.fulfilled, (state, action) => {

            return {
                ...state.value,
                ...state.loading,
                loading:false,
                value:  action.payload
            }
        })

        builder.addCase(deleteSet.fulfilled, (state, action) => {

            return {
                ...state.value,
                value: state.value.filter(val => val.id !== action.payload.id)
            }
        })

    }

})

export default setReducer.reducer;



export const fetchAllSets = createAsyncThunk('Set/fetchAllSets', async () => {
    const response = await axios.get('http://10.0.2.2:8080/set/1')
    return response.data
   


})
export const getAllSetsByFoldersId = createAsyncThunk('Set/getAllSetsByFoldersId', async (id) => {
    const response = await axios.get(`http://10.0.2.2:8080/set/folder?folderid=${id}`)
    return response.data
    


})

export const createOneSet = createAsyncThunk('Set/createOneSet', async (data) => {
    const response = await axios.post('http://10.0.2.2:8080/set',data).catch(error => console.log(error));
    return response.data 

})

export const deleteSet = createAsyncThunk('card/deleteSet', async (id) => {
    const response = await axios.delete(`http://10.0.2.2:8080/set/${id}`)
    return response.data //id dönücek

})
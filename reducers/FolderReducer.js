import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';


const initialState = {
    value: [],
    loading: false,
    success: false,
    
}

export const folderReducer = createSlice({
    name: 'folder',
    initialState,
    reducers: {},

    extraReducers(builder) {

        builder.addCase(fetchAllFolders.pending, (state, action) => {

            return {
                ...state.loading,
                loading: true
            }
        })
        builder.addCase(fetchAllFolders.fulfilled, (state, action) => {
 
            return {
                ...state.value,
                ...state.loading,
                loading:false,
                value: action.payload
            }
        })
        builder.addCase(createOneFolder.pending, (state, action) => {

            return {
                ...state.loading,
                loading:true
            }
        })
        builder.addCase(createOneFolder.fulfilled, (state, action) => {

            return {
                ...state.value,
                ...state.loading,
                loading:false,
                value:  action.payload
            }
        })

        builder.addCase(deleteFolder.fulfilled, (state, action) => {

            return {
                ...state.value,
                value: state.value.filter(val => val.id !== action.payload.id)
            }
        })


    }

})

export default folderReducer.reducer;


export const fetchAllFolders = createAsyncThunk('folder/fetchAllFolders', async () => {
    const response = await axios.get('http://10.0.2.2:8080/folder/1')
    return response.data
    // fetchAllUsers(response)


})

export const createOneFolder = createAsyncThunk('folder/createOneFolder', async (data) => {
    const response = await axios.post('http://10.0.2.2:8080/folder',data).catch(error => console.log(error));
    return response.data 

})

export const deleteFolder = createAsyncThunk('card/deleteFolder', async (id) => {
    const response = await axios.delete(`http://10.0.2.2:8080/folder/${id}`)
    return response.data //id dönücek

})
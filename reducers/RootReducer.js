import { combineReducers } from "@reduxjs/toolkit"
import cardReducer  from "./CardReducer"
import folderReducer from "./FolderReducer"
import  setReducer  from "./SetReducer"
import  userReducer  from "./UserReducer"



const rootReducer = combineReducers({
    user: userReducer,
    set:setReducer,
    folder:folderReducer,
    card:cardReducer,
})

export default rootReducer
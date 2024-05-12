import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    status: false,
    userdata : null,
    fileid:null,
}
const authslice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        login:(state , action)=>{
            state.status = true;
            state.userdata = action.payload;
        },
        logout:(state)=>{
            state.status = false;
            state.userdata = null;
        },
        setfileid:(state,action)=>{
            state.fileid = action.payload;
        }
    }
})

export const  {login , logout , setfileid} = authslice.actions;
export default authslice.reducer;
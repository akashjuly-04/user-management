import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null, 
    isLoggedIn: !!localStorage.getItem('user'), 
  };

const authSlice=createSlice({
    name:'auth',
    initialState:{
        isLoggedIn:false,
        user:null,
    },
    reducers:{
        loginSucess:(state,action)=>{
            state.isLoggedIn=true;
            state.user=action.payload
            localStorage.setItem('user',JSON.stringify(action.payload))
        },
        logout:(state)=>{
            state.isLoggedIn=false;
            state.user=null;
            localStorage.removeItem('user')
        },
        updateProfile: (state, action) => {
            if (state.user) {
              state.user = { ...state.user, ...action.payload }
            }
        }
    }

});

export const {loginSucess,logout,updateProfile}=authSlice.actions;
export default authSlice.reducer;
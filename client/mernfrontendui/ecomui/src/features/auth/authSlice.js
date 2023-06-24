import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkAuth, createUser, loginUser } from './authApi';

const initialState = {
    loggedInUserToken: null, // this should only contain user identity => 'id'/'role'
    status: 'idle',
    user:{},
    error: null,
    userChecked: false,
    mailSent: false,
    passwordReset:false
  };

  export const createUserAsync = createAsyncThunk(
    'user/Signup',
    async(userInfo,{rejectWithValue}) => {
        try{
            const resp = await createUser(userInfo);
            console.log('create user ',resp);
            return resp;
        }catch(err){
            console.log('create user err ',err);
            return rejectWithValue(err);
        }
    }
  )
  export const loginUserAsync = createAsyncThunk(
    'user/loginUser',
    async (loginInfo, { rejectWithValue }) => {
      try {
        const response = await loginUser(loginInfo);
        console.log('from res ',response.data)
        return response.data;
      } catch (error) {
        console.log('------',error);
        return rejectWithValue(error);
      }
    }
  );

  
  export const checkAuthAsync = createAsyncThunk(
    'user/checkAuth',
    async (user,{rejectWithValue}) => {
        try{
        // console.log('from checkAuthAsync 000 == ',user)
        const response = await checkAuth(user);
        // console.log('-----from checkAuthAsync 111 ',response)
            return response.data;
        }   catch(err){
            console.log('Error from check auth  222 ',err)
            return rejectWithValue(err);
        }     
    }
  )
 
  export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(createUserAsync.pending, (state)=> {state.status='loading'})
            .addCase(createUserAsync.fulfilled,(state,action)=>{state.status='idle';state.loggedInUserToken=action.payload;console.log('from reducers ',action.payload)})
            .addCase(loginUserAsync.pending,(state)=>{state.status='loading'})
            .addCase(loginUserAsync.fulfilled,(state,action)=>{state.status='idle';state.loggedInUserToken = action.payload;})
            .addCase(loginUserAsync.rejected,(state,action)=>{state.status='idle';state.error=action.payload;})
            .addCase(checkAuthAsync.pending,(state)=>{state.status='loading'})
            .addCase(checkAuthAsync.fulfilled,(state,action)=>{state.status='idle';state.user=action.payload.user;state.userChecked=true})
            .addCase(checkAuthAsync.rejected,(state,action)=>{state.status='idle';state.userChecked=false})
    }
  });


  export const selectLoggedInUser=(state)=> state.auth.loggedInUserToken;
  export const selectUserInfo = (state)=> state.auth.user;
  export const selectError=(state)=> state.auth.error;
  export const selectUserChecked= (state)=> state.auth.userChecked;

  export default authSlice.reducer;
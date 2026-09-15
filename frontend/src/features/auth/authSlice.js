import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"


//Get user from localstorage
const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//Register new user
export const register = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error) {
            const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString()


            return thunkAPI.rejectWithValue(message)
        }
    }
)

//Login a user
export const login = createAsyncThunk(
    "auth/login",
    async (user, thunkAPI) => {
        console.log(user)
    }
)


export const authSlice = createSlice({
    name: "auth",
    initialState,

    // reducers are JavaScript functions responsible for determining how the application's state changes in response to an action. They act as the "deciders" that take the current state and an incoming action, process the update, and return the new state
    reducers: {
        //After performing the required function we want all the states to go back to their default value
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload  //in the function "register", if we encounter an error then we return:- "thunkAPI.rejectWithValue(message)" , here the message returned is what acts as the "payload"
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload  //in the function "register", if we encounter an error then we return:- "thunkAPI.rejectWithValue(message)" , here the message returned is what acts as the "payload"
                state.user = null
            })
    },
})


export const { reset } = authSlice.actions
export default authSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import ticketService from "./ticketService"


const initialState = {
    tickets: [],
    ticket: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//Create a New Ticket
export const createTicket = createAsyncThunk(
    "tickets/create",
    async (ticket, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error) {
            const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString()


            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {

    }
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
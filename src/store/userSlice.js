import {createSlice} from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "users",
    initialState: {
        users: null
    },
    reducers: {
        addUsers(state, action){

            state.users = action.payload.user
        }
    }
})

export const {addUsers} = UserSlice.actions

export default UserSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"
// const  
export const userSlice = createSlice({
    name: 'users',
    initialState: { value: [] },
    reducers: {
        createUser: (state, action, res) => {
            state.value.push(action.payload)
            const name = action.payload.name
            const username = action.payload.username
            console.log(username + 'name:' + name)
        },
        updateUser: (state, action) => {

        },
        deleteUser: (state, action) => {

        }
    }
})
// const { action, reducers } = userSlice
export const { createUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer
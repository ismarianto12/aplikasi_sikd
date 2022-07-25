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
        deleteUser: (state, action) => {
            state.value = state.value.filter((e) => e.id !== action.payload.id)
        },
        updateUser: (state, action) => {
            state.value.map((e) => {
                if (e.id === action.payload.id) {
                    e.username = action.payload.username
                    e.name = action.payload.name
                }
            })
        }
    }
})
// const { action, reducers } = userSlice
export const { createUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer
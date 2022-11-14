import { createSlice } from '@reduxjs/toolkit'
// import { ordered as icecreamOrdered }from '../icecream/icecreamSlice'

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(icecreamOrdered, (state) => {
    //         state.numOfCakes--
    //     })
    // }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
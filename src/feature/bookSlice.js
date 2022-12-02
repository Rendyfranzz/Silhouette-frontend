import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    name:"",
    tanggal:"",
    jam:"",
    paket:"",
    qr:"",
}

export const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers:{
        reset: (state) => initialState,
        addName(state,action){
            state.name = action.payload
        },addTanggal(state,action){
            state.tanggal = action.payload
        }
        ,addJam(state,action){
            state.jam = action.payload
        }
        ,addPaket(state,action){
            state.paket = action.payload
        },addQr(state,action){
            state.qr = action.payload
        } 
    },
    
})

export const {reset} = bookSlice.actions
export const {addName,addJam,addPaket,addTanggal,addQr} = bookSlice.actions
export default bookSlice.reducer;
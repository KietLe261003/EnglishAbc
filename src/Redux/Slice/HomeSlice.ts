import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  openModal: number;
  openCreateFormDocument: number;
}

const initialState: CounterState = {
  value: 0,
  openModal: 0,
  openCreateFormDocument: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<number>) => {
      state.openModal = action.payload;
    },
    setCloseModal: (state) => {
      state.openModal = 0;
    },
    setOpenCreateFormDocument: (state, action: PayloadAction<number>)=>{
      state.openCreateFormDocument=action.payload;
    }
  },
});
export const {
  setOpenModal,
  setCloseModal,
  setOpenCreateFormDocument,
} = counterSlice.actions;

export default counterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wheels: [],
};

const wheelSlice = createSlice({
  name: "wheels",
  initialState,
  reducers: {
    addWheel: (state, action) => {
      const { id, name, options } = action.payload;
      const newWheel = {
        id,
        name,
        options,
        rolledOption: null,
      };
      state.wheels = [...state.wheels, newWheel];
    },
    deleteAllWheels: (state) => {
      state.wheels = [];
    },
    selectRandomOption: (state, action) => {
      const wheelId = action.payload;
      const wheel = state.wheels.find((w) => w.id === wheelId);
      if (wheel) {
        const randomIndex = Math.floor(Math.random() * wheel.options.length);
        wheel.rolledOption = wheel.options[randomIndex];
      }
    },
    deleteWheel: (state, action) => {
      const wheelId = action.payload;
      state.wheels = state.wheels.filter((w) => w.id !== wheelId);
    },
  },
});

export const { addWheel, deleteAllWheels, selectRandomOption, deleteWheel } =
  wheelSlice.actions;
export default wheelSlice.reducer;

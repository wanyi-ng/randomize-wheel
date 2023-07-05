import { createSlice } from '@reduxjs/toolkit'

const wheelSlice = createSlice({
  name: 'wheels',
  initialState: {
    wheels: [],
  },
  reducers: {
    addWheel: (state, action) => {
      const { id, name, options } = action.payload;
      const newWheel = {
        id,
        name,
        options,
        selectedOption: null,
      };
      state.wheels.push(newWheel);
    },
    updateWheel: (state, action) => {
      const { wheelId, newName, newOptions } = action.payload
      const wheel = state.wheels.find(wheel => wheel.id === wheelId)
      if (wheel) {
        wheel.name = newName
        wheel.options = newOptions
      }
    },
    removeWheel: (state, action) => {
      state.wheels = state.wheels.filter(wheel => wheel.id !== action.payload.id)
    },
    deleteAllWheels: (state) => {
      state.wheels = [];
    },
    addOption: (state, action) => {
      const { wheelId, option } = action.payload
      const wheel = state.wheels.find(wheel => wheel.id === wheelId)
      if (wheel) {
        wheel.options.push(option)
      }
    },
    editOption: (state, action) => {
      const { wheelId, optionId, updatedOption } = action.payload
      const wheel = state.wheels.find(wheel => wheel.id === wheelId)
      if (wheel) {
        const optionIndex = wheel.options.findIndex(option => option.id === optionId)
        if (optionIndex !== -1) {
          wheel.options[optionIndex] = updatedOption
        }
      }
    },
    deleteOption: (state, action) => {
      const { wheelId, optionId } = action.payload
      const wheel = state.wheels.find(wheel => wheel.id === wheelId)
      if (wheel) {
        const optionIndex = wheel.options.findIndex(option => option.id === optionId)
        if (optionIndex !== -1) {
          wheel.options = wheel.options.filter(option => option.id !== optionId)
        }
      }
    },
    selectRandomOption: (state, action) => {
      const { wheelId } = action.payload
      const wheel = state.wheels.find(_ => _.id === wheelId)
      if (wheel) {
        const randomIndex = Math.floor(Math.random() * wheel.options.length)
        const rolledOption = wheel.options[randomIndex];
        wheel.selectedOption = rolledOption
        return rolledOption
      }
      return ''
    }
  },
})

export const { addWheel, updateWheel, removeWheel, deleteAllWheels, addOption, editOption, deleteOption, selectRandomOption } = wheelSlice.actions
export default wheelSlice.reducer
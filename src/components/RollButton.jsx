import React from 'react'
import { useDispatch } from 'react-redux'
import { selectRandomOption } from '../store/reducers/wheelSlice'

export default function RollButton({ wheelId }) {

  const dispatch = useDispatch()

  const handleSelectRandomOption = async () => {
    await dispatch(selectRandomOption(wheelId))
  }

  return (
    <button
      type='button'
      className="btn btn-primary"
      aria-label='Randomly select one of your options'
      onClick={handleSelectRandomOption}
    >
      Roll
    </button>
  )
}

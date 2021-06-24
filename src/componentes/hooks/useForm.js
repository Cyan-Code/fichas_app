import { useState } from 'react'

export const useForm = (initialState = {}) => {
  const [cards, setCards] = useState({})

  const reset = () => {
    setCards (initialState)
  }

  const handleInputChange = ({target}) => {
    setCards({
      ...cards,
      [target.name]: target.value
    })
  }
  
  return [cards, handleInputChange, reset]

}

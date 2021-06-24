import React, { useReducer } from 'react'
import { AppRoute } from '../router/AppRoute';
import { FichasContext } from './FichasContext';
import { FichasReducer } from './FichasReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const MainApp = () => {

  const [fichas, dispatch] = useReducer(FichasReducer, [], init)

  return (
    <FichasContext.Provider
      value = {{
        fichas,
        dispatch
      }}
    >
      <AppRoute />
    </FichasContext.Provider>
  )
}

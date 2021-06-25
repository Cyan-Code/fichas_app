import React, { useContext, useEffect } from 'react'
import { AddCard } from './AddCard';
import { FichasContext } from './FichasContext';

export const CreateCard = () => {

  const {fichas, dispatch} = useContext(FichasContext)

  console.log(fichas)

  useEffect(() => {

  }, [])

    // llamar a fichas del MainApp, ademas debo de tomar el HTML y pasar las props como si ese HTML fuera un comoponente
    const handleAddFichas = () => {

    }

    return (
      <div>
        <AddCard />
      </div>
    )

}

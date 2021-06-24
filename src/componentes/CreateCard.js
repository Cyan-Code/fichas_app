import React, { useEffect } from 'react'
import { useForm } from './hooks/useForm';


export const CreateCard = () => {
  
  console.log('object');

  const [card, handleInputChange, reset] = useForm({
    nombre: '',
    email: '',
    anios: '',
    papeles: '',
    genero: '',
    nacimiento: '',
  })
  
  useEffect(() => {

  }, [])

  const submit = (e) => {
    e.preventDefault()
    // llamar a fichas del MainApp
    console.log(card);
    reset()
  }

  return (
    <form
      className="row g-3 container-sm"
      onSubmit = {submit}
    >
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">Nombre</label>
        <input
          type="email"
          className="form-control"
          name = "nombre"
          onChange = { handleInputChange }
        />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label">Email</label>
        <input
          type="password"
          className="form-control"
          name = "email"
          onChange = { handleInputChange }
        />
      </div>
      <div className="col-md-3">
        <label for="inputState" className="form-label">Años laborados</label>
        <select
          className = "form-select"
          name = "anios"
          onChange = { handleInputChange }
        >
          <option selected>Seleccione...</option>
          <option>De 0 a 2 </option>
          <option>De 2 a 4 </option>
          <option>De 4 a 6 </option>
          <option>De 6 a 10 </option>
          <option>Mas de 10... </option>
        </select>
      </div>
      <div className="col-md-2">
        <label for="inputState" className="form-label">¿Tiene papeles al dia?</label>
        <select
          className="form-select"
          name = "papeles"
          onChange = { handleInputChange }
        >
          <option selected>Seleccione...</option>
          <option>Si</option>
          <option>No</option>
        </select>
      </div>
      <div className="col-md-2">
        <label for="inputState" className="form-label">Genero</label>
        <select
          className="form-select"
          name = "genero"
          onChange = { handleInputChange }
        >
          <option selected>Seleccione...</option>
          <option>Hombre </option>
          <option>Mujer </option>
          <option>Otro </option>
        </select>
      </div>
      <div className="col-md-3">
        <label for="inputState" className="form-label">Fecha de nacimiento</label>
        <input
          type="date"
          className="form-control"
          name = "nacimiento"
          onChange = { handleInputChange }    
        />
      </div>  
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form>
  )
}

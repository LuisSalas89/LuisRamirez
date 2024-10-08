import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ThemeContext } from '../../context/ThemeContext';


function Menu() {

  const {theme, handleTheme } = useContext(ThemeContext)

  return (
    <>
    <div className={`d-flex flex-column justify-content-start ${theme}`} >



     <h2 className='text-center'>Menu</h2>
     
     <Link className='btn btn-primary p-1 m-1' to="/">Home</Link>
     <Link className='btn btn-primary p-1 m-1' to="/todolist4">Todo List</Link>
     <Link className='btn btn-primary p-1 m-1' to="/formulario2">Formulario </Link>
     <Link className='btn btn-primary p-1 m-1' to="/pokemones">Pokemones</Link>
     <Link className='btn btn-primary p-1 m-1' to="/modales">Modales</Link>
     <Link className='btn btn-primary p-1 m-1' to="/contador">Contador</Link>
     <Link className='btn btn-primary p-1 m-1' to="/memorizacion">Memorizacion</Link>
     <Link className='btn btn-primary p-1 m-1' to="/context">Context</Link>
     <a className='btn btn-primary p-1 m-1' href="https://pokedex-puce-seven.vercel.app/"  rel="noopener noreferrer">
Pokedex</a>

     
     </div>
     
     
    </>
  )
}

export default Menu
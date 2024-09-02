import React from 'react'
import UserItemComponent from './UserItemComponent'
import '../css/UserListComponent.css'

export default function UserListComponent({usuarios}) {
    if (!usuarios || !Array.isArray(usuarios) || usuarios.length === 0) {
        // console.log("No hay usuarios disponibles");
        return <p>Ingresa un usuario</p>;
    }
    return (
    <ul className='UserList'>
        {usuarios.map((usuario, index) => (
            <div key={index}>
                <br />
                <UserItemComponent usuario={usuario}/>
                <br />
                <hr />
            </div>
        ))}
    </ul>
  )
}

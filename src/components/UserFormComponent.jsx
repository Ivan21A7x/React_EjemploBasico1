import { useState } from "react";
import '../css/UserFormComponent.css';

export default function UserFormComponent({addUser}) {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [id, setID] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (nombre && edad && id) {
            const nuevoUsuario = { nombre, edad, id };
            addUser(nuevoUsuario);

            console.log(nuevoUsuario);
            
            // Resetea los valores a cadenas vacías
            setNombre("");
            setEdad("");
            setID("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="SubmitNewUser">
            <input 
                className="Input"
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder="Nombre" 
            />
            <input 
                className="Input"
                type="number" 
                value={edad} 
                onChange={(e) => setEdad(e.target.value)} 
                placeholder="Edad" 
            />
            <input 
                className="Input"
                type="text" 
                value={id} 
                onChange={(e) => setID(e.target.value)} 
                placeholder="ID" 
            />
            <button className="Button" type="submit">Agregar Usuario</button>
        </form>
    );
}
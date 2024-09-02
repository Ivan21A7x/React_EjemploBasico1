import { useState } from 'react';
import './App.css';
import TitleComponent from './components/TitleComponent';
import UserFormComponent from './components/UserFormComponent'
import UserListComponent from './components/UserListComponent';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const addUser = (nuevoUsuario) => {
    setUsuarios(prevUsuarios => [...prevUsuarios, nuevoUsuario]);
  };

  return (
    <div className="App">
      <TitleComponent />
      <UserFormComponent addUser={addUser}/>
      <UserListComponent usuarios={usuarios}/>
    </div>          
  );
}

export default App;

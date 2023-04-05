import { Routes, Route, Link } from 'react-router-dom';
import './css/App.css';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div>
      <h1 className="title title-blue">⚡ My Business Manager 24</h1>
      <h1 className="title title-black">A plataforma de gestão empresarial que nasceu para revolucionar o mundo</h1>
      <p className="text">O único software necessário para garantir a segurança e o sucesso do seu negócio!</p>
      <button className="button first-button">Entre em contato</button>
      <button className="button second-button"><Link to="/" className="link">Lista de Usuários</Link></button>
      <button className="button second-button"><Link to="user/create" className="link">Criar Usuários</Link></button>
      <Routes>
        <Route index element={<ListUser />} />
        <Route path="user/create" element={<CreateUser />} />
        <Route path="user/:id/edit" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route, Link } from 'react-router-dom';
import './css/App.css';
import ListCompany from './components/ListCompany';
import CreateCompany from './components/CreateCompany';
import EditCompany from './components/EditCompany';

function App() {
  return (
    <div id="home-page">
      <h1 className="title title-blue">⚡MBM24</h1>
      <section id="content-home">
        <h1 className="title title-blue">⚡ My Business Manager 24</h1>
        <h1 className="title title-black">A plataforma de gestão empresarial que nasceu para revolucionar o mundo</h1>
        <p className="text">O único software necessário para garantir a segurança e o sucesso do seu negócio!</p>
      </section>
      <section id="storage-company">
        <button className="button first-button"><Link to="/" className="link">Lista de Empresas</Link></button>
        <button className="button first-button"><Link to="company/create" className="link">Criar Empresa</Link></button>
        <Routes>
          <Route index element={<ListCompany />} />
          <Route path="company/create" element={<CreateCompany />} />
          <Route path="company/:id/edit" element={<EditCompany />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;

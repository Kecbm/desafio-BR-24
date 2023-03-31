import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div>
      <h1>React CRUD using PHP and MySQL</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route patch="user/create" element={<CreateUser />} />
          <Route patch="user/:id/edit" element={<EditUser />} />
        </Routes>
    </div>
  );
}

export default App;

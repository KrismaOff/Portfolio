import { createContext } from 'react';

import './App.css';
import { Outlet } from 'react-router';

// import MainPage from '../Pages/MainPage';
// import EventPage from '../Pages/EventPage';
// import AdminPage from '../Pages/AdminPage';
// import UserPage from '../Pages/UserPage';
import Header from '../Header'

import useHandleUser from '../../hooks/mainHooks/useHandleUser';
import useCreateDB from '../../hooks/handleActionDB/nativeDB/useCreateDB';

export const StatusUserContext = createContext(null)

function App() {

  const [status] = useCreateDB()
  const { userData } = useHandleUser("") // ADMIN, USERID_e8c5499, USERID_e8c5498, ""

  return (
    <StatusUserContext.Provider value={{ status: status, ...userData }}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </StatusUserContext.Provider>
  );
}

export default App;

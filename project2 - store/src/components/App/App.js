import { createContext } from 'react';
import { Outlet } from 'react-router';
import './App.css';

import Header from '../Templates/Header'
import Footer from '../Templates/Footer';

import useDetermLoc from '../../hooks/general/useDetermLoc';

export const PageContext = createContext(null)

function App() {

  const {location} = useDetermLoc() 

  // <Link to="" page={state} />

  return (
    <PageContext.Provider value={location}>
      <div className="App">
        <Header location={location}/>
        <div className='app_content'>
          {location && <Outlet />}
        </div>
        <div className='app_footer'>
          <Footer />
        </div>
      </div>
    </PageContext.Provider>
  );
}

export default App;

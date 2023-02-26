import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

function App() {
  return (
    
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      
    </>
  );
}

export default App;

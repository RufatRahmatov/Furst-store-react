import React from 'react';
import { RouterProvider, } from 'react-router-dom';
import { Router } from './router';
import './style.scss';



const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;

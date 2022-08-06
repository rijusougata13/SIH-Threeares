import { Navigate, useRoutes } from 'react-router-dom';
import React, { useEffect }  from 'react';
// layouts

import HomeSecondary from './pages/HomeSecondary';
// ----------------------------------------------------------------------

export default function Router() {




  return useRoutes([
    {
      path : "/",
      element : <HomeSecondary/>,
      
    },
    
  ]);
}

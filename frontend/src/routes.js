import { Navigate, useRoutes } from 'react-router-dom';
import React, { useEffect } from 'react';
// layouts

import HomeSecondary from './pages/HomeSecondary';
import Transport from './pages/Transport';
import Equipment from './pages/Equipment';
import Material from './pages/Material';
// import Lca from './pages/Lca';

import Lca2 from './pages/Lca2';
import Lca3 from './pages/Lca3';
import Inventory from './pages/Inventory';
import VehicleGHG from './pages/VehicleGHG';
// ----------------------------------------------------------------------

export default function Router() {




  return useRoutes([
    {
      path: "/",
      element: <HomeSecondary />,

    },
    {
      path: "/transport",
      element: <Transport />,
    },
    {
      path: "/equipment",
      element: <Equipment />,
    },
    {
      path: "/material",
      element: <Material />
    },
    {
      path: "/lca",
      element: <Lca2 />
    },

    {
      path: "/inventory",
      element: <Inventory />

    },

    {
      path: "/vehicleGHG",
      element: <VehicleGHG />
    }


  ]);
}

import React from 'react';
import { Header } from '@components';
import {PokemonsPage} from "@pages";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from "./utils/constants/ROUTES";


export const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>

            <Route path={ROUTES.POKEMONS} element={<PokemonsPage />}/>
            <Route path='*' element={<Navigate to={ROUTES.POKEMONS} />}/>
        </Routes>
      </BrowserRouter>
  );
};

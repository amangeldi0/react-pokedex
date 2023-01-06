import React from 'react';
import { Header } from '@components';
import { PokemonsPage, PokemonPage, AuthPage } from '@pages';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@constants';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.AUTH} element={<AuthPage />} />
        <Route
          element={
            <>
              <Header /> <Outlet />
            </>
          }
        >
          <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
          <Route path='*' element={<Navigate to={ROUTES.POKEMONS} />} />
        </Route>
        <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

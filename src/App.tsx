import React from 'react';
import { Header } from '@components';
import { PokemonsPage, PokemonPage } from "@pages";
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';
import { ROUTES } from "./utils/constants/ROUTES";


export const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<><Header /> <Outlet /></>}>
                <Route path={ROUTES.POKEMONS} element={<PokemonsPage />}/>
                <Route path='*' element={<Navigate to={ROUTES.POKEMONS} />}/>
            </Route>
            <Route path={ROUTES.POKEMON} element={<PokemonPage />}/>

        </Routes>

      </BrowserRouter>
  );
};

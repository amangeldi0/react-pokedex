import React from 'react';
import { ROUTES } from '@constants';
import { auth } from '@firebaseApp';

import { useAuthState } from "react-firebase-hooks/auth";

import { Header } from '@components';
import { PokemonsPage, PokemonPage, AuthPage } from '@pages';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

export const AuthApp = () => (
    <Routes>
        <Route path={ROUTES.AUTH} element={<AuthPage />} />
        <Route path='*' element={<Navigate to={ROUTES.AUTH} />} />
    </Routes>
);

export const App: React.FC = () => {

    const [user, loading, error]= useAuthState(auth);

    return (
        <BrowserRouter>
            {user === null ? <AuthApp /> : (
                <Routes>
                    <Route element={<><Header /> <Outlet /></>}>
                        <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
                        <Route path='*' element={<Navigate to={ROUTES.POKEMONS} />} />
                    </Route>
                    <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
                </Routes>
            )}
        </BrowserRouter>
    );
};

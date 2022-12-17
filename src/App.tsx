import React from 'react';
import { Header } from '@components';
import {PokemonsPage} from "@pages";


export const App: React.FC = () => {
  return <div className='App'>
    <Header />
    <PokemonsPage />
  </div>;
};

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { globalStyles } from '@comma/ds';

import { MainPage } from 'src/pages';

export const App: React.FC = () => {
  globalStyles();

  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import DefaultLayout from '@/layouts/DefaultLayout';

import DetailsPage from '@/pages/DetailsPage';
import HomePage from '@/pages/HomePage';

import { store } from '@/stores';

import '@/scss/styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<DetailsPage />} />
          </Routes>
        </DefaultLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
);

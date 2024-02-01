import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { LandingPage } from '@pages/LandingPage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@theme/theme';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<LandingPage />}>
            <Route />
            <Route />
        </Route>
    )
);

export const App: React.FC = () => {
    return <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} /> 
        </ThemeProvider>
    </>;
};


import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@root/App';
import '@root/i18n';
import { ConfigurationProvider } from '@providers/ConfigurationProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigurationProvider>
            <App />
        </ConfigurationProvider>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { WalkerListProvider } from './contexts/WalkerListContext'
import { UserProvider } from './contexts/UserContext'
import { AppointmentProvider } from './contexts/AppointmentContext'
import App from './Components/App/App';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <WalkerListProvider>
                <AppointmentProvider>
                    <App />
                </AppointmentProvider>
            </WalkerListProvider>
        </UserProvider>
    </BrowserRouter>
    , document.getElementById('root'));

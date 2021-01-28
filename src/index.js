import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { BarberListProvider } from './contexts/BarberListContext'
import { UserProvider } from './contexts/UserContext'
import { AppointmentProvider } from './contexts/AppointmentContext'
import App from './Components/App/App';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <BarberListProvider>
                <AppointmentProvider>
                    <App />
                </AppointmentProvider>
            </BarberListProvider>
        </UserProvider>
    </BrowserRouter>
    , document.getElementById('root'));

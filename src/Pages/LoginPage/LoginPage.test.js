import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage'


it('renders LoginPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
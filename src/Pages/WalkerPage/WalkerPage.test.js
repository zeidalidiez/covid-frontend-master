import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import WalkerPage from './WalkerPage'


it('renders WalkerPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <WalkerPage />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
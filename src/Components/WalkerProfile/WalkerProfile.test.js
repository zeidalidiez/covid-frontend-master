import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import WalkerProfile from '../WalkerProfile/WalkerProfile'


it('renders WalkerProfile without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <WalkerProfile />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import WalkerList from './WalkerList'


it('renders WalkerList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <WalkerList />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
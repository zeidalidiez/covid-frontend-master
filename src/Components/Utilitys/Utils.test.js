import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ServiceButtons } from '../Utilitys/Utils'


it('renders Utils without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ServiceButtons/>
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
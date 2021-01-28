import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import  Walker from './Walker'



it('renders Walker without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Walker  walker={{walker:{}}}/>
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})

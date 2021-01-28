import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { WalkerListProvider } from '../../Contexts/WalkerListContext'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <BrowserRouter>
        <WalkerListProvider>
          <App />
        </WalkerListProvider>
      </BrowserRouter>
      , 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
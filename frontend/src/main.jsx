import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const root=document.getElementById("root");// importing the root class div from index.html file

ReactDom.createRoot(root).render( // attaching the react to the main html element with class root

  // wrapping the App element with BrowserRouter to create and provite contexts to certain hooks
  <BrowserRouter> 
  <StrictMode> 
    <App />
  </StrictMode>
  </BrowserRouter>
)

import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Clerk APIkey expired or empty');
// }

const root=document.getElementById("root");// importing the root class div from index.html file

ReactDom.createRoot(root).render( // attaching the react to the main html element with class root

  // wrapping the App element with BrowserRouter to create and provite contexts to certain hooks
  <BrowserRouter> 
  <StrictMode>
     {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}> */}
    <App />
    {/* </ClerkProvider> */}
  </StrictMode>
  </BrowserRouter>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Compo/Main';
import Phones from './Compo/Phones';
import Single from './Compo/Single';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/Phones",
        element: <Phones></Phones>,
        loader:()=> fetch('http://localhost:3000/phones')
      },
      {
        path:'/phone/:id',
        element:<Single></Single>,
        loader:({params})=> fetch(`http://localhost:3000/phones/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)

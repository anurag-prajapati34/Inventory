import { Children } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

import { Products } from '../components/Products'

export const routes = new createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            
            {
                path: '/',
                element: <Products />
            }
        ]
    }
])


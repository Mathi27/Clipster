 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter ,RouterProvider,Outlet } from 'react-router-dom';
import UIcheck from './Components/UI';
import './index.css';
import ErrorBoundryUI from './Components/FallbackUI';
 
import { Feed ,ChannelDetail,NavBar,VideoDetial,SearchFeed  } from './Exports';
const AppLayout = () =>{
    return (
        <div className='main-div'>
          <NavBar/>
           <Outlet/>
        </div>
    )
}

const appRoute = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<ErrorBoundryUI/>,
        children:[
            {
                path:'/',
                element:<Feed/>
            },
            {
                path:'/video/:id',
                element:<VideoDetial/>
            },
            {
                path:'/channel/:id',
                element:<ChannelDetail/>
            },
            {
                path:'/search/:searchTerm',
                element:<SearchFeed/>
            }
        
        ]
     
    }
])
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute} />);
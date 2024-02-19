import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
    return (
        <div className="block relative">
            <RouterProvider router={router}>
            </RouterProvider>
        </div>
    );
}

export default App;
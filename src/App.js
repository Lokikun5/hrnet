import './style/App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import HomePage from "./pages/HomePage";
import DatasList from "./pages/DatasList";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/data-list',
        element: <DatasList/>
    }
]);

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router}/>
            </PersistGate>
        </Provider>
    );
}

export default App;
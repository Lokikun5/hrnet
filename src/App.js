import './style/App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from "./pages/HomePage";
import EmployeeList from "./pages/EmployeeList";

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/employee-list',
    element:<EmployeeList/>
  }
]);

function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  );
}

export default App;
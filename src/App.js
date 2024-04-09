import './style/App.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      <RouterProvider router={router}/>
  );
}

export default App;
import {
  createBrowserRouter,
} from "react-router-dom";
import { Home } from './Pages/Home/Home';
import {Login} from './Pages/Login/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);
// function App() {
//   return (
//     <>
//     <Login/>
//     </>
//   );
// }

export default router;
 
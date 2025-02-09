import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import NavPar from "./Pages/NavPar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavPar />}>
      <Route index element={<Home />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Root } from "./routes/Root";
import { Home } from "./routes/Home";
import { AddCard } from "./routes/AddCard";
import { Cards } from "./routes/Cards";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cards" element={<Cards />} />
      <Route path="addcard" element={<AddCard />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

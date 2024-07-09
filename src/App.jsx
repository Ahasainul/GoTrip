import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pagesh/Home";
function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
      <Route path="/" element={<Home/>}/>
     </Route>
    )
  );
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App

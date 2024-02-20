import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Chat from "../pages/chat";


  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="messages" element={<Chat />} />
      </Route>
    )
  );
  
  const Router_App = () => {
    return <RouterProvider router={router} />;
  };
  
  export { Router_App };
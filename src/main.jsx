import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js"
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {Protected } from "./components"
import {
  Freetrail,
  Membership,
  Bookclass,
  Displayexercise,
  Login,
  Signup,
  Home,
  Showstreak
} from "./pages/";
import { Provider } from "react-redux";

<Protected></Protected>;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route
        path="start"
        element={
          <Protected>
            <Freetrail />
          </Protected>
        }
      />
      <Route
        path="login"
        element={
          <Protected authentication= {false}>
            <Login  />
          </Protected>
        }
      />
            <Route
        path="signup"
        element={
          <Protected authentication= {false}>
            <Signup  />
          </Protected>
        }
      />
        <Route
        path="streak/:exercisename"
        element={
          <Protected>
            <Showstreak />
          </Protected>
        }
      />
      <Route
        path="start/:exercisename"
        element={
          <Protected>
            <Displayexercise />
          </Protected>
        }
      />
      <Route
        path="memberships"
        element={
          <Protected>
            <Membership />
          </Protected>
        }
      />
      <Route
        path="bookclass"
        element={
          <Protected>
            <Bookclass />
          </Protected>
        }
      />
      <Route
        path="ourclasses"
        element={
          <Protected>
            <Freetrail />
          </Protected>
        }
      />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>

    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

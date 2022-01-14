import * as React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary"
import NotFound from "../components/404";
import Layout from "../components/layout"
import Home from "../pages/home"
import routerArray from "./components"

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/layout' element={<Layout />} >
          {routerArray.map((router)=>(
            <Route key={router.path} path={router.path} element={router.component()} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
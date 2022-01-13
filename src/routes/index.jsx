import * as React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary"
import NotFound from "../components/404";
import Layout from "./layout"
import Home from "./home"
import Promotion from './state-promotion'
import { Hooks } from './use-hooks'
import Ref from './use-ref'

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/layout' element={<Layout />} >
          <Route path="promotion" element={<Promotion />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="ref" element={<Ref />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
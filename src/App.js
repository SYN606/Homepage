import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import SchemaMarkup from './components/SchemaMarkup'
import './css/global.css'
import Base from './components/Base'
import { HeadProvider } from 'react-head';


const App = () => {
  return (
    <>
      <HeadProvider>
      <SchemaMarkup />
        <Router>
          <Routes>
            <Route path="/" element={<Base />}>
              <Route path="" element={<Homepage />} />
            </Route>
          </Routes>
        </Router>
      </HeadProvider>
    </>
  );
};

export default App;


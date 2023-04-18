import React, { useState, useEffect, useCallback } from "react";
import App1 from './App1';
import  Home   from './Home';
import { BrowserRouter, Router, Route, Routes, Link, Outlet } from 'react-router-dom';



function App() {
  
  return (
      <main>
        <section className="home">
              <BrowserRouter>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/App1" element={<App1 />} />
                  </Routes>
              </BrowserRouter>
          </section>

    </main>
  );
}

export default App;

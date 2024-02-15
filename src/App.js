// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Header from './components/Header';
import HomePage from './pages/HomePage';
// Import other necessary components and pages

function App() {
  return <HomePage />;
}

export default App;

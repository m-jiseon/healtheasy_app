import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FitnessEquipList from './components/FitnessEquipList';
import FitnessEquipInfo from './components/FitnessEquipInfo';
import FitnessPlan from './components/FitnessPlan';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FitnessEquipList />} />
          <Route path="/equipment-list" element={<FitnessEquipList />} />
          <Route path="/equipment-info/:id" element={<FitnessEquipInfo />} />
          <Route path="/fitness-plan" element={<FitnessPlan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

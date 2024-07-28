import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import TrainingAttendanceForm from './components/TrainingAttendanceForm';
import DailyAttendanceForm from './components/DailyAttendanceForm';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="training_attendance" element={<TrainingAttendanceForm/>} />
          <Route path="daily_training_attendance" element={<DailyAttendanceForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

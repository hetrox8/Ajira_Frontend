import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';

const AdminDashboard = () => {
  const [dailyAttendance, setDailyAttendance] = useState([]);
  const [trainingAttendance, setTrainingAttendance] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchAttendance = async () => {
      const dailyRes = await api.get('/forms/daily-attendance');
      setDailyAttendance(dailyRes.data);
      const trainingRes = await api.get('/forms/training-attendance');
      setTrainingAttendance(trainingRes.data);
    };
    fetchAttendance();
  }, []);

  const exportToGoogleSheets = async () => {
    await api.post('/forms/export');
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Daily Attendance</h3>
      <ul>
        {dailyAttendance.map((entry) => (
          <li key={entry.id}>{entry.date} - {entry.userId}</li>
        ))}
      </ul>
      <h3>Training Attendance</h3>
      <ul>
        {trainingAttendance.map((entry) => (
          <li key={entry.id}>{entry.date} - {entry.userId}</li>
        ))}
      </ul>
      <button onClick={exportToGoogleSheets}>Export to Google Sheets</button>
    </div>
  );
};

export default AdminDashboard;

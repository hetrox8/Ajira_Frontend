import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../utils/api';

const TrainingAttendanceForm = () => {
  const [date, setDate] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await api.post('/forms/training-attendance', { userId: user.id, date });
    } else {
      alert("You need to be logged in to submit the form");
    }
  };

  return (
    <div>
      <h2>Training Attendance Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TrainingAttendanceForm;

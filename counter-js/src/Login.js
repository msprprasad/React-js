import React, { useState } from 'react';
import './App.css';

function Login({ onLogin, onSwitchToSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setError('');
      onLogin();
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <div className="error">{error}</div>}
      </form>
      <div style={{ marginTop: '12px', fontSize: '0.98rem' }}>
        Don't have an account?{' '}
        <button type="button" style={{ color: '#007bff', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={onSwitchToSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login; 
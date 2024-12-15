import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic: No data is fetched or logged
    if (password !== repeatPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Signup successful!');
    // Add your signup logic here
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label htmlFor="username" style={{ marginBottom: '5px' }}>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }}
          placeholder="Enter your username"
        />

        <label htmlFor="email" style={{ marginBottom: '5px' }}>Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }}
          placeholder="Enter your email"
        />

        <label htmlFor="password" style={{ marginBottom: '5px' }}>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }}
          placeholder="Enter your password"
        />

        <label htmlFor="repeatPassword" style={{ marginBottom: '5px' }}>Repeat Password</label>
        <input
          type="password"
          id="repeatPassword"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          style={{ padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }}
          placeholder="Repeat your password"
        />

        <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;

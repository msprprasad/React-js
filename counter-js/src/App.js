import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';

const SCIENTIFIC_BUTTONS = [
  { label: 'sin', value: 'sin(' },
  { label: 'cos', value: 'cos(' },
  { label: 'tan', value: 'tan(' },
  { label: 'log', value: 'log(' },
  { label: '√', value: 'sqrt(' },
  { label: '^', value: '^' },
  { label: 'π', value: 'π' },
  { label: 'e', value: 'e' },
  { label: '(', value: '(' },
  { label: ')', value: ')' },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [scientific, setScientific] = useState(false);

  if (!loggedIn) {
    if (showSignUp) {
      return <SignUp onSignUp={() => setShowSignUp(false)} onSwitchToLogin={() => setShowSignUp(false)} />;
    } else {
      return <Login onLogin={() => setLoggedIn(true)} onSwitchToSignUp={() => setShowSignUp(true)} />;
    }
  }

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Helper to safely evaluate scientific expressions
  const safeEval = (expr) => {
    let replaced = expr
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/\^/g, '**')
      .replace(/√/g, 'Math.sqrt')
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/\u00D7/g, '*')
      .replace(/\u00F7/g, '/');
    try {
      // eslint-disable-next-line no-eval
      return eval(replaced);
    } catch {
      return 'Error';
    }
  };

  const handleEqual = () => {
    const evalResult = safeEval(input);
    setResult(evalResult);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowSignUp(false);
    setInput('');
    setResult('');
    setScientific(false);
  };

  return (
    <div className="App">
      <nav className="app-nav">
        <span className="nav-logo">MyCalc</span>
        <button className="nav-btn" onClick={() => setScientific((s) => !s)}>
          {scientific ? 'Standard Mode' : 'Scientific Mode'}
        </button>
        <button className="nav-btn" onClick={handleLogout}>Logout</button>
      </nav>
      <header className="app-header">
        <h2>Welcome to My Calculator App</h2>
      </header>
      <main style={{ width: '100%' }}>
        <div className="calculator-wrapper">
          <h1>{scientific ? 'Scientific Calculator' : 'Calculator'}</h1>
          <button
            style={{ marginBottom: 16, padding: '8px 18px', borderRadius: 6, border: 'none', background: scientific ? '#007bff' : '#444', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => setScientific((s) => !s)}
          >
            {scientific ? 'Standard Mode' : 'Scientific Mode'}
          </button>
          <div className="calculator-display">
            <div className="input">{input}</div>
            <div className="result">{result !== '' ? '=' + result : ''}</div>
          </div>
          <div className="calculator-buttons">
            {scientific &&
              SCIENTIFIC_BUTTONS.map((btn) => (
                <button key={btn.label} onClick={() => handleClick(btn.value)}>{btn.label}</button>
              ))}
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('\u00F7')}>÷</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('\u00D7')}>×</button>
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button onClick={handleClear}>C</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button className="equal" onClick={handleEqual}>=</button>
          </div>
        </div>
      </main>
      <footer className="app-footer">
        <span>&copy; {new Date().getFullYear()} My Calculator App. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;

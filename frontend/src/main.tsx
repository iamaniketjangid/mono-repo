import React from 'react';
import ReactDOM from 'react-dom/client';

// shared library se API base URL import
import { API_BASE_URL } from '@org/shared';

const App = () => {
  const [msg, setMsg] = React.useState<string>('');

  React.useEffect(() => {
    fetch(`${API_BASE_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => {
        setMsg(data.message);
      })
      .catch((err) => {
        console.error('API error:', err);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Frontend</h1>
      <p>{msg}</p>
    </div>
  );
};

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


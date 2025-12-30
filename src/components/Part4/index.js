import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import LoginForm from './LoginForm';
import Bomb from './Bomb';

// Component hiển thị thông báo lỗi
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ color: '#ef4444', padding: '10px', textAlign: 'center' }}>
      <p style={{ fontWeight: 'bold' }}>Something went wrong:</p>
      <pre style={{ fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary} className="danger" style={{ marginTop: '10px' }}>Try again</button>
    </div>
  );
}

export default function Part4() {
  const [explode, setExplode] = useState(false);

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#1f2937' }}>Part 4: Testing Strategies</h2>
      <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '40px', color: '#6b7280' }}>
        Note: The real work of this part is in the `__tests__` folder. Run `npm test` to verify.
      </p>
      
      {/* Grid Layout */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '40px', 
        alignItems: 'start' 
      }}>
        
        {/* --- Cột 1: Login Form --- */}
        <div style={{ minWidth: '0' }}> 
           <LoginForm />
        </div>

        {/* --- Cột 2: Error Boundary --- */}
        <div className="card" style={{ margin: 0, height: 'fit-content' }}>
          <h3>Ex 4.2: Error Boundary</h3>
          <p style={{ marginBottom: '15px' }}>
            Click the button below to mount the "Bomb" component.
          </p>
          
          <div style={{ textAlign: 'center' }}>
            <ErrorBoundary 
              FallbackComponent={ErrorFallback}
              onReset={() => setExplode(false)}
            >
              {explode ? <Bomb /> : (
                <button 
                  onClick={() => setExplode(true)} 
                  style={{ background: '#f59e0b', color: 'black', fontWeight: 'bold' }} 
                >
                  Activate Bomb 💣
                </button>
              )}
            </ErrorBoundary>
          </div>
        </div>

      </div>
    </div>
  );
}
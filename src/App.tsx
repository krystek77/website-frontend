import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
const HomePage = React.lazy(() => import('./pages/home'));

export const App = () => {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading page</div>}>
        <HomePage />
      </React.Suspense>
    </Router>
  );
};

export default App;

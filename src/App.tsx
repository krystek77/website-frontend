import React from 'react';
const HomePage = React.lazy(() => import('./pages/home'));

export const App = () => {
  return (
    <React.Suspense fallback={<div>Loading page</div>}>
      <HomePage />
    </React.Suspense>
  );
};

export default App;

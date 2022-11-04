import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const Home = React.lazy(() => import('./Pages/home'));
const Contact = React.lazy(() => import('./Pages/contact'));
const Profile = React.lazy(() => import('./Pages/profile'));

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="profile">Profile</Link>
            <Link to="contact">Contact</Link>
          </nav>
          <Suspense fallback={<h1 style={{ marginTop: '4rem' }}>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </Suspense>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;

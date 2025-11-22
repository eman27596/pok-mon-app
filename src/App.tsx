import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import PaginationView from './pages/PaginationView';
import InfiniteScrollView from './pages/InfiniteScrollView';
import PokemonDetail from './pages/PokemonDetail';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<PaginationView />} />
              <Route path="/infinite-scroll" element={<InfiniteScrollView />} />
              <Route path="/pokemon/:id" element={<PokemonDetail />} />
            </Routes>
          </Layout>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;

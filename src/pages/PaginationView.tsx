import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { pokemonApi } from '../services/pokemonApi';
import PokemonCard from '../components/PokemonCard';
import Pagination from '../components/Pagination';
import SkeletonCard from '../components/SkeletonCard';
import ErrorMessage from '../components/ErrorMessage';

const ITEMS_PER_PAGE = 20;

const PaginationView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['pokemon-list', currentPage],
    queryFn: () => pokemonApi.getPokemonList(ITEMS_PER_PAGE, (currentPage - 1) * ITEMS_PER_PAGE),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const totalPages = data ? Math.ceil(data.count / ITEMS_PER_PAGE) : 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (error) {
    return (
      <ErrorMessage
        message={(error as Error).message || 'Failed to load Pokémon'}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-primary-700 via-secondary-600 to-primary-700 bg-clip-text text-transparent mb-3">
          Explore Pokémon
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          Page <span className="text-primary-600 font-bold">{currentPage}</span> of <span className="text-primary-600 font-bold">{totalPages}</span> • Total: <span className="text-primary-600 font-bold">{data?.count || 0}</span> Pokémon
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : data?.results.map((pokemon) => (
              <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))}
      </div>

      {data && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default PaginationView;


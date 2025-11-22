import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { pokemonApi } from '../services/pokemonApi';
import { PokemonListItem } from '../types/pokemon';
import PokemonCard from '../components/PokemonCard';
import SkeletonCard from '../components/SkeletonCard';
import ErrorMessage from '../components/ErrorMessage';

const ITEMS_PER_BATCH = 20;

const InfiniteScrollView: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [allPokemon, setAllPokemon] = useState<PokemonListItem[]>([]);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['pokemon-infinite', offset],
    queryFn: () => pokemonApi.getPokemonList(ITEMS_PER_BATCH, offset),
    staleTime: 5 * 60 * 1000,
    enabled: true,
  });

  React.useEffect(() => {
    if (data?.results) {
      setAllPokemon((prev) => {
        // Prevent duplicates
        const existingUrls = new Set(prev.map((p) => p.url));
        const newPokemon = data.results.filter((p) => !existingUrls.has(p.url));
        return [...prev, ...newPokemon];
      });
    }
  }, [data]);

  const handleLoadMore = () => {
    setOffset((prev) => prev + ITEMS_PER_BATCH);
  };

  const hasMore = data && data.next !== null;

  if (error && allPokemon.length === 0) {
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
          Showing <span className="text-primary-600 font-bold">{allPokemon.length}</span> of <span className="text-primary-600 font-bold">{data?.count || 0}</span> Pokémon
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.url} name={pokemon.name} url={pokemon.url} />
        ))}
        {isLoading &&
          Array.from({ length: ITEMS_PER_BATCH }).map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} />
          ))}
      </div>

      {hasMore && !isLoading && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-2xl hover:scale-105 transform"
          >
            Load More Pokémon
          </button>
        </div>
      )}

      {!hasMore && allPokemon.length > 0 && (
        <div className="text-center py-8">
          <div className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 px-8 py-4 rounded-2xl">
            <p className="text-primary-800 font-bold text-lg">
              You've reached the end! 🎉
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollView;


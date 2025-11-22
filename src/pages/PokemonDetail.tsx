import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { pokemonApi } from '../services/pokemonApi';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const TYPE_COLORS: { [key: string]: string } = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
};

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: pokemon, isLoading, error, refetch } = useQuery({
    queryKey: ['pokemon-detail', id],
    queryFn: () => pokemonApi.getPokemonById(id!),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={(error as Error).message || 'Failed to load Pokémon details'}
        onRetry={() => refetch()}
      />
    );
  }

  if (!pokemon) {
    return null;
  }

  const imageUrl = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  // Get stats in the correct order
  const getStatValue = (statName: string) => {
    const stat = pokemon.stats.find(s => s.stat.name === statName);
    return stat ? stat.base_stat : 0;
  };

  const stats = [
    { name: 'HP', value: getStatValue('hp') },
    { name: 'Attack', value: getStatValue('attack') },
    { name: 'Defense', value: getStatValue('defense') },
    { name: 'Sp. Attack', value: getStatValue('special-attack') },
    { name: 'Sp. Defense', value: getStatValue('special-defense') },
    { name: 'Speed', value: getStatValue('speed') },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center text-gray-700 hover:text-gray-900 font-semibold mb-6 transition-colors group"
      >
        <svg
          className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to List
      </Link>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header with gradient and name */}
        <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-secondary-400 px-8 py-6 text-center">
          <h1 className="text-3xl font-bold text-white capitalize flex items-center justify-center gap-2">
            ⚡ {pokemon.name}
          </h1>
          <p className="text-white/90 font-semibold text-lg mt-1">
            #{pokemon.id.toString().padStart(3, '0')}
          </p>
        </div>

        {/* Main content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Image and basic info */}
            <div className="flex flex-col items-center">
              {/* Pokemon Image */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-4 w-full flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt={pokemon.name}
                  className="w-64 h-64 object-contain drop-shadow-lg"
                />
              </div>

              {/* Type badges */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {pokemon.types.map((type) => (
                  <span
                    key={type.slot}
                    style={{ backgroundColor: TYPE_COLORS[type.type.name] || '#A8A878' }}
                    className="text-white px-4 py-2 rounded-full font-bold capitalize text-sm shadow-md"
                  >
                    {type.type.name}
                  </span>
                ))}
              </div>

              {/* Height and Weight */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                <div className="text-center">
                  <div className="flex items-center justify-center text-gray-400 mb-1">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                    <span className="text-sm font-medium">Height</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {(pokemon.height / 10).toFixed(1)} m
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-gray-400 mb-1">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                    <span className="text-sm font-medium">Weight</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    {(pokemon.weight / 10).toFixed(1)} kg
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Stats */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Base Stats</h2>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-semibold">{stat.name}</span>
                      <span className="text-gray-900 font-bold">{stat.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-gray-800 to-gray-900 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((stat.value / 255) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Abilities Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Abilities</h2>
            <div className="flex flex-wrap gap-3">
              {pokemon.abilities.map((ability) => (
                <div
                  key={ability.slot}
                  className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg"
                >
                  <span className="text-gray-900 font-medium capitalize">
                    {ability.ability.name.replace('-', ' ')}
                  </span>
                  {ability.is_hidden && (
                    <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                      (Hidden)
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Base Experience */}
          {pokemon.base_experience && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Base Experience
              </h2>
              <div className="text-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  {pokemon.base_experience} XP
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;


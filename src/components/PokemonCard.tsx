import React from 'react';
import { Link } from 'react-router-dom';
import { pokemonApi } from '../services/pokemonApi';

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  const id = pokemonApi.extractIdFromUrl(url);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <Link
      to={`/pokemon/${id}`}
      className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-primary-200"
    >
      <div className="aspect-square bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 p-6 flex items-center justify-center relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute inset-0 bg-gradient-radial from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 drop-shadow-lg"
          loading="lazy"
        />
      </div>
      <div className="p-4 text-center bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-xl font-bold text-gray-800 capitalize mt-1.5 group-hover:text-primary-700 transition-colors">{name}</h3>
        <p className="text-sm text-gray-600 font-bold tracking-wide">#{id.toString().padStart(3, '0')}</p>
      </div>
    </Link>
  );
};

export default PokemonCard;


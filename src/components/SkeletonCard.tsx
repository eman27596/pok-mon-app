import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-100 overflow-hidden">
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        
        {/* Pokeball placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-24 h-24 rounded-full border-8 border-gray-300 relative">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white border-4 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
      
      <div className="p-4 text-center space-y-3">
        {/* ID number skeleton */}
        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full w-16 mx-auto relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        </div>
        
        {/* Name skeleton */}
        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full w-28 mx-auto relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;


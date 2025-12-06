'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface CounterProps {
  initialCount?: number;
}

export default function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initialCount);
  const [loading, setLoading] = useState<boolean>(false); // Placeholder for async operations
  const [error, setError] = useState<string | null>(null); // Placeholder for errors

  const increment = () => {
    // Simulate a brief async operation for loading state
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
      setLoading(false);
    }, 100);
  };

  const decrement = () => {
    // Simulate a brief async operation for loading state
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setCount(prevCount => Math.max(0, prevCount - 1)); // Prevent negative counts
      setLoading(false);
    }, 100);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-xl text-white max-w-sm mx-auto my-8">
      <h2 className="text-3xl font-extrabold mb-4" id="counter-label">Simple Counter</h2>

      {error && (
        <p className="text-red-300 mb-4" role="alert">Error: {error}</p>
      )}

      <div
        className="text-7xl font-bold mb-6 tracking-wide"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        aria-labelledby="counter-label"
      >
        {loading ? (
          <span className="animate-pulse">...</span>
        ) : (
          count
        )}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={decrement}
          disabled={loading}
          className="flex items-center justify-center px-6 py-3 bg-white text-indigo-700 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Decrement count"
        >
          <Minus className="w-5 h-5 mr-2" />
          Decrement
        </button>
        <button
          onClick={increment}
          disabled={loading}
          className="flex items-center justify-center px-6 py-3 bg-white text-purple-700 rounded-full shadow-md hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Increment count"
        >
          <Plus className="w-5 h-5 mr-2" />
          Increment
        </button>
      </div>
    </div>
  );
}

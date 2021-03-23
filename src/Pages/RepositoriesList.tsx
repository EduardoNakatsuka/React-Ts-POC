import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const state = useSelector((state) => state);

  const searchRepository = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={searchRepository}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />

        <button>Search</button>
      </form>
    </div>
  );
};
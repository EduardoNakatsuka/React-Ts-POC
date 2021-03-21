import React, { useEffect, useRef, useState } from 'react';

interface Cats {
  cats: Cat[];
};

const cats = [
  { name: 'Pitu', color: 'brown' },
  { name: 'Giginha', color: 'white and black' },
  { name: 'Lulu', color: 'white' },
  { name: 'Lili', color: 'black' },
];

interface Cat {
  name: String;
  color: String;
};

export const CatFinder: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [catName, setCatName] = useState<string>('');
  const [foundCat, setFoundCat] = useState<Cat | undefined>();

  useEffect(() => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  }, []);

  const findCat = (): void => {
    const foundCat = cats.find(cat => {
      return cat.name.startsWith(catName);
    });

    setFoundCat(foundCat);
  };

  return (
    <div>
      <h3>Find Cat</h3>

      <input
        ref={inputRef}
        value={catName}
        onChange={e => setCatName(e.target.value)}
      />

      <button onClick={findCat}>Find Cat</button>

      {
        foundCat
          ? (
            <>
              <h3>Cat Details</h3>
              <span>Name: {foundCat.name}</span>
              <span>Color: {foundCat.color}</span>
            </>
          )
          : (
            <>
              <h3>Cat Detauls</h3>
              <span>Cat not found :c</span>
            </>
          )
      }
    </div>
  );
};
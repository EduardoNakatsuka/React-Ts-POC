import React, { useState } from 'react';

// interface CatObject {
//   name: string,
//   color?: string,
// } TODO

export const CatList: React.FC = () => {
  const [catName, setCatName] = useState<string>('');
  const [cats, setCats] = useState<string[]>([]);

  const onCatNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCatName(e.target.value);
  };

  // const addCat = (e: React.MouseEvent<HTMLButtonElement>): void => { // not going to use event sooo
  const addCat = (): void => {
    setCatName('');
    setCats([...cats, catName]);
  };

  const checkAddCat = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') addCat();
  };

  return (
    <div>
      <h3>Cat List</h3>

      <ul>
        {cats.map((cat, index) => (
          <li key={index}>
            {cat}
          </li>
        ))}
      </ul>

      <input value={catName} onChange={onCatNameChange} onKeyDown={checkAddCat} />
      <button onClick={addCat}>Add cat</button>
    </div>
  )
};

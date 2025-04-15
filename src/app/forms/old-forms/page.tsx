'use client';

import { useState } from 'react';

export default function FormsPage() {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    if (name === 'hola') {
      alert('hola');
    } else {
      setError('Invalid name');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl font-bold">FORMS</h1>
      <p className="mt-4 text-gray-600">This page is under construction.</p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="mt-4 p-2 border border-gray-300 rounded"
          onChange={(val) => setName(val.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="cursor-pointer" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

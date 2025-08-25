import React from 'react';
import '@/styles/home.scss';
import Hero from './home/utils/Hero';

async function getData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-cache',
    });
    if (!res.ok) throw new Error('Error');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function page() {
  const data = await getData();
  return (
    <div className="home">
      <Hero data={data as any} />
    </div>
  );
}

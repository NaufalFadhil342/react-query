import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const Home = () => {
  const { data, isError, isLoading, refetch } = useQuery(['cat'], () => {
    return Axios.get('https://catfact.ninja/fact').then((res) => res.data);
  });

  if (isError) {
    return <h1>There was an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>THIS IS A HOME PAGE</h1>
      <p>{data?.fact}</p>
      <button onClick={refetch}>Updated Data</button>
    </div>
  );
};

export default Home;

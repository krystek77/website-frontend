import React from 'react';

type Item = {
  id: number;
  title: string;
  Description: string;
  image: { url: string; alternativeText: string };
  slug: string;
};

export const useBusiness = () => {
  const [businesses, setBusinesses] = React.useState<Item[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/businesses');
      const data = await response.json();
      setBusinesses(data);
    };
    fetchData();
    return () => {};
  }, []);
  return { businesses };
};

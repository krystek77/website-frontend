import React from 'react';

type Item = {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  image: { url: string; alternativeText: string };
  introduction: string;
  slug: string;
  laundryprojects: {
    id: number;
    title: string;
    needs: { id: number; name: string; value: string }[];
    dryers: { id: number; name: string; value: string }[];
    ironers: { id: number; name: string; value: string }[];
    washers: { id: number; name: string; value: string }[];
  }[];
};

export const useBusiness = () => {
  const [businesses, setBusinesses] = React.useState<Item[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pralma-strapi.herokuapp.com/businesses`
      );
      const data = await response.json();
      setBusinesses(data);
    };
    fetchData();
    return () => {};
  }, []);
  return { businesses };
};

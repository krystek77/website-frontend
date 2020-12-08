import React from 'react';

type BusinessList = {
  id: string;
  text: string;
};
type Paragraphs = {
  id: string;
  text: string;
};

type Item = {
  id: number;
  title: string;
  subtitle: string;
  Description: string;
  image: { url: string; alternativeText: string };
  business_list: BusinessList[];
  paragraph: Paragraphs[];
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

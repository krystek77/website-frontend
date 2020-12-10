import React from 'react';
import { withRouter } from 'react-router-dom';
import { HeroContainer } from '../containers';
type Product = {
  id: number;
  model: string;
};
type RangeProducts = {
  category: {};
  description: string;
  id: number;
  kind: string;
  line: string;
  products: Product[];
};

export const ProductDetailsPage = withRouter((props) => {
  const [
    rangeProducts,
    setRangeProducts,
  ] = React.useState<RangeProducts | null>(null);
  const [currentProductID, setCurrentProductID] = React.useState<number>();

  const {
    match: {
      params: { slug },
    },
  } = props;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/lines/${slug}`);
      const data = await response.json();
      const id = data.products.map((product: Product) => product.id)[0];
      setRangeProducts(data);
      setCurrentProductID(id);
    };
    fetchData();
    return () => {};
  }, [slug]);

  let products: Product[] | null = null;
  let product: Product | undefined;
  if (!!rangeProducts) {
    products = rangeProducts?.products;
    if (!!products) {
      product = products.find((product) => product.id === currentProductID);
    }
  }

  console.log('ID', currentProductID);
  console.log('products', products);
  console.log('product', product);

  return (
    <React.Fragment>
      <HeroContainer
        data={{
          title: 'Product Details',
          subtitle: 'Product details',
          image: { url: '' },
        }}
      />
      <div>
        <div>
          {products &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <button
                  key={product.id}
                  onClick={() => setCurrentProductID(product.id)}
                >
                  {product.model}
                </button>
              );
            })}
        </div>
      </div>
      <main style={{ marginTop: '45px', padding: '2rem' }}>
        <h1>Product Details Page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil
        adipisci voluptates modi architecto ratione eligendi provident aut
        explicabo placeat, deserunt nisi, repellat accusamus ut sit soluta.
        Minima, officiis voluptates.
      </main>
    </React.Fragment>
  );
});

export default ProductDetailsPage;

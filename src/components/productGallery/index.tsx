import React from 'react';
import {
  Container,
  Inner,
  ViewportImage,
  ViewportThumbnails,
  Thumbnail,
} from './styles/productGallery';
interface IProductGallery {
  ViewportImage: React.FC<{ src: string; alt: string }>;
  ViewportThumbnails: React.FC;
  Thumbnail: React.FC<{ url: string; onClick: () => void; active: boolean }>;
}
export const ProductGallery: React.FC & IProductGallery = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
};
ProductGallery.ViewportImage = function ProductGalleryViewportImage({
  src,
  alt,
  ...restProps
}) {
  return (
    <ViewportImage {...restProps}>
      <img src={src} alt={alt} />
    </ViewportImage>
  );
};

ProductGallery.ViewportThumbnails = function ProductGalleryViewportThumbnails({
  children,
  ...restProps
}) {
  return <ViewportThumbnails {...restProps}>{children}</ViewportThumbnails>;
};

ProductGallery.Thumbnail = function ProductGalleryThumbnail({ ...restProps }) {
  return <Thumbnail {...restProps}></Thumbnail>;
};

export default ProductGallery;

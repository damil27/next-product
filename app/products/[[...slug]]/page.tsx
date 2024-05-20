import React from 'react'


interface slugProps{
    params: { slug: string[] };
    searchParams: {sortOrder:string}
}

const ProductsPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: slugProps) => {
  return (
    <div>
      products : {slug} - {sortOrder}
    </div>
  );
};

export default ProductsPage;
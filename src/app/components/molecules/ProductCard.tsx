"use client";
import ProductImage from "../atoms/ProductImage";
import ProductCategory from "../atoms/ProductCategory";
import ProductName from "../atoms/ProductName";
import ProductRating from "../atoms/ProductRating";
import ProductPrice from "../atoms/ProductPrice";
import PlusButton from "../atoms/PlusButton";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="min-w-[250px] flex-shrink-0 rounded-lg p-4 bg-white scroll-snap-align-start relative">
      <ProductImage src={product.image} alt={product.name} />
      <div className="text-left">
        <ProductCategory>Chair</ProductCategory>
        <ProductName>{product.name}</ProductName>
        <ProductRating />
        <ProductPrice>{product.price}</ProductPrice>
      </div>
      <PlusButton />
    </div>
  );
}

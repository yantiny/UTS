"use client";
import CategoryButton from "../organisms/CategoryButton";

export default function ProductCategories({ categories, activeCategory, setActiveCategory }: any) {
  return (
    <div className="flex justify-center my-6">
      <div className="flex bg-gray-100 rounded-full p-1">
        {categories.map((category: string) => (
          <CategoryButton
            key={category}
            category={category}
            active={activeCategory === category}
            onClick={setActiveCategory}
          />
        ))}
      </div>
    </div>
  );
}

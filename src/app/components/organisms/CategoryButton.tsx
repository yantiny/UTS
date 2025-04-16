export default function CategoryButton({ category, active, onClick }: any) {
    return (
      <button
        onClick={() => onClick(category)}
        className={`px-5 py-2 rounded-full text-sm transition
          ${
            active ? "bg-white text-black font-medium" : "text-gray-600"
          }`}
      >
        {category}
      </button>
    );
  }
  
import { Search } from 'lucide-react';

export default function SearchButton() {
  return (
    <button className="absolute right-4 top-1/2 transform -translate-y-2 text-white-600">
      <Search size={20} />
    </button>
  );
}

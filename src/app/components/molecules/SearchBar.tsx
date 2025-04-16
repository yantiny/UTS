import SearchInput from "../atoms/SearchInput";
import SearchButton from "../atoms/ButtonSearch";

export default function SearchBar() {
  return (
    <div className="mt-6 flex justify-center">
      <div className="relative w-full max-w-md">
        <SearchInput />
        <SearchButton />
      </div>
    </div>
  );
}

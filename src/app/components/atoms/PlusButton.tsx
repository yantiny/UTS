import { Plus } from "lucide-react";

export default function PlusButton() {
  return (
    <button className="absolute bottom-4 right-4 bg-black text-white w-10 h-10 flex items-center justify-center rounded-full text-2xl shadow-lg">
      <Plus size={24} />
    </button>
  );
}

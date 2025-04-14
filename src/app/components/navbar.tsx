import Image from "next/image";
export default function navbar(){
    return (
        <div>
             <header className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-20">
                <h1 className="text-2xl font-bold text-white">Panto</h1>
                <nav className="hidden md:flex space-x-6 text-white pr-8">
                <a href="#" className="hover:text-gray-300">Furniture</a>
                <a href="#" className="hover:text-gray-300">Shop</a>
                <a href="#" className="hover:text-gray-300">About Us</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
                </nav>
                <Image src='/Bag.png' alt="tas" width={30} height={30}></Image>
            </header>
        </div>
    );
}
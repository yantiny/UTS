import { Search } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <div>
            <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
              <Image
              src="/hero-img.png"
              alt="Hero Image"
              objectFit='cover'
              layout="fill"
              />
                <div className="relative y-20 text-center max-w-3xl px-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Make Your Interior More Minimalistic & Modern
                </h1>
                <p className="mt-4 text-lg opacity-70 pb-10">
                  Turn your room with Panto into a lot more minimalist and modern with ease and speed
              </p>
               <div className="mt-6 flex justify-center">
                  <div className="relative w-full max-w-md">
                    <input
                      type="text"
                      placeholder="Search furniture"
                      className="w-full py-2 px-4 rounded-full bg-white/28 text-white-900 focus:outline-none border-1 "
                    />
                    <button className="absolute right-4 top-1/2 transform -translate-y-2 text-white-600">
                      <Search size={20} />
                    </button>
                  </div>
                </div>
              </div>
          </section>
        </div>
    );
    }
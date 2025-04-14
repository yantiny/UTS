import { Search } from 'lucide-react';

export default function Hero() {
    return (
        <div>
            <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
              <div className="absolute inset-0 z-0">
              </div>
                <div className="relative z-10 text-center max-w-3xl px-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Make Your Interior More Minimalistic & Modern
                </h1>
                <p className="mt-4 text-lg opacity-80 pb-15">
                  Turn your room with Panto into a lot more minimalist and modern with ease and speed
              </p>
               <div className="mt-6 flex justify-center">
                  <div className="relative w-full max-w-md">
                    <input
                      type="text"
                      placeholder="Search furniture"
                      className="w-full py-3 px-5 pr-12 rounded-full bg-white/60 text-gray-800 focus:outline-none border-white border-2 text-center"
                    />
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                      <Search size={20} />
                    </button>
                  </div>
                </div>
              </div>
          </section>
        </div>
    );
    }
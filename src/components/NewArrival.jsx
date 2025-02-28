import Ps5 from '../assets/ps5.png'
import Woman from '../assets/woman.png'
import Speaker from '../assets/speaker.png'
import Perfume from '../assets/perfume.png'

const NewArrival = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-6">
        <span className="text-red-500 font-semibold">Featured</span>
        <h2 className="text-3xl font-bold">New Arrival</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative col-span-2 md:col-span-1">
          <img src="ps5.png" alt="PS5" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-xl font-semibold">PlayStation 5</h3>
            <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
            <button className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded-lg">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative">
          <img src="women.jpg" alt="Women" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-lg font-semibold">Womens Collections</h3>
            <p className="text-sm">Featured women collections that give you another vibe.</p>
            <button className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded-lg">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative">
          <img src="speaker.jpg" alt="Speakers" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-lg font-semibold">Speakers</h3>
            <p className="text-sm">Amazon wireless speakers.</p>
            <button className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded-lg">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative">
          <img src="perfume.jpg" alt="Perfume" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-lg font-semibold">Perfume</h3>
            <p className="text-sm">GUCCI INTENSEOUD EDP.</p>
            <button className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;

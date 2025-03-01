import Ps5 from '../assets/ps5.png'
import Woman from '../assets/woman.png'
import Speaker from '../assets/speaker.png'
import Perfume from '../assets/perfume.png'

const NewArrival = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-6">
      <div className="flex row-auto items-center gap-2">
        <div className="bg-red-500 rounded h-[35px] w-[20px]"></div>
        <p className="text-red-500 font-bold">Featured</p>
        </div>
        <h2 className="text-3xl font-bold">New Arrival</h2>
      </div>

      <div className="flex gap-x-5">

        <div className="relative h-[500px] w-[500px] bg-black">
          <img src={Ps5} alt="PS5" className=" rounded-lg" />
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-xl font-semibold">PlayStation 5</h3>
            <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
            <button className="mt-2 px-4 py-2 text-white font-semibold rounded-lg underline">
              Shop Now
            </button>
          </div>
        </div>

        <div className=' flex flex-col gap-y-5'>
          <div className="relative h-[250px] w-[500px]  bg-black">
            <img src={Woman} alt="Women" className=" rounded-lg object-cover absolute bottom-0 right-1 h-[250px]"  />

            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-lg font-semibold">Womens Collections</h3>
              <p className="text-base">Featured women collections that <br /> give you another vibe.</p>
              <button className="mt-2  py-2 text-white font-semibold rounded-lg underline">
                Shop Now
              </button>
            </div>

          </div>

<div className='flex'>

          <div className="relative h-[250px] w-[250px] bg-black">
            <img src={Speaker} alt="Speakers" className=" rounded-lg" />
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-lg font-semibold">Speakers</h3>
              <p className="text-sm">Amazon wireless speakers.</p>
              <button className="mt-2 px-4 py-2 text-white font-semibold rounded-lg underline">
                Shop Now
              </button>
            </div>
          </div>

          <div className="relative h-[250px] w-[250px] bg-black">
            <img src={Perfume} alt="Perfume" className=" rounded-lg flex-wrap bg-transparent drop-shadow-[0_5px_5px_white]" />
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-lg font-semibold">Perfume</h3>
              <p className="text-sm">GUCCI INTENSEOUD EDP.</p>
              <button className="mt-2 px-4 py-2 text-white font-semibold rounded-lg underline">
                Shop Now
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;

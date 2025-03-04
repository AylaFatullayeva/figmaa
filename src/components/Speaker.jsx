import Boombox from '../assets/Boombox.png'
import Circles from '../components/Circles'

const Speaker = () => {
    return (
      <div className="flex-1 p-6">
        <div className="bg-black  text-white p-10 rounded-lg flex justify-center ">
          <div>
          <p className="text-green-400 font-bold">Categories</p>
          <h2 className="text-6xl py-2 ">Enhance Your Music Experience</h2>
          <Circles/>
          <button className="mt-4  text-white py-2 px-7 rounded-md bg-green-500">Buy Now!</button>
          </div>
         
          <img src={Boombox} alt="boombox" className="ml-auto flex-wrap bg-transparent drop-shadow-[20px_20px_20px_gray]" />
         
          
        </div>


      </div>
    );
  };
  
  export default Speaker;
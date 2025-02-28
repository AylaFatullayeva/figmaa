import Hero from '../assets/hero.png'
const Text = () => {
    return (
      <div className="flex-1 p-6">
        <div className="bg-black  text-white p-10 rounded-lg flex justify-center ">
          <div>
          <p className="text-base">iPhone 14 Series</p>
          <h2 className="text-6xl ">Up to 10% off Voucher</h2>
          <button className="mt-4 mr-auto text-white py-2 px-4 rounded-md">
            Shop Now →
          </button>
          </div>
         

          <img src={Hero} alt="phone" className="ml-auto flex-wrap" />
          
        </div>
      </div>
    );
  };
  
  export default Text;